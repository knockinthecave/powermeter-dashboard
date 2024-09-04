import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Line } from 'react-chartjs-2'
import { CFormSelect, CSpinner } from '@coreui/react-pro'
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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

// 각 지역의 위도와 경도 정보 추가
const regionCodes = {
  서울: { code: 'seoul', lat: 37.5665, lon: 126.978 },
  경기: { code: 'gyeonggi', lat: 37.4138, lon: 127.5183 },
  인천: { code: 'incheon', lat: 37.4563, lon: 126.7052 },
  광주: { code: 'gwangju', lat: 35.1595, lon: 126.8526 },
  전북: { code: 'jeonbuk', lat: 35.7175, lon: 127.153 },
  전남: { code: 'jeonnam', lat: 34.8679, lon: 126.991 },
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

function AirQuality() {
  const [chartData, setChartData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedRegion, setSelectedRegion] = useState('서울')

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = process.env.REACT_APP_AIRKOREA_API_KEY
      const region = regionCodes[selectedRegion].code

      const PM10url = `http://apis.data.go.kr/B552584/ArpltnStatsSvc/getCtprvnMesureLIst?serviceKey=${apiKey}&returnType=json&numOfRows=100&pageNo=1&dataGubun=DAILY&searchCondition=WEEK&itemCode=PM10`
      const PM25url = `http://apis.data.go.kr/B552584/ArpltnStatsSvc/getCtprvnMesureLIst?serviceKey=${apiKey}&returnType=json&numOfRows=100&pageNo=1&dataGubun=DAILY&searchCondition=WEEK&itemCode=PM25`

      try {
        // PM10 데이터 가져오기
        const responsePM10 = await axios.get(PM10url)
        const PM10Data = responsePM10.data.response.body.items

        // PM2.5 데이터 가져오기
        const responsePM25 = await axios.get(PM25url)
        const PM25Data = responsePM25.data.response.body.items

        // 날짜 (x축 라벨)는 PM10과 PM2.5가 동일하다고 가정
        const labels = PM10Data.map((data) => data.dataTime)

        // PM10과 PM2.5 값 가져오기
        const valuesPM10 = PM10Data.map((data) => data[region])
        const valuesPM25 = PM25Data.map((data) => data[region])

        // 차트 데이터 설정
        setChartData({
          labels,
          datasets: [
            {
              label: `PM10(미세먼지)`,
              data: valuesPM10,
              fill: false,
              borderColor: 'rgb(75, 192, 192)', // PM10 색상
              tension: 0.1,
            },
            {
              label: `PM2.5(초미세먼지)`,
              data: valuesPM25,
              fill: false,
              borderColor: 'rgb(255, 99, 132)', // PM2.5 색상
              tension: 0.1,
            },
          ],
        })
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false) // 에러 발생 시에도 로딩 상태 변경
      }
    }

    fetchData()
  }, [selectedRegion])

  useEffect(() => {
    // 현재 위치를 기반으로 가장 가까운 지역을 자동 선택
    const fetchLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords
            // 기본값 서울로 설정
            let closestRegion = '서울'
            let minDistance = Infinity

            // 모든 지역과 현재 위치의 거리를 계산
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

            // 가장 가까운 지역으로 설정
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
  if (error) return <div>{error.message}</div>

  return (
    <div>
      <h2>
        <strong>주간 미세먼지 현황</strong>
      </h2>
      <CFormSelect aria-label="Select region" onChange={handleRegionChange} value={selectedRegion}>
        {Object.keys(regionCodes).map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </CFormSelect>
      {chartData && <Line data={chartData} />}
    </div>
  )
}

export default AirQuality
