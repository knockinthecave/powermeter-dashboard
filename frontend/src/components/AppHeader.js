import React from 'react'
import { CCol, CWidgetStatsC, CRow } from '@coreui/react-pro'

const AppHeader = () => {
  // Example data for air quality
  const exampleAirQualityData = {
    PM10: 45, // µg/m³
    PM25: 30, // µg/m³
    temperature: 24, // °C
    humidity: 60, // %
  }

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

  return (
    <React.Fragment>
      <CRow>
        <CCol md={3}>
          <CWidgetStatsC
            className="mb-3"
            progress={{ color: 'info', value: (exampleAirQualityData.temperature / 50) * 100 }}
            text="실시간 온도"
            title="온도"
            value={<span style={{ fontSize: '2rem' }}>{exampleAirQualityData.temperature}°C</span>}
          />
        </CCol>
        <CCol md={3}>
          <CWidgetStatsC
            className="mb-3"
            progress={{ color: 'info', value: (exampleAirQualityData.humidity / 100) * 100 }}
            text="실시간 습도"
            title="습도"
            value={<span style={{ fontSize: '2rem' }}>{exampleAirQualityData.humidity}%</span>}
          />
        </CCol>
        <CCol md={3}>
          <CWidgetStatsC
            className="mb-3"
            progress={{ color: 'info', value: (exampleAirQualityData.PM10 / 150) * 100 }}
            text="실시간 미세먼지"
            title="실시간 미세먼지"
            value={
              <span style={{ fontSize: '2rem' }}>
                {getPM10Status(exampleAirQualityData.PM10).emoji}
                {getPM10Status(exampleAirQualityData.PM10).status}
              </span>
            }
          />
        </CCol>
        <CCol md={3}>
          <CWidgetStatsC
            className="mb-3"
            progress={{ color: 'info', value: (exampleAirQualityData.PM25 / 150) * 100 }}
            text="실시간 초미세먼지"
            title="실시간 초미세먼지"
            value={
              <span style={{ fontSize: '2rem' }}>
                {getPM25Status(exampleAirQualityData.PM25).emoji}
                {getPM25Status(exampleAirQualityData.PM25).status}
              </span>
            }
          />
        </CCol>
      </CRow>
    </React.Fragment>
  )
}

export default AppHeader
