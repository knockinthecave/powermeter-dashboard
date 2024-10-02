import React, { useEffect, useState } from 'react'
import { CCol, CWidgetStatsC, CRow } from '@coreui/react-pro'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AppHeader = () => {
  const [airQualityData, setAirQualityData] = useState({
    PM10: 0,
    PM25: 0,
    temperature: 0,
    humidity: 0,
  })

  const getPM10Status = (pmValue) => {
    if (pmValue > 150) {
      return { emoji: '😷', status: '매우 나쁨(151~)' }
    } else if (pmValue > 80) {
      return { emoji: '😐', status: '나쁨(81~150)' }
    } else if (pmValue > 30) {
      return { emoji: '🙂', status: '보통(31~80)' }
    } else {
      return { emoji: '😃', status: '좋음(0~30)' }
    }
  }

  const getPM25Status = (pmValue) => {
    if (pmValue > 75) {
      return { emoji: '😷', status: '매우 나쁨(76~)' }
    } else if (pmValue > 35) {
      return { emoji: '😐', status: '나쁨(36~75)' }
    } else if (pmValue > 15) {
      return { emoji: '🙂', status: '보통(16~35)' }
    } else {
      return { emoji: '😃', status: '좋음(0~15)' }
    }
  }

  const navigate = useNavigate()
  const temperatureHumidityClick = () => {
    navigate('/temperature-humidity')
  }
  const airQualityClick = () => {
    navigate('/air-quality')
  }

  useEffect(() => {
    const fetchWeatherData = async (lat, lon) => {
      try {
        // OpenWeather API 요청
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/airquality/`)

        setAirQualityData({
          temperature: response.data.temperature,
          humidity: response.data.humidity,
          PM10: response.data.pm10,
          PM25: response.data.pm25,
        })
      } catch (error) {
        console.error('Error fetching weather data:', error)
      }
    }

    const updateData = () => {
      const savedLatitude = localStorage.getItem('latitude')
      const savedLongitude = localStorage.getItem('longitude')

      if (savedLatitude && savedLongitude) {
        fetchWeatherData(savedLatitude, savedLongitude)
      } else {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords
            localStorage.setItem('latitude', latitude)
            localStorage.setItem('longitude', longitude)
            fetchWeatherData(latitude, longitude)
          },
          (error) => {
            console.error('Error getting geolocation:', error.message)
          },
        )
      }
    }

    updateData() // 처음에 데이터를 한번 가져옴
    const intervalId = setInterval(updateData, 1200000) // 20분마다 데이터 업데이트

    // 컴포넌트가 언마운트될 때 타이머 정리
    return () => clearInterval(intervalId)
  }, [])

  return (
    <CRow>
      <CCol md={3}>
        <CWidgetStatsC
          className="mb-3"
          onClick={temperatureHumidityClick}
          progress={{ color: 'info', value: (airQualityData.temperature / 50) * 100 }}
          text="실시간 온도"
          title="온도"
          value={<span style={{ fontSize: '2rem' }}>{airQualityData.temperature}°C</span>}
        />
      </CCol>
      <CCol md={3}>
        <CWidgetStatsC
          className="mb-3"
          onClick={temperatureHumidityClick}
          progress={{ color: 'info', value: (airQualityData.humidity / 100) * 100 }}
          text="실시간 습도"
          title="습도"
          value={<span style={{ fontSize: '2rem' }}>{airQualityData.humidity}%</span>}
        />
      </CCol>
      <CCol md={3}>
        <CWidgetStatsC
          className="mb-3"
          onClick={airQualityClick}
          progress={{ color: 'info', value: (airQualityData.PM10 / 150) * 100 }}
          text="실시간 미세먼지"
          title="실시간 미세먼지"
          value={
            <span style={{ fontSize: '2rem' }}>
              {getPM10Status(airQualityData.PM10).emoji}
              {getPM10Status(airQualityData.PM10).status}
            </span>
          }
        />
      </CCol>
      <CCol md={3}>
        <CWidgetStatsC
          className="mb-3"
          onClick={airQualityClick}
          progress={{ color: 'info', value: (airQualityData.PM25 / 150) * 100 }}
          text="실시간 초미세먼지"
          title="실시간 초미세먼지"
          value={
            <span style={{ fontSize: '2rem' }}>
              {getPM25Status(airQualityData.PM25).emoji}
              {getPM25Status(airQualityData.PM25).status}
            </span>
          }
        />
      </CCol>
    </CRow>
  )
}

export default AppHeader
