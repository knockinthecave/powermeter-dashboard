import React from 'react'
import { CCard, CCardBody, CCardSubtitle, CCardTitle, CCol, CRow } from '@coreui/react-pro'

const DigitalMultiMeter = () => {
  const multiMetaData = {
    VLN1: 230.5, // 단위: V
    VLN2: 231.2, // 단위: V
    VLN3: 229.8, // 단위: V
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
              {/* Voltage */}
              <CCol xs={6} md={4} xl={3}>
                <div className="mb-4 text-align">
                  <div className="text-body-secondary">
                    V<sub>LN1</sub>
                  </div>
                  <div className="fs-3 fw-semibold">{multiMetaData.VLN1} V</div>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={3}>
                <div className="mb-4 text-align">
                  <div className="text-body-secondary">
                    V<sub>LN2</sub>
                  </div>
                  <div className="fs-3 fw-semibold">{multiMetaData.VLN2} V</div>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={3}>
                <div className="mb-4 text-align">
                  <div className="text-body-secondary">
                    V<sub>LN3</sub>
                  </div>
                  <div className="fs-3 fw-semibold">{multiMetaData.VLN3} V</div>
                </div>
              </CCol>

              {/* Line-to-Line Voltage */}
              <CCol xs={6} md={4} xl={3}>
                <div className="mb-4 text-align">
                  <div className="text-body-secondary">
                    U<sub>LL12</sub>
                  </div>
                  <div className="fs-3 fw-semibold">{multiMetaData.ULL12} V</div>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={3}>
                <div className="mb-4 text-align">
                  <div className="text-body-secondary">
                    U<sub>LL23</sub>
                  </div>
                  <div className="fs-3 fw-semibold">{multiMetaData.ULL23} V</div>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={3}>
                <div className="mb-4 text-align">
                  <div className="text-body-secondary">
                    U<sub>LL31</sub>
                  </div>
                  <div className="fs-3 fw-semibold">{multiMetaData.ULL31} V</div>
                </div>
              </CCol>

              {/* Frequency */}
              <CCol xs={6} md={4} xl={3}>
                <div className="mb-4 text-align">
                  <div className="text-body-secondary">주파수</div>
                  <div className="fs-3 fw-semibold">{multiMetaData.Frequency} Hz</div>
                </div>
              </CCol>

              {/* Current */}
              <CCol xs={6} md={4} xl={3}>
                <div className="mb-4 text-align">
                  <div className="text-body-secondary">
                    I<sub>1</sub>
                  </div>
                  <div className="fs-3 fw-semibold">{multiMetaData.I1} A</div>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={3}>
                <div className="mb-4 text-align">
                  <div className="text-body-secondary">
                    I<sub>2</sub>
                  </div>
                  <div className="fs-3 fw-semibold">{multiMetaData.I2} A</div>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={3}>
                <div className="mb-4 text-align">
                  <div className="text-body-secondary">
                    I<sub>3</sub>
                  </div>
                  <div className="fs-3 fw-semibold">{multiMetaData.I3} A</div>
                </div>
              </CCol>

              {/* Harmonics */}
              <CCol xs={6} md={4} xl={3}>
                <div className="mb-4 text-align">
                  <div className="text-body-secondary">VTHD</div>
                  <div className="fs-3 fw-semibold">{multiMetaData.VTHD} %</div>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={3}>
                <div className="mb-4 text-align">
                  <div className="text-body-secondary">ITHD</div>
                  <div className="fs-3 fw-semibold">{multiMetaData.ITHD} %</div>
                </div>
              </CCol>

              {/* Power Factors */}
              <CCol xs={6} md={4} xl={3}>
                <div className="mb-4 text-align">
                  <div className="text-body-secondary">Power Factor</div>
                  <div className="fs-3 fw-semibold">{multiMetaData.PF}</div>
                </div>
              </CCol>

              {/* Power Metrics */}
              <CCol xs={6} md={4} xl={3}>
                <div className="mb-4 text-align">
                  <div className="text-body-secondary">P</div>
                  <div className="fs-3 fw-semibold">{multiMetaData.P} W</div>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={3}>
                <div className="mb-4 text-align">
                  <div className="text-body-secondary">Q</div>
                  <div className="fs-3 fw-semibold">{multiMetaData.Q} var</div>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={3}>
                <div className="mb-4 text-align">
                  <div className="text-body-secondary">S</div>
                  <div className="fs-3 fw-semibold">{multiMetaData.S} VA</div>
                </div>
              </CCol>

              {/* Energy */}
              <CCol xs={6} md={4} xl={3}>
                <div className="mb-4 text-align">
                  <div className="text-body-secondary">유효전력량</div>
                  <div className="fs-3 fw-semibold">{multiMetaData.EPPlus} Wh</div>
                </div>
              </CCol>
              <CCol xs={6} md={4} xl={3}>
                <div className="mb-4 text-align">
                  <div className="text-body-secondary">역전력량</div>
                  <div className="fs-3 fw-semibold">{multiMetaData.EPMinus} Wh</div>
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
