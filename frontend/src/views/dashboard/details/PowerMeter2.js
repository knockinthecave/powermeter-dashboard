import React, { useState, useEffect } from 'react'
import { CCard, CCardBody, CCardTitle, CCardSubtitle, CCol, CRow } from '@coreui/react-pro'
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

const PowerMeter2 = () => {
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

  const maxVoltageS = 400
  const normalizedVoltageR = (powerMeter2Data.voltageR / maxVoltageS) * 100

  const maxActivePower = 5000
  const normalizedActivePower = (powerMeter2Data.activePower / maxActivePower) * 100

  useEffect(() => {
    fetchPowerMeter2Data()
    const intervalId = setInterval(() => {
      fetchPowerMeter2Data()
    }, 60000) // 60000ms는 1분을 의미

    return () => clearInterval(intervalId)
  }, [])
  return (
    <CRow>
      <CCol md={12}>
        <CCard className="mb-4" style={{ cursor: 'pointer' }}>
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
                    value={normalizedVoltageR}
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
                    value={normalizedActivePower}
                    minValue={0}
                    maxValue={100} // Adjust your maxValue based on actual power range
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
              {/* Voltage and Current for R Phase */}
              <CCol xs={6} md={4} xl={4} className="text-align">
                <div className="mb-4">
                  <div className="text-body-secondary">전압 R상</div>
                  <span style={{ fontSize: '3rem' }}>{powerMeter2Data.voltageR} V</span>
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary">전류 R상</div>
                  <span style={{ fontSize: '3rem' }}>{powerMeter2Data.currentR} A</span>
                </div>
              </CCol>

              {/* Voltage and Current for S Phase */}
              <CCol xs={6} md={4} xl={4} className="text-align">
                <div className="mb-4">
                  <div className="text-body-secondary">전압 S상</div>
                  <span style={{ fontSize: '3rem' }}>{powerMeter2Data.voltageS} V</span>
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary">전류 S상</div>
                  <span style={{ fontSize: '3rem' }}>{powerMeter2Data.currentS} A</span>
                </div>
              </CCol>

              {/* Voltage and Current for T Phase */}
              <CCol xs={6} md={4} xl={4} className="text-align">
                <div className="mb-4">
                  <div className="text-body-secondary">전압 T상</div>
                  <span style={{ fontSize: '3rem' }}>{powerMeter2Data.voltageT} V</span>
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary">전류 T상</div>
                  <span style={{ fontSize: '3rem' }}>{powerMeter2Data.currentT} A</span>
                </div>
              </CCol>
            </CRow>

            <CRow>
              {/* Power and Energy */}
              <CCol xs={6} md={4} xl={4} className="text-align">
                <div className="mb-4">
                  <div className="text-body-secondary">유효전력</div>
                  <span style={{ fontSize: '3rem' }}>{powerMeter2Data.activePower} W</span>
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary">무효전력</div>
                  <span style={{ fontSize: '3rem' }}>{powerMeter2Data.reactivePower} var</span>
                </div>
              </CCol>

              <CCol xs={6} md={4} xl={4} className="text-align">
                <div className="mb-4">
                  <div className="text-body-secondary">유효전력량</div>
                  <span style={{ fontSize: '3rem' }}>{powerMeter2Data.effectiveEnergy} Wh</span>
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary">무효전력량</div>
                  <span style={{ fontSize: '3rem' }}>{powerMeter2Data.reactiveEnergy} varh</span>
                </div>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default PowerMeter2
