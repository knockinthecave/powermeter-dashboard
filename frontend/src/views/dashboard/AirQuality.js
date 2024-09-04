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

const regionCodes = {
  서울: 'seoul',
  경기: 'gyeonggi',
  인천: 'incheon',
  광주: 'gwangju',
  전북: 'jeonbuk',
  전남: 'jeonnam',
}

function AirQuality() {
  const [chartData, setChartData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedRegion, setSelectedRegion] = useState('서울')

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = process.env.REACT_APP_AIRKOREA_API_KEY
      const region = regionCodes[selectedRegion]

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
