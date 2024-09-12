import React, { useState } from 'react'
import { CCard, CCardBody, CCardTitle, CCardSubtitle, CCol, CRow } from '@coreui/react-pro'

const PowerMeter3 = () => {
  const [powerMeter1Data, setPowerMeter1Data] = useState({
    effectiveEnergy: 15000,
    reactiveEnergy: 5000,
    voltageS: 230,
    currentS: 10,
    voltageR: 231,
    currentR: 9,
    activePower: 4000,
    reactivePower: 1200,
    voltageT: 232,
    currentT: 8,
    collectionTime: '2024-09-12T12:00:00',
  })

  const calculateTimeDifference = (time) => {
    const collectionTime = new Date(time)
    const currentTime = new Date()
    const diffInMilliseconds = currentTime - collectionTime
    const diffInMinutes = Math.floor(diffInMilliseconds / 1000 / 60)
    const diffInHours = Math.floor(diffInMinutes / 60)
    const diffInDays = Math.floor(diffInHours / 24)
    if (diffInMinutes < 60) {
      return `${diffInMinutes}분 전`
    } else if (diffInHours < 24) {
      return `${diffInHours}시간 전`
    } else {
      return `${diffInDays}일 전`
    }
  }

  return (
    <CRow>
      <CCol md={12}>
        <CCard className="mb-4" style={{ cursor: 'pointer' }}>
          <CCardBody className="p-4">
            <CCardTitle className="fs-4 fw-semibold">전력량계 3</CCardTitle>
            <CCardSubtitle className="fw-normal text-body-secondary border-bottom mb-3 pb-4">
              약 {calculateTimeDifference(powerMeter1Data.collectionTime)}
            </CCardSubtitle>
            <CRow>
              {/* Voltage and Current for R Phase */}
              <CCol xs={6} md={4} xl={4} className="text-align">
                <div className="mb-4">
                  <div className="text-body-secondary">전압 R상</div>
                  <div className="fs-5 fw-semibold">{powerMeter1Data.voltageR} V</div>
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary">전류 R상</div>
                  <div className="fs-5 fw-semibold">{powerMeter1Data.currentR} A</div>
                </div>
              </CCol>

              {/* Voltage and Current for S Phase */}
              <CCol xs={6} md={4} xl={4} className="text-align">
                <div className="mb-4">
                  <div className="text-body-secondary">전압 S상</div>
                  <div className="fs-5 fw-semibold">{powerMeter1Data.voltageS} V</div>
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary">전류 S상</div>
                  <div className="fs-5 fw-semibold">{powerMeter1Data.currentS} A</div>
                </div>
              </CCol>

              {/* Voltage and Current for T Phase */}
              <CCol xs={6} md={4} xl={4} className="text-align">
                <div className="mb-4">
                  <div className="text-body-secondary">전압 T상</div>
                  <div className="fs-5 fw-semibold">{powerMeter1Data.voltageT} V</div>
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary">전류 T상</div>
                  <div className="fs-5 fw-semibold">{powerMeter1Data.currentT} A</div>
                </div>
              </CCol>
            </CRow>

            <CRow>
              {/* Power and Energy */}
              <CCol xs={6} md={4} xl={4} className="text-align">
                <div className="mb-4">
                  <div className="text-body-secondary">유효전력</div>
                  <div className="fs-5 fw-semibold">{powerMeter1Data.activePower} W</div>
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary">무효전력</div>
                  <div className="fs-5 fw-semibold">{powerMeter1Data.reactivePower} var</div>
                </div>
              </CCol>

              <CCol xs={6} md={4} xl={4} className="text-align">
                <div className="mb-4">
                  <div className="text-body-secondary">유효전력량</div>
                  <div className="fs-5 fw-semibold">{powerMeter1Data.effectiveEnergy} Wh</div>
                </div>
                <div className="mb-4">
                  <div className="text-body-secondary">무효전력량</div>
                  <div className="fs-5 fw-semibold">{powerMeter1Data.reactiveEnergy} varh</div>
                </div>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default PowerMeter3
