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

const regionCodes = {
  서울: '108',
  인천: '112',
  수원: '119',
  전주: '146',
  광주: '156',
  광양시: '266',
}

// 날짜를 YYYYMMDD 형식으로 변환하는 함수
const formatDate = (date) => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}${month}${day}`
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

      const stationId = regionCodes[selectedRegion]

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
