import React, { useEffect, useState, useRef } from 'react'
import { CContainer, CHeader } from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilSun, cilRain, cilCloud, cilCloudy, cilSnowflake, cilHome } from '@coreui/icons'
import axios from 'axios'
import { useNavigate } from 'react-router-dom' // React Router의 NavLink 가져오기

const AppHeader = () => {
  const headerRef = useRef()

  const [weather, setWeather] = useState(null)
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  )
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchWeather = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          getWeather(latitude, longitude)
        },
        (error) => {
          setError(`위치 정보를 가져올 수 없습니다.`)
        },
      )
    }

    fetchWeather()
    const intervalId = setInterval(() => {
      fetchWeather()
      setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
    }, 60000)

    return () => clearInterval(intervalId)
  }, [])

  const getWeather = async (lat, lon) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&lang=kr&units=metric`,
      )
      setWeather(response.data)
    } catch (error) {
      setError(`날씨 정보를 가져올 수 없습니다.`)
    }
  }

  const getWeatherIcon = (weatherMain) => {
    switch (weatherMain) {
      case 'Clear':
        return cilSun
      case 'Rain':
      case 'Drizzle':
        return cilRain
      case 'Clouds':
        return cilCloud
      case 'Snow':
        return cilSnowflake
      default:
        return cilCloudy
    }
  }

  const handleHomeClick = () => {
    navigate('/')
  }

  return (
    <CHeader position="sticky" className="bg-primary mb-4 p-0" ref={headerRef}>
      <CContainer fluid className="d-flex justify-content-between align-items-center">
        <CIcon
          customClassName="sidebar-brand-full"
          icon={cilHome}
          height={32}
          style={{ cursor: 'pointer' }}
          onClick={handleHomeClick}
        />
        <div className="text-white ms-auto me-3 d-flex align-items-center">
          {weather && (
            <div className="me-4 d-flex align-items-center">
              <CIcon icon={getWeatherIcon(weather.weather[0].main)} size="xl" className="me-2" />
              <div>
                <strong>{weather.main.temp}°C</strong> - {weather.weather[0].description}
              </div>
              <div className="ms-4">
                <strong>{currentTime}</strong>
              </div>
            </div>
          )}
          {error && <div className="me-4">{error}</div>}
        </div>
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
