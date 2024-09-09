import React, { useEffect, useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardSubtitle,
  CCardTitle,
  CCol,
  CProgress,
  CRow,
  CWidgetStatsF,
} from '@coreui/react-pro'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Dashboard = () => {
  // const random = () => Math.round(Math.random() * 100)
  const navigate = useNavigate()

  // 예시 데이터
  // 상태를 정의
  const [airQualityData, setAirQualityData] = useState({
    PM10: 0,
    PM25: 0,
    CO2: 0,
    temperature: 0,
    humidity: 0,
    collectionTime: '',
  })

  const [powerMeter1Data, setPowerMeter1Data] = useState({
    effectiveEnergy: 0,
    reactiveEnergy: 0,
    voltageS: 0,
    currentS: 0,
    voltageR: 0,
    currentR: 0,
    activePower: 0,
    reactivePower: 0,
    voltageT: 0,
    currentT: 0,
    collectionTime: '',
  })

  const [powerMeter2Data, setPowerMeter2Data] = useState({
    effectiveEnergy: 0,
    reactiveEnergy: 0,
    voltageS: 0,
    currentS: 0,
    voltageR: 0,
    currentR: 0,
    activePower: 0,
    reactivePower: 0,
    voltageT: 0,
    currentT: 0,
    collectionTime: '',
  })

  const [powerMeter3Data, setPowerMeter3Data] = useState({
    effectiveEnergy: 0,
    reactiveEnergy: 0,
    voltageS: 0,
    currentS: 0,
    voltageR: 0,
    currentR: 0,
    activePower: 0,
    reactivePower: 0,
    voltageT: 0,
    currentT: 0,
    collectionTime: '',
  })

  const [powerMeter4Data, setPowerMeter4Data] = useState({
    effectiveEnergy: 0,
    reactiveEnergy: 0,
    voltageS: 0,
    currentS: 0,
    voltageR: 0,
    currentR: 0,
    activePower: 0,
    reactivePower: 0,
    voltageT: 0,
    currentT: 0,
    collectionTime: '',
  })

  // 공기질 센서 API 호출
  const fetchAirQualityData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/airquality/`)
      setAirQualityData({
        PM10: response.data.pm10,
        PM25: response.data.pm25,
        CO2: response.data.co2,
        temperature: response.data.temperature,
        humidity: response.data.humidity,
        collectionTime: response.data.collection_time,
      })
    } catch (error) {
      console.error(error)
    }
  }

  const fetchPowerMeter1Data = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/powermeter1/`)
      setPowerMeter1Data({
        effectiveEnergy: response.data.effectiveEnergy,
        reactiveEnergy: response.data.reactiveEnergy,
        voltageR: response.data.voltageR,
        voltageS: response.data.voltageS,
        voltageT: response.data.voltageT,
        currentR: response.data.currentR,
        currentS: response.data.currentS,
        currentT: response.data.currentT,
        activePower: response.data.activePower,
        reactivePower: response.data.reactivePower,
        collectionTime: response.data.collection_time,
      })
    } catch (error) {
      console.error(error)
    }
  }

  const fetchPowerMeter2Data = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/powermeter2/`)
      setPowerMeter2Data({
        effectiveEnergy: response.data.effectiveEnergy,
        reactiveEnergy: response.data.reactiveEnergy,
        voltageR: response.data.voltageR,
        voltageS: response.data.voltageS,
        voltageT: response.data.voltageT,
        currentR: response.data.currentR,
        currentS: response.data.currentS,
        currentT: response.data.currentT,
        activePower: response.data.activePower,
        reactivePower: response.data.reactivePower,
        collectionTime: response.data.collection_time,
      })
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  const fetchPowerMeter3Data = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/powermeter3/`)
      setPowerMeter3Data({
        effectiveEnergy: response.data.effectiveEnergy,
        reactiveEnergy: response.data.reactiveEnergy,
        voltageR: response.data.voltageR,
        voltageS: response.data.voltageS,
        voltageT: response.data.voltageT,
        currentR: response.data.currentR,
        currentS: response.data.currentS,
        currentT: response.data.currentT,
        activePower: response.data.activePower,
        reactivePower: response.data.reactivePower,
        collectionTime: response.data.collection_time,
      })
    } catch (error) {
      console.error(error)
    }
  }

  const fetchPowerMeter4Data = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/powermeter4/`)
      setPowerMeter4Data({
        effectiveEnergy: response.data.effectiveEnergy,
        reactiveEnergy: response.data.reactiveEnergy,
        voltageR: response.data.voltageR,
        voltageS: response.data.voltageS,
        voltageT: response.data.voltageT,
        currentR: response.data.currentR,
        currentS: response.data.currentS,
        currentT: response.data.currentT,
        activePower: response.data.activePower,
        reactivePower: response.data.reactivePower,
        collectionTime: response.data.collection_time,
      })
    } catch (error) {
      console.error(error)
    }
  }

  const getEmojiForPM = (pmValue) => {
    if (pmValue > 150) {
      return '😷' // 매우 나쁨 (마스크 이모티콘)
    } else if (pmValue > 100) {
      return '😐' // 나쁨 (중립 이모티콘)
    } else if (pmValue > 50) {
      return '🙂' // 보통 (보통 이모티콘)
    } else {
      return '😃' // 좋음 (웃는 이모티콘)
    }
  }

  // 온도에 따른 이모티콘
  const getEmojiForTemperature = (temp) => {
    if (temp > 30) {
      return '🥵' // 너무 더움
    } else if (temp > 25) {
      return '😅' // 더움
    } else if (temp > 15) {
      return '😊' // 적당함
    } else if (temp > 5) {
      return '🥶' // 추움
    } else {
      return '❄️' // 매우 추움
    }
  }

  // 습도에 따른 이모티콘
  const getEmojiForHumidity = (humidity) => {
    if (humidity > 70) {
      return '💦' // 습함
    } else if (humidity > 40) {
      return '😊' // 적당함
    } else {
      return '🌵' // 건조함
    }
  }

  const smokeQualityData = {
    smokeDetect: 'OFF',
    temperature: 25.4,
    humidity: 54.2,
  }

  const multiMetaData = {
    VLN1: 230.5, // 단위: µg/m³
    VLN2: 231.2, // 단위: µg/m³
    VLN3: 229.8, // 단위: µg/m³
    ULL12: 398.5, // 단위: V
    ULL23: 399.1, // 단위: V
    ULL31: 397.8, // 단위: V
    Frequency: 50.0, // 단위: Hz
    I1: 15.3, // 단위: A
    I2: 14.8, // 단위: A
    I3: 15.1, // 단위: A
    VTHD: 3.5, // 단위: %
    ITHD: 4.1, // 단위: %
    PF: 0.98, // 단위: 없음 (Power Factor)
    P: 4000.5, // 단위: W
    Q: 1200.3, // 단위: var
    S: 4500.7, // 단위: VA
    EPPlus: 15000.0, // 단위: Wh
    EPMinus: 5000.0, // 단위: Wh
  }

  const calculateTimeDifference = (time) => {
    const collectionTime = new Date(time) // time을 Date 객체로 변환
    const currentTime = new Date() // 현재 시간을 Date 객체로 얻음
    const kstCurrentTime = new Date(currentTime.getTime() + 9 * 60 * 60 * 1000) // 한국 시간으로 변환
    const diffInMilliseconds = kstCurrentTime - collectionTime // 두 시간의 차이 계산
    const diffInMinutes = Math.floor(diffInMilliseconds / 1000 / 60) // 밀리초를 분으로 변환
    const diffInHours = Math.floor(diffInMinutes / 60) // 분을 시간으로 변환
    const diffInDays = Math.floor(diffInHours / 24) // 시간을 일로 변환
    if (diffInMinutes < 60) {
      return `${diffInMinutes}분 전`
    } else if (diffInHours < 24) {
      return `${diffInHours}시간 전`
    } else {
      return `${diffInDays}일 전`
    }
  }

  useEffect(() => {
    fetchAirQualityData() // 처음 페이지 로드 시 한 번 호출
    fetchAirQualityData() // 1분(60000ms)마다 데이터를 갱신
    fetchPowerMeter1Data()
    fetchPowerMeter2Data()
    fetchPowerMeter3Data()
    fetchPowerMeter4Data()
    const intervalId = setInterval(() => {
      fetchAirQualityData() // 1분(60000ms)마다 데이터를 갱신
      fetchPowerMeter1Data()
      fetchPowerMeter2Data()
      fetchPowerMeter3Data()
      fetchPowerMeter4Data()
    }, 60000) // 60000ms는 1분을 의미

    return () => clearInterval(intervalId)
  }, [])

  const powerMeterClick = () => {
    navigate('/dashboard/power-meter')
  }

  const airQualitySensorClick = () => {
    navigate('/dashboard/air-quality-sensor')
  }

  const heatSmokeSensorClick = () => {
    navigate('/dashboard/heat-smoke-sensor')
  }

  const digitalMultiMeterClick = () => {
    navigate('/dashboard/digital-multi-meter')
  }

  return (
    <CRow>
      <CCol md={3}>
        <CWidgetStatsF
          className="mb-3"
          color="primary"
          icon={<span style={{ fontSize: '2rem' }}>{getEmojiForPM(airQualityData.PM10)}</span>}
          title="PM10(미세먼지)"
          value={`${airQualityData.PM10} µg/m³`}
        />
      </CCol>
      <CCol md={3}>
        <CWidgetStatsF
          className="mb-3"
          color="info"
          icon={<span style={{ fontSize: '2rem' }}>{getEmojiForPM(airQualityData.PM25)}</span>}
          title="PM2.5(초미세먼지)"
          value={`${airQualityData.PM25} µg/m³`}
        />
      </CCol>
      <CCol md={3}>
        <CWidgetStatsF
          className="mb-3"
          color="warning"
          icon={
            <span style={{ fontSize: '2rem' }}>
              {getEmojiForTemperature(airQualityData.temperature)}
            </span>
          }
          title="실내온도"
          value={`${airQualityData.temperature} °C`}
        />
      </CCol>
      <CCol md={3}>
        <CWidgetStatsF
          className="mb-3"
          color="danger"
          icon={
            <span style={{ fontSize: '2rem' }}>{getEmojiForHumidity(airQualityData.humidity)}</span>
          }
          title="실내습도"
          value={`${airQualityData.humidity} %`}
        />
      </CCol>
      <CCol md={6}>
        <CCard className="mb-4" onClick={airQualitySensorClick} style={{ cursor: 'pointer' }}>
          <CCardBody className="p-4">
            <CCardTitle className="fs-4 fw-semibold">실내 공기질 복합센서</CCardTitle>
            <CCardSubtitle className="fw-normal text-body-secondary border-bottom mb-3 pb-4">
              약 {calculateTimeDifference(airQualityData.collectionTime)}
            </CCardSubtitle>
            <CRow>
              <CCol xs={12} md={6} xl={4}>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">PM10</div>
                  <div className="fs-5 fw-semibold">{airQualityData.PM10} µg/m³</div>
                  <CProgress
                    value={(airQualityData.PM10 / 600) * 100}
                    color={
                      airQualityData.PM10 > 150
                        ? 'danger'
                        : airQualityData.PM10 > 100
                          ? 'warning'
                          : 'success'
                    }
                  />
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">PM2.5</div>
                  <div className="fs-5 fw-semibold">{airQualityData.PM25} µg/m³</div>
                  <CProgress
                    value={(airQualityData.PM25 / 500) * 100}
                    color={
                      airQualityData.PM25 > 75
                        ? 'danger'
                        : airQualityData.PM25 > 50
                          ? 'warning'
                          : 'success'
                    }
                  />
                </div>
              </CCol>
              <CCol xs={12} md={6} xl={4}>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">CO2</div>
                  <div className="fs-5 fw-semibold">{airQualityData.CO2} ppm</div>
                  <CProgress
                    value={(airQualityData.CO2 / 2000) * 100}
                    color={
                      airQualityData.CO2 > 1000
                        ? 'danger'
                        : airQualityData.CO2 > 800
                          ? 'warning'
                          : 'success'
                    }
                  />
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">온도</div>
                  <div className="fs-5 fw-semibold">{airQualityData.temperature} °C</div>
                  <CProgress
                    value={((airQualityData.temperature + 40) / 165) * 100}
                    color={
                      airQualityData.temperature > 35
                        ? 'danger'
                        : airQualityData.temperature > 30
                          ? 'warning'
                          : 'success'
                    }
                  />
                </div>
              </CCol>
              <CCol xs={12} md={6} xl={4}>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">습도</div>
                  <div className="fs-5 fw-semibold">{airQualityData.humidity} %</div>
                  <CProgress
                    value={(airQualityData.humidity / 100) * 100}
                    color={
                      airQualityData.humidity > 70
                        ? 'danger'
                        : airQualityData.humidity > 60
                          ? 'warning'
                          : 'success'
                    }
                  />
                </div>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol md={6}>
        <CCard className="mb-4" onClick={heatSmokeSensorClick} style={{ cursor: 'pointer' }}>
          <CCardBody className="p-4">
            <CCardTitle className="fs-4 fw-semibold">열연기 감지기</CCardTitle>
            <CCardSubtitle className="fw-normal text-body-secondary border-bottom mb-3 pb-4">
              NEOS-HSD200
            </CCardSubtitle>
            <CRow>
              <CCol xs={12} md={6} xl={4}>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">연기감지 챔버</div>
                  <div className="fs-5 fw-semibold">{smokeQualityData.smokeDetect}</div>
                  <CProgress
                    value={100}
                    color={smokeQualityData.smokeDetect === 'ON' ? 'danger' : 'success'}
                  />
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">온도</div>
                  <div className="fs-5 fw-semibold">{smokeQualityData.temperature} °C</div>
                  <CProgress
                    value={((smokeQualityData.temperature + 40) / 165) * 100}
                    color={
                      airQualityData.temperature > 35
                        ? 'danger'
                        : airQualityData.temperature > 30
                          ? 'warning'
                          : 'success'
                    }
                  />
                </div>
              </CCol>
              <CCol xs={12} md={6} xl={4}>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">습도</div>
                  <div className="fs-5 fw-semibold">{smokeQualityData.humidity} %</div>
                  <CProgress
                    value={(smokeQualityData.humidity / 100) * 100}
                    color={
                      airQualityData.humidity > 70
                        ? 'danger'
                        : airQualityData.humidity > 60
                          ? 'warning'
                          : 'success'
                    }
                  />
                </div>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol md={12}>
        <CCard className="mb-4" onClick={powerMeterClick} style={{ cursor: 'pointer' }}>
          <CCardBody className="p-4">
            <CCardTitle className="fs-4 fw-semibold">전력량계 1</CCardTitle>
            <CCardSubtitle className="fw-normal text-body-secondary border-bottom mb-3 pb-4">
              약 {calculateTimeDifference(powerMeter1Data.collectionTime)}
            </CCardSubtitle>
            <CRow>
              <CCol xs={6} md={4} xl={2}>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">유효전력량</div>
                  <div className="fs-5 fw-semibold">{powerMeter1Data.effectiveEnergy} Wh</div>
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">무효전력량</div>
                  <div className="fs-5 fw-semibold">{powerMeter1Data.reactiveEnergy} varh</div>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={2}>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">전압 S상</div>
                  <div className="fs-5 fw-semibold">{powerMeter1Data.voltageS} V</div>
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">전류 S상</div>
                  <div className="fs-5 fw-semibold">{powerMeter1Data.currentS} A</div>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={2}>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">전압 R상</div>
                  <div className="fs-5 fw-semibold">{powerMeter1Data.voltageR} V</div>
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">전류 R상</div>
                  <div className="fs-5 fw-semibold">{powerMeter1Data.currentR} A</div>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={2}>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">유효전력</div>
                  <div className="fs-5 fw-semibold">{powerMeter1Data.activePower} W</div>
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">무효전력</div>
                  <div className="fs-5 fw-semibold">{powerMeter1Data.reactivePower} var</div>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={2}>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">전압 T상(단상)</div>
                  <div className="fs-5 fw-semibold">{powerMeter1Data.voltageT} V</div>
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">전류 T상(단상)</div>
                  <div className="fs-5 fw-semibold">{powerMeter1Data.currentT} A</div>
                </div>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol md={12}>
        <CCard className="mb-4" onClick={powerMeterClick} style={{ cursor: 'pointer' }}>
          <CCardBody className="p-4">
            <CCardTitle className="fs-4 fw-semibold">전력량계 2</CCardTitle>
            <CCardSubtitle className="fw-normal text-body-secondary border-bottom mb-3 pb-4">
              약 {calculateTimeDifference(powerMeter2Data.collectionTime)}
            </CCardSubtitle>
            <CRow>
              <CCol xs={6} md={4} xl={2}>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">유효전력량</div>
                  <div className="fs-5 fw-semibold">{powerMeter2Data.effectiveEnergy} Wh</div>
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">무효전력량</div>
                  <div className="fs-5 fw-semibold">{powerMeter2Data.reactiveEnergy} varh</div>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={2}>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">전압 S상</div>
                  <div className="fs-5 fw-semibold">{powerMeter2Data.voltageS} V</div>
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">전류 S상</div>
                  <div className="fs-5 fw-semibold">{powerMeter2Data.currentS} A</div>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={2}>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">전압 R상</div>
                  <div className="fs-5 fw-semibold">{powerMeter2Data.voltageR} V</div>
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">전류 R상</div>
                  <div className="fs-5 fw-semibold">{powerMeter2Data.currentR} A</div>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={2}>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">유효전력</div>
                  <div className="fs-5 fw-semibold">{powerMeter2Data.activePower} W</div>
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">무효전력</div>
                  <div className="fs-5 fw-semibold">{powerMeter2Data.reactivePower} var</div>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={2}>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">전압 T상(단상)</div>
                  <div className="fs-5 fw-semibold">{powerMeter2Data.voltageT} V</div>
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">전류 T상(단상)</div>
                  <div className="fs-5 fw-semibold">{powerMeter2Data.currentT} A</div>
                </div>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol md={12}>
        <CCard className="mb-4" onClick={powerMeterClick} style={{ cursor: 'pointer' }}>
          <CCardBody className="p-4">
            <CCardTitle className="fs-4 fw-semibold">전력량계 3</CCardTitle>
            <CCardSubtitle className="fw-normal text-body-secondary border-bottom mb-3 pb-4">
              약 {calculateTimeDifference(powerMeter3Data.collectionTime)}
            </CCardSubtitle>
            <CRow>
              <CCol xs={6} md={4} xl={2}>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">유효전력량</div>
                  <div className="fs-5 fw-semibold">{powerMeter3Data.effectiveEnergy} Wh</div>
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">무효전력량</div>
                  <div className="fs-5 fw-semibold">{powerMeter3Data.reactiveEnergy} varh</div>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={2}>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">전압 S상</div>
                  <div className="fs-5 fw-semibold">{powerMeter3Data.voltageS} V</div>
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">전류 S상</div>
                  <div className="fs-5 fw-semibold">{powerMeter3Data.currentS} A</div>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={2}>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">전압 R상</div>
                  <div className="fs-5 fw-semibold">{powerMeter3Data.voltageR} V</div>
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">전류 R상</div>
                  <div className="fs-5 fw-semibold">{powerMeter3Data.currentR} A</div>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={2}>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">유효전력</div>
                  <div className="fs-5 fw-semibold">{powerMeter3Data.activePower} W</div>
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">무효전력</div>
                  <div className="fs-5 fw-semibold">{powerMeter3Data.reactivePower} var</div>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={2}>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">전압 T상(단상)</div>
                  <div className="fs-5 fw-semibold">{powerMeter3Data.voltageT} V</div>
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">전류 T상(단상)</div>
                  <div className="fs-5 fw-semibold">{powerMeter3Data.currentT} A</div>
                </div>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol md={12}>
        <CCard className="mb-4" onClick={powerMeterClick} style={{ cursor: 'pointer' }}>
          <CCardBody className="p-4">
            <CCardTitle className="fs-4 fw-semibold">전력량계 4</CCardTitle>
            <CCardSubtitle className="fw-normal text-body-secondary border-bottom mb-3 pb-4">
              약 {calculateTimeDifference(powerMeter4Data.collectionTime)}
            </CCardSubtitle>
            <CRow>
              <CCol xs={6} md={4} xl={2}>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">유효전력량</div>
                  <div className="fs-5 fw-semibold">{powerMeter4Data.effectiveEnergy} Wh</div>
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">무효전력량</div>
                  <div className="fs-5 fw-semibold">{powerMeter4Data.reactiveEnergy} varh</div>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={2}>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">전압 S상</div>
                  <div className="fs-5 fw-semibold">{powerMeter4Data.voltageS} V</div>
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">전류 S상</div>
                  <div className="fs-5 fw-semibold">{powerMeter4Data.currentS} A</div>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={2}>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">전압 R상</div>
                  <div className="fs-5 fw-semibold">{powerMeter4Data.voltageR} V</div>
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">전류 R상</div>
                  <div className="fs-5 fw-semibold">{powerMeter4Data.currentR} A</div>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={2}>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">유효전력</div>
                  <div className="fs-5 fw-semibold">{powerMeter4Data.activePower} W</div>
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">무효전력</div>
                  <div className="fs-5 fw-semibold">{powerMeter4Data.reactivePower} var</div>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={2}>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">전압 T상(단상)</div>
                  <div className="fs-5 fw-semibold">{powerMeter4Data.voltageT} V</div>
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">전류 T상(단상)</div>
                  <div className="fs-5 fw-semibold">{powerMeter4Data.currentT} A</div>
                </div>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol md={12}>
        <CCard className="mb-4" onClick={digitalMultiMeterClick} style={{ cursor: 'pointer' }}>
          <CCardBody className="p-4">
            <CCardTitle className="fs-4 fw-semibold">디지털 멀티메타</CCardTitle>
            <CCardSubtitle className="fw-normal text-body-secondary border-bottom mb-3 pb-4">
              VIDER-M3
            </CCardSubtitle>
            <CRow>
              <CCol xs={6} md={4} xl={2}>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">
                    V<sub>LN1</sub>
                  </div>
                  <div className="fs-5 fw-semibold">{multiMetaData.VLN1} V</div>
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">
                    V<sub>LN2</sub>
                  </div>
                  <div className="fs-5 fw-semibold">{multiMetaData.VLN2} V</div>
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">
                    V<sub>LN3</sub>
                  </div>
                  <div className="fs-5 fw-semibold">{multiMetaData.VLN3} V</div>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={2}>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">
                    U<sub>LL12</sub>
                  </div>
                  <div className="fs-5 fw-semibold">{multiMetaData.ULL12} V</div>
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">
                    U<sub>LL23</sub>
                  </div>
                  <div className="fs-5 fw-semibold">{multiMetaData.ULL23} V</div>
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">
                    U<sub>LL31</sub>
                  </div>
                  <div className="fs-5 fw-semibold">{multiMetaData.ULL31} V</div>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={2}>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">Frequency</div>
                  <div className="fs-5 fw-semibold">{multiMetaData.Frequency} Hz</div>
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">VTHD</div>
                  <div className="fs-5 fw-semibold">{multiMetaData.VTHD} %</div>
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">ITHD</div>
                  <div className="fs-5 fw-semibold">{multiMetaData.ITHD} %</div>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={2}>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">
                    I<sub>1</sub>
                  </div>
                  <div className="fs-5 fw-semibold">{multiMetaData.I1} A</div>
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">
                    I<sub>2</sub>
                  </div>
                  <div className="fs-5 fw-semibold">{multiMetaData.I2} A</div>
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">
                    I<sub>3</sub>
                  </div>
                  <div className="fs-5 fw-semibold">{multiMetaData.I3} A</div>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={2}>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">&Sigma;P</div>
                  <div className="fs-5 fw-semibold">{multiMetaData.P} W</div>
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">&Sigma;Q</div>
                  <div className="fs-5 fw-semibold">{multiMetaData.Q} var</div>
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">&Sigma;S</div>
                  <div className="fs-5 fw-semibold">{multiMetaData.S} VA</div>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={2}>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">3PF</div>
                  <div className="fs-5 fw-semibold">{multiMetaData.PF} W</div>
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">&Sigma;EP+</div>
                  <div className="fs-5 fw-semibold">{multiMetaData.EPPlus} Wh</div>
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">&Sigma;EP-</div>
                  <div className="fs-5 fw-semibold">{multiMetaData.EPMinus} Wh</div>
                </div>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Dashboard
