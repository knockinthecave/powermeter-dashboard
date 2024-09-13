import React from 'react'
import { CCard, CCardBody, CCardSubtitle, CCardTitle, CCol, CRow } from '@coreui/react-pro'
import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from '@mui/x-charts/Gauge'

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
  const multiMetaData = {
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
  }

  const maxVLN1 = 400
  const normalizedVLN1 = (multiMetaData.VLN1 / maxVLN1) * 100
  const maxActivePower = 5000
  const normalizedActivePower = (multiMetaData.P / maxActivePower) * 100

  return (
    <CRow>
      <CCol md={12}>
        <CCard className="mb-4">
          <CCardBody className="p-4">
            <CCardTitle className="fs-4 fw-semibold">종합전력량</CCardTitle>
            <CCardSubtitle className="fw-normal text-body-secondary border-bottom mb-3 pb-4">
              VIDER-M3
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
                        multiMetaData.VLN1 < 150
                          ? '#00FF00'
                          : multiMetaData.VLN1 < 300
                            ? '#FFFF00'
                            : '#FF0000'
                      }
                    />
                    <GaugePointer />
                  </GaugeContainer>
                  <span style={{ fontSize: '3rem' }}>{multiMetaData.VLN1} V</span>
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
                        multiMetaData.P < 2500
                          ? '#00FF00'
                          : multiMetaData.P < 4000
                            ? '#FFFF00'
                            : '#FF0000'
                      }
                    />
                    <GaugePointer />
                  </GaugeContainer>
                  <span style={{ fontSize: '3rem' }}>{multiMetaData.P} W</span>
                </div>
              </CCol>

              {/* Voltage */}
              <CCol xs={6} md={4} xl={3}>
                <div className="mb-4 text-align">
                  <div className="text-body-secondary">
                    V<sub>LN1</sub>
                  </div>
                  <span style={{ fontSize: '3rem' }}>{multiMetaData.VLN1} V</span>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={3}>
                <div className="mb-4 text-align">
                  <div className="text-body-secondary">
                    V<sub>LN2</sub>
                  </div>
                  <span style={{ fontSize: '3rem' }}>{multiMetaData.VLN2} V</span>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={3}>
                <div className="mb-4 text-align">
                  <div className="text-body-secondary">
                    V<sub>LN3</sub>
                  </div>
                  <span style={{ fontSize: '3rem' }}>{multiMetaData.VLN3} V</span>
                </div>
              </CCol>

              {/* Line-to-Line Voltage */}
              <CCol xs={6} md={4} xl={3}>
                <div className="mb-4 text-align">
                  <div className="text-body-secondary">
                    U<sub>LL12</sub>
                  </div>
                  <span style={{ fontSize: '3rem' }}>{multiMetaData.ULL12} V</span>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={3}>
                <div className="mb-4 text-align">
                  <div className="text-body-secondary">
                    U<sub>LL23</sub>
                  </div>
                  <span style={{ fontSize: '3rem' }}>{multiMetaData.ULL23} V</span>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={3}>
                <div className="mb-4 text-align">
                  <div className="text-body-secondary">
                    U<sub>LL31</sub>
                  </div>
                  <span style={{ fontSize: '3rem' }}>{multiMetaData.ULL31} V</span>
                </div>
              </CCol>

              {/* Frequency */}
              <CCol xs={6} md={4} xl={3}>
                <div className="mb-4 text-align">
                  <div className="text-body-secondary">주파수</div>
                  <span style={{ fontSize: '3rem' }}>{multiMetaData.Frequency} Hz</span>
                </div>
              </CCol>

              {/* Current */}
              <CCol xs={6} md={4} xl={3}>
                <div className="mb-4 text-align">
                  <div className="text-body-secondary">
                    I<sub>1</sub>
                  </div>
                  <span style={{ fontSize: '3rem' }}>{multiMetaData.I1} A</span>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={3}>
                <div className="mb-4 text-align">
                  <div className="text-body-secondary">
                    I<sub>2</sub>
                  </div>
                  <span style={{ fontSize: '3rem' }}>{multiMetaData.I2} A</span>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={3}>
                <div className="mb-4 text-align">
                  <div className="text-body-secondary">
                    I<sub>3</sub>
                  </div>
                  <span style={{ fontSize: '3rem' }}>{multiMetaData.I3} A</span>
                </div>
              </CCol>

              {/* Harmonics */}
              <CCol xs={6} md={4} xl={3}>
                <div className="mb-4 text-align">
                  <div className="text-body-secondary">VTHD</div>
                  <span style={{ fontSize: '3rem' }}>{multiMetaData.VTHD} %</span>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={3}>
                <div className="mb-4 text-align">
                  <div className="text-body-secondary">ITHD</div>
                  <span style={{ fontSize: '3rem' }}>{multiMetaData.ITHD} %</span>
                </div>
              </CCol>

              {/* Power Factors */}
              <CCol xs={6} md={4} xl={3}>
                <div className="mb-4 text-align">
                  <div className="text-body-secondary">Power Factor</div>
                  <span style={{ fontSize: '3rem' }}>{multiMetaData.PF}</span>
                </div>
              </CCol>

              {/* Power Metrics */}
              <CCol xs={6} md={4} xl={3}>
                <div className="mb-4 text-align">
                  <div className="text-body-secondary">P</div>
                  <span style={{ fontSize: '3rem' }}>{multiMetaData.P} W</span>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={3}>
                <div className="mb-4 text-align">
                  <div className="text-body-secondary">Q</div>
                  <span style={{ fontSize: '3rem' }}>{multiMetaData.Q} var</span>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={3}>
                <div className="mb-4 text-align">
                  <div className="text-body-secondary">S</div>
                  <span style={{ fontSize: '3rem' }}>{multiMetaData.S} VA</span>
                </div>
              </CCol>

              {/* Energy */}
              <CCol xs={6} md={4} xl={3}>
                <div className="mb-4 text-align">
                  <div className="text-body-secondary">유효전력량</div>
                  <span style={{ fontSize: '3rem' }}>{multiMetaData.EPPlus} Wh</span>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={3}>
                <div className="mb-4 text-align">
                  <div className="text-body-secondary">역전력량</div>
                  <span style={{ fontSize: '3rem' }}>{multiMetaData.EPMinus} Wh</span>
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
