import React, { useState, useEffect } from 'react'
import { CCard, CCardBody, CCardSubtitle, CCardTitle, CCol, CRow } from '@coreui/react-pro'
import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from '@mui/x-charts/Gauge'
import axios from 'axios'

function GaugePointer() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState()

  if (valueAngle === null) {
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

const DigitalMultiMeter = () => {
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

  const maxVoltage = 400
  const normalizedVLN1 = (multiMetaData.voltage / maxVoltage) * 100
  const maxActivePower = 5000
  const normalizedActivePower = (multiMetaData.activePower / maxActivePower) * 100

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
    fetchMultiMetaData()
    const intervalId = setInterval(() => {
      fetchMultiMetaData()
    }, 60000) // 60000ms는 1분을 의미

    return () => clearInterval(intervalId)
  }, [])

  return (
    <CRow>
      <CCol md={12}>
        <CCard className="mb-4">
          <CCardBody className="p-4">
            <CCardTitle className="fs-4 fw-semibold">종합전력량</CCardTitle>
            <CCardSubtitle className="fw-normal text-body-secondary border-bottom mb-3 pb-4">
              약 {calculateTimeDifference(multiMetaData.collectionTime)}
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
                    value={normalizedVLN1}
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
                  <span style={{ fontSize: '3rem' }}>{multiMetaData.voltage} V</span>
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
                    value={normalizedActivePower}
                    minValue={0}
                    maxValue={100}
                  >
                    <GaugeReferenceArc />
                    <GaugeValueArc
                      color={
                        multiMetaData.activePower < 2500
                          ? '#00FF00'
                          : multiMetaData.activePower < 4000
                            ? '#FFFF00'
                            : '#FF0000'
                      }
                    />
                    <GaugePointer />
                  </GaugeContainer>
                  <span style={{ fontSize: '3rem' }}>{multiMetaData.activePower} W</span>
                </div>
              </CCol>

              {/* Voltage */}
              <CCol xs={6} md={4} xl={3}>
                <div className="mb-4 text-align">
                  <div className="text-body-secondary">전압</div>
                  <span style={{ fontSize: '3rem' }}>{multiMetaData.voltage} V</span>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={3}>
                <div className="mb-4 text-align">
                  <div className="text-body-secondary">전류</div>
                  <span style={{ fontSize: '3rem' }}>{multiMetaData.current} V</span>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={3}>
                <div className="mb-4 text-align">
                  <div className="text-body-secondary">유효전력량</div>
                  <span style={{ fontSize: '3rem' }}>
                    {multiMetaData.effectiveEnergy / 1000} kWh+
                  </span>
                </div>
              </CCol>

              {/* Line-to-Line Voltage */}
              <CCol xs={6} md={4} xl={3}>
                <div className="mb-4 text-align">
                  <div className="text-body-secondary">무효전력량</div>
                  <span style={{ fontSize: '3rem' }}>
                    {multiMetaData.reactiveEnergy / 1000} kWh-
                  </span>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={3}>
                <div className="mb-4 text-align">
                  <div className="text-body-secondary">피상전력</div>
                  <span style={{ fontSize: '3rem' }}>{multiMetaData.apparentPower / 1000} kW</span>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={3}>
                <div className="mb-4 text-align">
                  <div className="text-body-secondary">주파수</div>
                  <span style={{ fontSize: '3rem' }}>{multiMetaData.frequency} Hz</span>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={3}>
                <div className="mb-4 text-align">
                  <div className="text-body-secondary">고조파</div>
                  <span style={{ fontSize: '3rem' }}>{multiMetaData.harmonics} Hz</span>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={3}>
                <div className="mb-4 text-align">
                  <div className="text-body-secondary">온도</div>
                  <span style={{ fontSize: '3rem' }}>{multiMetaData.temperature} °C</span>
                </div>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default DigitalMultiMeter
