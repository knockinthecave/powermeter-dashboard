import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { CFormSelect, CRow, CSpinner } from '@coreui/react-pro'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

// 각 지역의 위도와 경도 정보 추가
const regionCodes = {
  서울: { code: '108', lat: 37.5665, lon: 126.978 },
  인천: { code: '112', lat: 37.4563, lon: 126.7052 },
  수원: { code: '119', lat: 37.2636, lon: 127.0286 },
  전주: { code: '146', lat: 35.8242, lon: 127.147 },
  광주: { code: '156', lat: 35.1595, lon: 126.8526 },
  광양시: { code: '266', lat: 34.9407, lon: 127.6956 }, // 광양시 추가
}

// 날짜를 YYYYMMDD 형식으로 변환하는 함수
const formatDate = (date) => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}${month}${day}`
}

// 두 지점 간의 거리를 계산하는 함수 (Haversine Formula)
const getDistance = (lat1, lon1, lat2, lon2) => {
  const toRad = (value) => (value * Math.PI) / 180
  const R = 6371 // 지구의 반지름 (킬로미터 단위)
  const dLat = toRad(lat2 - lat1)
  const dLon = toRad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c // 거리 반환 (킬로미터)
}

function TemperatureHumidity() {
  const [chartData, setChartData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedRegion, setSelectedRegion] = useState('서울')

  useEffect(() => {
    const fetchWeatherData = async () => {
      const apiKey = process.env.REACT_APP_KMA_API_KEY

      // 시작 날짜: 오늘로부터 8일 전
      const startDate = new Date()
      startDate.setDate(startDate.getDate() - 8)
      const formattedStartDate = formatDate(startDate)

      // 종료 날짜: 오늘로부터 1일 전
      const endDate = new Date()
      endDate.setDate(endDate.getDate() - 1)
      const formattedEndDate = formatDate(endDate)

      const stationId = regionCodes[selectedRegion].code

      const url = `http://apis.data.go.kr/1360000/AsosDalyInfoService/getWthrDataList?serviceKey=${apiKey}&dataType=JSON&startDt=${formattedStartDate}&endDt=${formattedEndDate}&stnIds=${stationId}&numOfRows=10&pageNo=1&dataCd=ASOS&dateCd=DAY`

      try {
        const response = await axios.get(url)
        const data = response.data.response.body.items.item

        const dates = data.map((item) => item.tm)
        const temperatures = data.map((item) => parseFloat(item.avgTa))
        const humidity = data.map((item) => parseFloat(item.avgRhm))

        setChartData({
          labels: dates,
          datasets: [
            {
              label: '일별 평균온도 (°C)',
              data: temperatures,
              fill: false,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              yAxisID: 'y-axis-temp',
            },
            {
              label: '일별 평균습도 (%)',
              data: humidity,
              fill: false,
              backgroundColor: 'rgba(153,102,255,0.4)',
              borderColor: 'rgba(153,102,255,1)',
              yAxisID: 'y-axis-humidity',
            },
          ],
        })
        setLoading(false)
      } catch (error) {
        setError('날씨 데이터를 불러오지 못했습니다.')
        setLoading(false)
      }
    }

    fetchWeatherData()
  }, [selectedRegion])

  // 사용자의 현재 위치를 기반으로 가장 가까운 지역 자동 선택
  useEffect(() => {
    const fetchLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords
            let closestRegion = '서울'
            let minDistance = Infinity

            // 각 지역과 현재 위치의 거리를 계산
            for (const region in regionCodes) {
              const distance = getDistance(
                latitude,
                longitude,
                regionCodes[region].lat,
                regionCodes[region].lon,
              )
              if (distance < minDistance) {
                minDistance = distance
                closestRegion = region
              }
            }

            // 가장 가까운 지역 설정
            setSelectedRegion(closestRegion)
          },
          (error) => {
            console.error('위치 정보를 가져올 수 없습니다.', error)
          },
        )
      }
    }

    fetchLocation()
  }, [])

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value)
  }

  if (loading)
    return (
      <div className="d-flex justify-content-center">
        <strong role="status">Loading...</strong>
        <CSpinner className="ms-auto" />
      </div>
    )
  if (error) return <div>{error}</div>

  return (
    <div>
      <h2>
        <strong>주간 온도 및 습도 현황</strong>
      </h2>
      <CFormSelect
        value={selectedRegion}
        onChange={handleRegionChange}
        aria-label="Select region"
        className="mb-4"
      >
        {Object.keys(regionCodes).map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </CFormSelect>
      {chartData && (
        <CRow>
          <Line
            data={chartData}
            options={{
              scales: {
                'y-axis-temp': {
                  type: 'linear',
                  position: 'left',
                  ticks: {
                    callback: function (value) {
                      return `${value}°C`
                    },
                  },
                },
                'y-axis-humidity': {
                  type: 'linear',
                  position: 'right',
                  ticks: {
                    callback: function (value) {
                      return `${value}%`
                    },
                  },
                },
              },
            }}
          />
        </CRow>
      )}
    </div>
  )
}

export default TemperatureHumidity
