import React, { useEffect, useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardSubtitle,
  CCardTitle,
  CCol,
  CProgress,
  CRow,
} from '@coreui/react-pro'
import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from '@mui/x-charts/Gauge'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function GaugePointer() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState()

  if (valueAngle === null) {
    // No value to display
    return null
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  }
  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill="red" />
      <path d={`M ${cx} ${cy} L ${target.x} ${target.y}`} stroke="red" strokeWidth={3} />
    </g>
  )
}

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

  const maxGaugeVoltage = 400
  const normalizedVoltage = (multiMetaData.VLN1 / maxGaugeVoltage) * 100

  const maxActivePower = 5000
  const normalizedActivePower = (multiMetaData.P / maxActivePower) * 100

  return (
    <CRow>
      <CCol md={12}>
        <CCard className="mb-4" onClick={digitalMultiMeterClick} style={{ cursor: 'pointer' }}>
          <CCardBody className="p-4">
            <CCardTitle className="fs-4 fw-semibold">종합전력량</CCardTitle>
            <CCardSubtitle className="fw-normal text-body-secondary border-bottom mb-3 pb-4">
              VIDER-M3
            </CCardSubtitle>
            <CRow>
              {/* Voltage (as Gauge) */}
              <CCol xs={6} md={6} xl={6} className="d-flex justify-content-center">
                <div className="mb-4 text-center" style={{ width: '200px' }}>
                  <div className="text-body-secondary text-truncate small">전압</div>
                  <GaugeContainer
                    width={250}
                    height={250}
                    startAngle={-110}
                    endAngle={110}
                    value={normalizedVoltage}
                    minValue={0}
                    maxValue={100}
                  >
                    <GaugeReferenceArc />
                    <GaugeValueArc
                      color={
                        multiMetaData.VLN1 < 150
                          ? '#00FF00'
                          : multiMetaData.VLN1 < 300
                            ? '#FFFF00'
                            : '#FF0000'
                      }
                    />
                    <GaugePointer />
                  </GaugeContainer>
                  <div className="fs-3 fw-semibold">{multiMetaData.VLN1} V</div>
                </div>
              </CCol>

              {/* Active Power ΣP (as Gauge) */}
              <CCol xs={6} md={6} xl={6} className="d-flex justify-content-center">
                <div className="mb-4 text-center" style={{ width: '200px' }}>
                  <div className="text-body-secondary text-truncate small">유효전력</div>
                  <GaugeContainer
                    width={250}
                    height={250}
                    startAngle={-110}
                    endAngle={110}
                    value={normalizedActivePower}
                    minValue={0}
                    maxValue={5000} // Adjust your maxValue based on actual power range
                  >
                    <GaugeReferenceArc />
                    <GaugeValueArc
                      color={
                        multiMetaData.P < 2500
                          ? '#00FF00'
                          : multiMetaData.P < 4000
                            ? '#FFFF00'
                            : '#FF0000'
                      }
                    />
                    <GaugePointer />
                  </GaugeContainer>
                  <div className="fs-3 fw-semibold">{multiMetaData.P} W</div>
                </div>
              </CCol>
              <CCol xs={6} md={6} xl={6} className="d-flex justify-content-center">
                <div className="mb-4 text-center">
                  <div className="text-body-secondary text-truncate small">주파수</div>
                  <div className="fs-3 fw-semibold">{multiMetaData.Frequency} Hz</div>
                </div>
              </CCol>

              {/* Effective Energy ΣEP+ (as Text) */}
              <CCol xs={6} md={6} xl={6} className="d-flex justify-content-center">
                <div className="mb-4 text-center">
                  <div className="text-body-secondary text-truncate small">유효전력량</div>
                  <div className="fs-3 fw-semibold">{multiMetaData.EPPlus} Wh</div>
                </div>
              </CCol>
              {/* Frequency (as Text) */}
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol md={6}>
        <CCard className="mb-4" onClick={powerMeterClick} style={{ cursor: 'pointer' }}>
          <CCardBody className="p-4">
            <CCardTitle className="fs-4 fw-semibold">전력량계 1</CCardTitle>
            <CCardSubtitle className="fw-normal text-body-secondary border-bottom mb-3 pb-4">
              약 {calculateTimeDifference(powerMeter1Data.collectionTime)}
            </CCardSubtitle>
            <CRow>
              <CCol xs={6} md={6} xl={6} className="d-flex justify-content-center">
                <div className="mb-4 text-center" style={{ width: '200px' }}>
                  <div className="text-body-secondary text-truncate small">전압 단상</div>
                  <GaugeContainer
                    width={200}
                    height={200}
                    startAngle={-110}
                    endAngle={110}
                    value={normalizedVoltage}
                    minValue={0}
                    maxValue={100}
                  >
                    <GaugeReferenceArc />
                    <GaugeValueArc
                      color={
                        multiMetaData.VLN1 < 150
                          ? '#00FF00'
                          : multiMetaData.VLN1 < 300
                            ? '#FFFF00'
                            : '#FF0000'
                      }
                    />
                    <GaugePointer />
                  </GaugeContainer>
                  <div className="fs-3 fw-semibold">{multiMetaData.VLN1} V</div>
                </div>
              </CCol>

              {/* Active Power ΣP (as Gauge) */}
              <CCol xs={6} md={6} xl={6} className="d-flex justify-content-center">
                <div className="mb-4 text-center" style={{ width: '200px' }}>
                  <div className="text-body-secondary text-truncate small">유효전력</div>
                  <GaugeContainer
                    width={200}
                    height={200}
                    startAngle={-110}
                    endAngle={110}
                    value={normalizedActivePower}
                    minValue={0}
                    maxValue={5000} // Adjust your maxValue based on actual power range
                  >
                    <GaugeReferenceArc />
                    <GaugeValueArc
                      color={
                        multiMetaData.P < 2500
                          ? '#00FF00'
                          : multiMetaData.P < 4000
                            ? '#FFFF00'
                            : '#FF0000'
                      }
                    />
                    <GaugePointer />
                  </GaugeContainer>
                  <div className="fs-3 fw-semibold">{multiMetaData.P} W</div>
                </div>
              </CCol>
              <CCol xs={6} md={6} xl={6} className="d-flex justify-content-center">
                <div className="mb-4 text-center">
                  <div className="text-body-secondary text-truncate small">전류 단상</div>
                  <div className="fs-3 fw-semibold">112 A</div>
                </div>
              </CCol>

              {/* Effective Energy ΣEP+ (as Text) */}
              <CCol xs={6} md={6} xl={6} className="d-flex justify-content-center">
                <div className="mb-4 text-center">
                  <div className="text-body-secondary text-truncate small">유효전력량</div>
                  <div className="fs-3 fw-semibold">{multiMetaData.EPPlus} Wh</div>
                </div>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol md={6}>
        <CCard className="mb-4" onClick={powerMeterClick} style={{ cursor: 'pointer' }}>
          <CCardBody className="p-4">
            <CCardTitle className="fs-4 fw-semibold">전력량계 2</CCardTitle>
            <CCardSubtitle className="fw-normal text-body-secondary border-bottom mb-3 pb-4">
              약 {calculateTimeDifference(powerMeter2Data.collectionTime)}
            </CCardSubtitle>
            <CRow>
              <CCol xs={6} md={6} xl={6} className="d-flex justify-content-center">
                <div className="mb-4 text-center" style={{ width: '200px' }}>
                  <div className="text-body-secondary text-truncate small">전압 단상</div>
                  <GaugeContainer
                    width={200}
                    height={200}
                    startAngle={-110}
                    endAngle={110}
                    value={normalizedVoltage}
                    minValue={0}
                    maxValue={100}
                  >
                    <GaugeReferenceArc />
                    <GaugeValueArc
                      color={
                        multiMetaData.VLN1 < 150
                          ? '#00FF00'
                          : multiMetaData.VLN1 < 300
                            ? '#FFFF00'
                            : '#FF0000'
                      }
                    />
                    <GaugePointer />
                  </GaugeContainer>
                  <div className="fs-3 fw-semibold">{multiMetaData.VLN1} V</div>
                </div>
              </CCol>

              {/* Active Power ΣP (as Gauge) */}
              <CCol xs={6} md={6} xl={6} className="d-flex justify-content-center">
                <div className="mb-4 text-center" style={{ width: '200px' }}>
                  <div className="text-body-secondary text-truncate small">유효전력</div>
                  <GaugeContainer
                    width={200}
                    height={200}
                    startAngle={-110}
                    endAngle={110}
                    value={normalizedActivePower}
                    minValue={0}
                    maxValue={5000} // Adjust your maxValue based on actual power range
                  >
                    <GaugeReferenceArc />
                    <GaugeValueArc
                      color={
                        multiMetaData.P < 2500
                          ? '#00FF00'
                          : multiMetaData.P < 4000
                            ? '#FFFF00'
                            : '#FF0000'
                      }
                    />
                    <GaugePointer />
                  </GaugeContainer>
                  <div className="fs-3 fw-semibold">{multiMetaData.P} W</div>
                </div>
              </CCol>
              <CCol xs={6} md={6} xl={6} className="d-flex justify-content-center">
                <div className="mb-4 text-center">
                  <div className="text-body-secondary text-truncate small">전류 단상</div>
                  <div className="fs-3 fw-semibold">112 A</div>
                </div>
              </CCol>

              {/* Effective Energy ΣEP+ (as Text) */}
              <CCol xs={6} md={6} xl={6} className="d-flex justify-content-center">
                <div className="mb-4 text-center">
                  <div className="text-body-secondary text-truncate small">유효전력량</div>
                  <div className="fs-3 fw-semibold">{multiMetaData.EPPlus} Wh</div>
                </div>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol md={6}>
        <CCard className="mb-4" onClick={powerMeterClick} style={{ cursor: 'pointer' }}>
          <CCardBody className="p-4">
            <CCardTitle className="fs-4 fw-semibold">전력량계 3</CCardTitle>
            <CCardSubtitle className="fw-normal text-body-secondary border-bottom mb-3 pb-4">
              약 {calculateTimeDifference(powerMeter3Data.collectionTime)}
            </CCardSubtitle>
            <CRow>
              <CCol xs={6} md={6} xl={6} className="d-flex justify-content-center">
                <div className="mb-4 text-center" style={{ width: '200px' }}>
                  <div className="text-body-secondary text-truncate small">전압 단상</div>
                  <GaugeContainer
                    width={200}
                    height={200}
                    startAngle={-110}
                    endAngle={110}
                    value={normalizedVoltage}
                    minValue={0}
                    maxValue={100}
                  >
                    <GaugeReferenceArc />
                    <GaugeValueArc
                      color={
                        multiMetaData.VLN1 < 150
                          ? '#00FF00'
                          : multiMetaData.VLN1 < 300
                            ? '#FFFF00'
                            : '#FF0000'
                      }
                    />
                    <GaugePointer />
                  </GaugeContainer>
                  <div className="fs-3 fw-semibold">{multiMetaData.VLN1} V</div>
                </div>
              </CCol>

              {/* Active Power ΣP (as Gauge) */}
              <CCol xs={6} md={6} xl={6} className="d-flex justify-content-center">
                <div className="mb-4 text-center" style={{ width: '200px' }}>
                  <div className="text-body-secondary text-truncate small">유효전력</div>
                  <GaugeContainer
                    width={200}
                    height={200}
                    startAngle={-110}
                    endAngle={110}
                    value={normalizedActivePower}
                    minValue={0}
                    maxValue={5000} // Adjust your maxValue based on actual power range
                  >
                    <GaugeReferenceArc />
                    <GaugeValueArc
                      color={
                        multiMetaData.P < 2500
                          ? '#00FF00'
                          : multiMetaData.P < 4000
                            ? '#FFFF00'
                            : '#FF0000'
                      }
                    />
                    <GaugePointer />
                  </GaugeContainer>
                  <div className="fs-3 fw-semibold">{multiMetaData.P} W</div>
                </div>
              </CCol>
              <CCol xs={6} md={6} xl={6} className="d-flex justify-content-center">
                <div className="mb-4 text-center">
                  <div className="text-body-secondary text-truncate small">전류 단상</div>
                  <div className="fs-3 fw-semibold">112 A</div>
                </div>
              </CCol>

              {/* Effective Energy ΣEP+ (as Text) */}
              <CCol xs={6} md={6} xl={6} className="d-flex justify-content-center">
                <div className="mb-4 text-center">
                  <div className="text-body-secondary text-truncate small">유효전력량</div>
                  <div className="fs-3 fw-semibold">{multiMetaData.EPPlus} Wh</div>
                </div>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol md={6}>
        <CCard className="mb-4" onClick={powerMeterClick} style={{ cursor: 'pointer' }}>
          <CCardBody className="p-4">
            <CCardTitle className="fs-4 fw-semibold">전력량계 4</CCardTitle>
            <CCardSubtitle className="fw-normal text-body-secondary border-bottom mb-3 pb-4">
              약 {calculateTimeDifference(powerMeter4Data.collectionTime)}
            </CCardSubtitle>
            <CRow>
              <CCol xs={6} md={6} xl={6} className="d-flex justify-content-center">
                <div className="mb-4 text-center" style={{ width: '200px' }}>
                  <div className="text-body-secondary text-truncate small">전압 단상</div>
                  <GaugeContainer
                    width={200}
                    height={200}
                    startAngle={-110}
                    endAngle={110}
                    value={normalizedVoltage}
                    minValue={0}
                    maxValue={100}
                  >
                    <GaugeReferenceArc />
                    <GaugeValueArc
                      color={
                        multiMetaData.VLN1 < 150
                          ? '#00FF00'
                          : multiMetaData.VLN1 < 300
                            ? '#FFFF00'
                            : '#FF0000'
                      }
                    />
                    <GaugePointer />
                  </GaugeContainer>
                  <div className="fs-3 fw-semibold">{multiMetaData.VLN1} V</div>
                </div>
              </CCol>

              {/* Active Power ΣP (as Gauge) */}
              <CCol xs={6} md={6} xl={6} className="d-flex justify-content-center">
                <div className="mb-4 text-center" style={{ width: '200px' }}>
                  <div className="text-body-secondary text-truncate small">유효전력</div>
                  <GaugeContainer
                    width={200}
                    height={200}
                    startAngle={-110}
                    endAngle={110}
                    value={normalizedActivePower}
                    minValue={0}
                    maxValue={5000} // Adjust your maxValue based on actual power range
                  >
                    <GaugeReferenceArc />
                    <GaugeValueArc
                      color={
                        multiMetaData.P < 2500
                          ? '#00FF00'
                          : multiMetaData.P < 4000
                            ? '#FFFF00'
                            : '#FF0000'
                      }
                    />
                    <GaugePointer />
                  </GaugeContainer>
                  <div className="fs-3 fw-semibold">{multiMetaData.P} W</div>
                </div>
              </CCol>
              <CCol xs={6} md={6} xl={6} className="d-flex justify-content-center">
                <div className="mb-4 text-center">
                  <div className="text-body-secondary text-truncate small">전류 단상</div>
                  <div className="fs-3 fw-semibold">112 A</div>
                </div>
              </CCol>

              {/* Effective Energy ΣEP+ (as Text) */}
              <CCol xs={6} md={6} xl={6} className="d-flex justify-content-center">
                <div className="mb-4 text-center">
                  <div className="text-body-secondary text-truncate small">유효전력량</div>
                  <div className="fs-3 fw-semibold">{multiMetaData.EPPlus} Wh</div>
                </div>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
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
    </CRow>
  )
}

export default Dashboard
