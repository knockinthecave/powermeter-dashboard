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
      <path d={`M ${cx} ${cy} L ${target.x} ${target.y}`} stroke="red" strokeWidth={7} />
    </g>
  )
}

const Dashboard = () => {
  const navigate = useNavigate()

  // 예시 데이터
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

  const [smokeQualityData, setSmokeQualityData] = useState({
    temperature: 0,
    humidity: 0,
    runningCheck: '',
    smokeCheck: '',
    temperatureWarining: '',
    temperatureAlarm: '',
    collectionTime: '',
  })

  const [multiMetaData, setMultiMetaData] = useState({
    voltage: 0,
    current: 0,
    effectiveEnergy: 0,
    reactiveEnergy: 0,
    apparentPower: 0,
    powerFactor: 0,
    frequency: 0,
    harmonics: 0,
    temperature: 0,
    activePower: 0,
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

  const fetchSmokeQualityData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/heat-smoke/`)
      setSmokeQualityData({
        temperature: response.data.temperature,
        humidity: response.data.humidity,
        runningCheck: response.data.running_check,
        smokeCheck: response.data.smoke_check,
        temperatureWarining: response.data.temperature_warning,
        temperatureAlarm: response.data.temperature_alarm,
        collectionTime: response.data.collection_time,
      })
    } catch (error) {
      console.error(error)
    }
  }

  const fetchMultiMetaData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/multimeter/`)
      setMultiMetaData({
        voltage: response.data.voltage,
        current: response.data.current,
        effectiveEnergy: response.data.effectiveenergy,
        reactiveEnergy: response.data.reactiveenergy,
        apparentPower: response.data.apparentpower,
        powerFactor: response.data.powerfactor,
        frequency: response.data.frequency,
        harmonics: response.data.harmonics,
        temperature: response.data.temperature,
        activePower: response.data.activepower,
        collectionTime: response.data.collection_time,
      })
    } catch (error) {
      console.error(error)
    }
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
    fetchSmokeQualityData()
    fetchMultiMetaData()
    const intervalId = setInterval(() => {
      fetchAirQualityData() // 1분(60000ms)마다 데이터를 갱신
      fetchPowerMeter1Data()
      fetchPowerMeter2Data()
      fetchPowerMeter3Data()
      fetchPowerMeter4Data()
      fetchSmokeQualityData()
      fetchMultiMetaData()
    }, 60000) // 60000ms는 1분을 의미

    return () => clearInterval(intervalId)
  }, [])

  const powerMeter1Click = () => {
    navigate('/dashboard/power-meter-1')
  }

  const powerMeter2Click = () => {
    navigate('/dashboard/power-meter-2')
  }

  const powerMeter3Click = () => {
    navigate('/dashboard/power-meter-3')
  }

  const powerMeter4Click = () => {
    navigate('/dashboard/power-meter-4')
  }

  // const airQualitySensorClick = () => {
  // navigate('/dashboard/air-quality-sensor')
  // }

  // const heatSmokeSensorClick = () => {
  // navigate('/dashboard/heat-smoke-sensor')
  //}

  const digitalMultiMeterClick = () => {
    navigate('/dashboard/digital-multi-meter')
  }

  const maxGaugeVoltage = 400
  const normalizedMultiMetaVoltage = (multiMetaData.voltage / maxGaugeVoltage) * 100
  const normalizedPowerMeter1Voltage = (powerMeter1Data.voltageR / maxGaugeVoltage) * 100
  const normalizedPowerMeter2Voltage = (powerMeter2Data.voltageR / maxGaugeVoltage) * 100
  const normalizedPowerMeter3Voltage = (powerMeter3Data.voltageR / maxGaugeVoltage) * 100
  const normalizedPowerMeter4Voltage = (powerMeter4Data.voltageR / maxGaugeVoltage) * 100

  const maxActivePower = 5000
  const normalizedMultiMetaActivePower = (multiMetaData.activePower / maxActivePower) * 100
  const normalizedPowerMeter1ActivePower = (powerMeter1Data.activePower / maxActivePower) * 100
  const normalizedPowerMeter2ActivePower = (powerMeter2Data.activePower / maxActivePower) * 100
  const normalizedPowerMeter3ActivePower = (powerMeter3Data.activePower / maxActivePower) * 100
  const normalizedPowerMeter4ActivePower = (powerMeter4Data.activePower / maxActivePower) * 100

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
              <CCol xs={12} md={6} xl={6} className="d-flex justify-content-center">
                <div className="mb-4 text-center">
                  <div className="fs-5 fw-semibold">전압</div>
                  <GaugeContainer
                    width={250}
                    height={250}
                    startAngle={-110}
                    endAngle={110}
                    value={normalizedMultiMetaVoltage}
                    minValue={0}
                    maxValue={100}
                  >
                    <GaugeReferenceArc />
                    <GaugeValueArc
                      color={
                        multiMetaData.voltage < 150
                          ? '#00FF00'
                          : multiMetaData.voltage < 300
                            ? '#FFFF00'
                            : '#FF0000'
                      }
                    />
                    <GaugePointer />
                  </GaugeContainer>
                  <div className="fs-3 fw-semibold">{multiMetaData.voltage} V</div>
                </div>
              </CCol>

              {/* Active Power ΣP (as Gauge) */}
              <CCol xs={12} md={6} xl={6} className="d-flex justify-content-center">
                <div className="mb-4 text-center">
                  <div className="fs-5 fw-semibold">유효전력</div>
                  <GaugeContainer
                    width={250}
                    height={250}
                    startAngle={-110}
                    endAngle={110}
                    value={normalizedMultiMetaActivePower}
                    minValue={0}
                    maxValue={100} // Adjust your maxValue based on actual power range
                  >
                    <GaugeReferenceArc />
                    <GaugeValueArc
                      color={
                        multiMetaData.P < (2500 / maxActivePower) * 100
                          ? 'red'
                          : multiMetaData.P < (4000 / maxActivePower) * 100
                            ? '#FFFF00'
                            : '#FF0000'
                      }
                    />
                    <GaugePointer />
                  </GaugeContainer>
                  <div className="fs-3 fw-semibold">{multiMetaData.activePower} W</div>
                </div>
              </CCol>
              <CCol xs={12} md={6} xl={6} className="d-flex justify-content-center">
                <div className="mb-4 text-center">
                  <div className="fs-5 fw-semibold">주파수</div>
                  <div className="fs-3 fw-semibold">{multiMetaData.frequency} Hz</div>
                </div>
              </CCol>

              {/* Effective Energy ΣEP+ (as Text) */}
              <CCol xs={12} md={6} xl={6} className="d-flex justify-content-center">
                <div className="mb-4 text-center">
                  <div className="fs-5 fw-semibold">유효전력량</div>
                  <div className="fs-3 fw-semibold">
                    {multiMetaData.effectiveEnergy / 1000} kWh+
                  </div>
                </div>
              </CCol>
              {/* Frequency (as Text) */}
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol md={6}>
        <CCard className="mb-4" onClick={powerMeter1Click} style={{ cursor: 'pointer' }}>
          <CCardBody className="p-4">
            <CCardTitle className="fs-4 fw-semibold">전력량계 1</CCardTitle>
            <CCardSubtitle className="fw-normal text-body-secondary border-bottom mb-3 pb-4">
              약 {calculateTimeDifference(powerMeter1Data.collectionTime)}
            </CCardSubtitle>
            <CRow>
              <CCol xs={12} md={6} xl={6} className="d-flex justify-content-center">
                <div className="mb-4 text-center">
                  <div className="fs-5 fw-semibold">전압 단상</div>
                  <GaugeContainer
                    width={200}
                    height={200}
                    startAngle={-110}
                    endAngle={110}
                    value={normalizedPowerMeter1Voltage}
                    minValue={0}
                    maxValue={100}
                  >
                    <GaugeReferenceArc />
                    <GaugeValueArc
                      color={
                        powerMeter1Data.voltageR < 150
                          ? '#00FF00'
                          : powerMeter1Data.voltageR < 300
                            ? '#FFFF00'
                            : '#FF0000'
                      }
                    />
                    <GaugePointer />
                  </GaugeContainer>
                  <div className="fs-3 fw-semibold">{powerMeter1Data.voltageR} V</div>
                </div>
              </CCol>

              {/* Active Power ΣP (as Gauge) */}
              <CCol xs={12} md={6} xl={6} className="d-flex justify-content-center">
                <div className="mb-4 text-center">
                  <div className="fs-5 fw-semibold">유효전력</div>
                  <GaugeContainer
                    width={200}
                    height={200}
                    startAngle={-110}
                    endAngle={110}
                    value={normalizedPowerMeter1ActivePower}
                    minValue={0}
                    maxValue={5000} // Adjust your maxValue based on actual power range
                  >
                    <GaugeReferenceArc />
                    <GaugeValueArc
                      color={
                        powerMeter1Data.activePower < 2500
                          ? '#00FF00'
                          : powerMeter1Data.activePower < 4000
                            ? '#FFFF00'
                            : '#FF0000'
                      }
                    />
                    <GaugePointer />
                  </GaugeContainer>
                  <div className="fs-3 fw-semibold">{powerMeter1Data.activePower} W</div>
                </div>
              </CCol>
              <CCol xs={12} md={6} xl={6} className="d-flex justify-content-center">
                <div className="mb-4 text-center">
                  <div className="fs-5 fw-semibold">전류 단상</div>
                  <div className="fs-3 fw-semibold">{powerMeter1Data.currentR} A</div>
                </div>
              </CCol>

              {/* Effective Energy ΣEP+ (as Text) */}
              <CCol xs={12} md={6} xl={6} className="d-flex justify-content-center">
                <div className="mb-4 text-center">
                  <div className="fs-5 fw-semibold">유효전력량</div>
                  <div className="fs-3 fw-semibold">{powerMeter1Data.effectiveEnergy} Wh</div>
                </div>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol md={6}>
        <CCard className="mb-4" onClick={powerMeter2Click} style={{ cursor: 'pointer' }}>
          <CCardBody className="p-4">
            <CCardTitle className="fs-4 fw-semibold">전력량계 2</CCardTitle>
            <CCardSubtitle className="fw-normal text-body-secondary border-bottom mb-3 pb-4">
              약 {calculateTimeDifference(powerMeter2Data.collectionTime)}
            </CCardSubtitle>
            <CRow>
              <CCol xs={12} md={6} xl={6} className="d-flex justify-content-center">
                <div className="mb-4 text-center">
                  <div className="fs-5 fw-semibold">전압 단상</div>
                  <GaugeContainer
                    width={200}
                    height={200}
                    startAngle={-110}
                    endAngle={110}
                    value={normalizedPowerMeter2Voltage}
                    minValue={0}
                    maxValue={100}
                  >
                    <GaugeReferenceArc />
                    <GaugeValueArc
                      color={
                        powerMeter2Data.voltageR < 150
                          ? '#00FF00'
                          : powerMeter2Data.voltageR < 300
                            ? '#FFFF00'
                            : '#FF0000'
                      }
                    />
                    <GaugePointer />
                  </GaugeContainer>
                  <div className="fs-3 fw-semibold">{powerMeter2Data.voltageR} V</div>
                </div>
              </CCol>

              {/* Active Power ΣP (as Gauge) */}
              <CCol xs={12} md={6} xl={6} className="d-flex justify-content-center">
                <div className="mb-4 text-center">
                  <div className="fs-5 fw-semibold">유효전력</div>
                  <GaugeContainer
                    width={200}
                    height={200}
                    startAngle={-110}
                    endAngle={110}
                    value={normalizedPowerMeter2ActivePower}
                    minValue={0}
                    maxValue={5000} // Adjust your maxValue based on actual power range
                  >
                    <GaugeReferenceArc />
                    <GaugeValueArc
                      color={
                        powerMeter2Data.activePower < 2500
                          ? '#00FF00'
                          : powerMeter2Data.activePower < 4000
                            ? '#FFFF00'
                            : '#FF0000'
                      }
                    />
                    <GaugePointer />
                  </GaugeContainer>
                  <div className="fs-3 fw-semibold">{powerMeter2Data.activePower} W</div>
                </div>
              </CCol>
              <CCol xs={12} md={6} xl={6} className="d-flex justify-content-center">
                <div className="mb-4 text-center">
                  <div className="fs-5 fw-semibold">전류 단상</div>
                  <div className="fs-3 fw-semibold">{powerMeter2Data.currentR} A</div>
                </div>
              </CCol>

              {/* Effective Energy ΣEP+ (as Text) */}
              <CCol xs={12} md={6} xl={6} className="d-flex justify-content-center">
                <div className="mb-4 text-center">
                  <div className="fs-5 fw-semibold">유효전력량</div>
                  <div className="fs-3 fw-semibold">{powerMeter2Data.effectiveEnergy} Wh</div>
                </div>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol md={6}>
        <CCard className="mb-4" onClick={powerMeter3Click} style={{ cursor: 'pointer' }}>
          <CCardBody className="p-4">
            <CCardTitle className="fs-4 fw-semibold">전력량계 3</CCardTitle>
            <CCardSubtitle className="fw-normal text-body-secondary border-bottom mb-3 pb-4">
              약 {calculateTimeDifference(powerMeter3Data.collectionTime)}
            </CCardSubtitle>
            <CRow>
              <CCol xs={12} md={6} xl={6} className="d-flex justify-content-center">
                <div className="mb-4 text-center">
                  <div className="fs-5 fw-semibold">전압 단상</div>
                  <GaugeContainer
                    width={200}
                    height={200}
                    startAngle={-110}
                    endAngle={110}
                    value={normalizedPowerMeter3Voltage}
                    minValue={0}
                    maxValue={100}
                  >
                    <GaugeReferenceArc />
                    <GaugeValueArc
                      color={
                        powerMeter3Data.voltageR < 150
                          ? '#00FF00'
                          : powerMeter3Data.voltageR < 300
                            ? '#FFFF00'
                            : '#FF0000'
                      }
                    />
                    <GaugePointer />
                  </GaugeContainer>
                  <div className="fs-3 fw-semibold">{powerMeter3Data.voltageR} V</div>
                </div>
              </CCol>

              {/* Active Power ΣP (as Gauge) */}
              <CCol xs={12} md={6} xl={6} className="d-flex justify-content-center">
                <div className="mb-4 text-center">
                  <div className="fs-5 fw-semibold">유효전력</div>
                  <GaugeContainer
                    width={200}
                    height={200}
                    startAngle={-110}
                    endAngle={110}
                    value={normalizedPowerMeter3ActivePower}
                    minValue={0}
                    maxValue={5000} // Adjust your maxValue based on actual power range
                  >
                    <GaugeReferenceArc />
                    <GaugeValueArc
                      color={
                        powerMeter3Data.activePower < 2500
                          ? '#00FF00'
                          : powerMeter3Data.activePower < 4000
                            ? '#FFFF00'
                            : '#FF0000'
                      }
                    />
                    <GaugePointer />
                  </GaugeContainer>
                  <div className="fs-3 fw-semibold">{powerMeter3Data.activePower} W</div>
                </div>
              </CCol>
              <CCol xs={12} md={6} xl={6} className="d-flex justify-content-center">
                <div className="mb-4 text-center">
                  <div className="fs-5 fw-semibold">전류 단상</div>
                  <div className="fs-3 fw-semibold">{powerMeter3Data.currentR} A</div>
                </div>
              </CCol>

              {/* Effective Energy ΣEP+ (as Text) */}
              <CCol xs={12} md={6} xl={6} className="d-flex justify-content-center">
                <div className="mb-4 text-center">
                  <div className="fs-5 fw-semibold">유효전력량</div>
                  <div className="fs-3 fw-semibold">{powerMeter3Data.effectiveEnergy} Wh</div>
                </div>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol md={6}>
        <CCard className="mb-4" onClick={powerMeter4Click} style={{ cursor: 'pointer' }}>
          <CCardBody className="p-4">
            <CCardTitle className="fs-4 fw-semibold">전력량계 4</CCardTitle>
            <CCardSubtitle className="fw-normal text-body-secondary border-bottom mb-3 pb-4">
              약 {calculateTimeDifference(powerMeter4Data.collectionTime)}
            </CCardSubtitle>
            <CRow>
              <CCol xs={12} md={6} xl={6} className="d-flex justify-content-center">
                <div className="mb-4 text-center">
                  <div className="fs-5 fw-semibold">전압 단상</div>
                  <GaugeContainer
                    width={200}
                    height={200}
                    startAngle={-110}
                    endAngle={110}
                    value={normalizedPowerMeter4Voltage}
                    minValue={0}
                    maxValue={100}
                  >
                    <GaugeReferenceArc />
                    <GaugeValueArc
                      color={
                        powerMeter4Data.voltageR < 150
                          ? '#00FF00'
                          : powerMeter4Data.voltageR < 300
                            ? '#FFFF00'
                            : '#FF0000'
                      }
                    />
                    <GaugePointer />
                  </GaugeContainer>
                  <div className="fs-3 fw-semibold">{powerMeter4Data.voltageR} V</div>
                </div>
              </CCol>

              {/* Active Power ΣP (as Gauge) */}
              <CCol xs={12} md={6} xl={6} className="d-flex justify-content-center">
                <div className="mb-4 text-center">
                  <div className="fs-5 fw-semibold">유효전력</div>
                  <GaugeContainer
                    width={200}
                    height={200}
                    startAngle={-110}
                    endAngle={110}
                    value={normalizedPowerMeter4ActivePower}
                    minValue={0}
                    maxValue={5000} // Adjust your maxValue based on actual power range
                  >
                    <GaugeReferenceArc />
                    <GaugeValueArc
                      color={
                        powerMeter4Data.activePower < 2500
                          ? '#00FF00'
                          : powerMeter4Data.activePower < 4000
                            ? '#FFFF00'
                            : '#FF0000'
                      }
                    />
                    <GaugePointer />
                  </GaugeContainer>
                  <div className="fs-3 fw-semibold">{powerMeter4Data.activePower} W</div>
                </div>
              </CCol>
              <CCol xs={6} md={6} xl={6} className="d-flex justify-content-center">
                <div className="mb-4 text-center">
                  <div className="fs-5 fw-semibold">전류 단상</div>
                  <div className="fs-3 fw-semibold">{powerMeter4Data.currentR} A</div>
                </div>
              </CCol>

              {/* Effective Energy ΣEP+ (as Text) */}
              <CCol xs={6} md={6} xl={6} className="d-flex justify-content-center">
                <div className="mb-4 text-center">
                  <div className="fs-5 fw-semibold">유효전력량</div>
                  <div className="fs-3 fw-semibold">{powerMeter4Data.effectiveEnergy} Wh</div>
                </div>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol md={6}>
        <CCard className="mb-4" style={{ cursor: 'pointer' }}>
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
        <CCard className="mb-4" style={{ cursor: 'pointer' }}>
          <CCardBody className="p-4">
            <CCardTitle className="fs-4 fw-semibold">열연기 감지기</CCardTitle>
            <CCardSubtitle className="fw-normal text-body-secondary border-bottom mb-3 pb-4">
              약 {calculateTimeDifference(smokeQualityData.collectionTime)}
            </CCardSubtitle>
            <CRow>
              <CCol xs={12} md={6} xl={4}>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">온도</div>
                  <div className="fs-5 fw-semibold">{smokeQualityData.temperature} °C</div>
                  <CProgress
                    value={(smokeQualityData.temperature / 50) * 100}
                    color={
                      airQualityData.temperature > 35
                        ? 'danger'
                        : airQualityData.temperature > 32
                          ? 'warning'
                          : 'success'
                    }
                  />
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">연기감지</div>
                  <div className="fs-5 fw-semibold">{smokeQualityData.smokeCheck}</div>
                  <CProgress
                    value={100}
                    color={smokeQualityData.smokeCheck === '감지' ? 'danger' : 'success'}
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
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">온도 경고</div>
                  <div className="fs-5 fw-semibold">{smokeQualityData.temperatureWarining}</div>
                  <CProgress
                    value={100}
                    color={smokeQualityData.temperatureWarining === '발생' ? 'danger' : 'success'}
                  />
                </div>
              </CCol>
              <CCol xs={12} md={6} xl={4}>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">동작 상태</div>
                  <div className="fs-5 fw-semibold">{smokeQualityData.runningCheck}</div>
                  <CProgress
                    value={100}
                    color={smokeQualityData.runningCheck === '비정상' ? 'danger' : 'success'}
                  />
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary text-truncate small">온도 알람</div>
                  <div className="fs-5 fw-semibold">{smokeQualityData.temperatureAlarm}</div>
                  <CProgress
                    value={100}
                    color={smokeQualityData.temperatureAlarm === '발생' ? 'danger' : 'success'}
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
