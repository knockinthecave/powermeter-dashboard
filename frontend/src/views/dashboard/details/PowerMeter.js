import React from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react-pro'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'

const PowerMeter = () => {
  const random = () => Math.round(Math.random() * 100)

  return (
    <CRow>
      <div style={{ marginBottom: '12px' }}>
        <h2>전력량계</h2>
      </div>
      <CCol md={6}>
        <CCard className="mb-4">
          <CCardHeader>시간대별 유효전력량 (Wh)</CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: [
                  '00:00',
                  '01:00',
                  '02:00',
                  '03:00',
                  '04:00',
                  '05:00',
                  '06:00',
                  '07:00',
                  '08:00',
                  '09:00',
                  '10:00',
                  '11:00',
                  '12:00',
                  '13:00',
                  '14:00',
                  '15:00',
                  '16:00',
                  '17:00',
                  '18:00',
                  '19:00',
                  '20:00',
                  '21:00',
                  '22:00',
                  '23:00',
                ],
                datasets: [
                  {
                    label: 'Wh',
                    backgroundColor: '#f87979',
                    data: Array(24)
                      .fill()
                      .map(() => random()),
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol md={6}>
        <CCard className="mb-4">
          <CCardHeader>월별 유효전력량 (Wh)</CCardHeader>
          <CCardBody>
            <CChartLine
              data={{
                labels: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                  'August',
                  'September',
                  'October',
                  'November',
                  'December',
                ],
                datasets: [
                  {
                    label: 'Wh',
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    borderColor: 'rgba(220, 220, 220, 1)',
                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                    pointBorderColor: '#fff',
                    data: Array(12)
                      .fill()
                      .map(() => random()),
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol md={6}>
        <CCard className="mb-4">
          <CCardHeader>시간대별 유효전력 (W)</CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: [
                  '00:00',
                  '01:00',
                  '02:00',
                  '03:00',
                  '04:00',
                  '05:00',
                  '06:00',
                  '07:00',
                  '08:00',
                  '09:00',
                  '10:00',
                  '11:00',
                  '12:00',
                  '13:00',
                  '14:00',
                  '15:00',
                  '16:00',
                  '17:00',
                  '18:00',
                  '19:00',
                  '20:00',
                  '21:00',
                  '22:00',
                  '23:00',
                ],
                datasets: [
                  {
                    label: 'W',
                    backgroundColor: '#f87979',
                    data: Array(24)
                      .fill()
                      .map(() => random()),
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol md={6}>
        <CCard className="mb-4">
          <CCardHeader>월별 유효전력 (W)</CCardHeader>
          <CCardBody>
            <CChartLine
              data={{
                labels: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                  'August',
                  'September',
                  'October',
                  'November',
                  'December',
                ],
                datasets: [
                  {
                    label: 'W',
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    borderColor: 'rgba(220, 220, 220, 1)',
                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                    pointBorderColor: '#fff',
                    data: Array(12)
                      .fill()
                      .map(() => random()),
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default PowerMeter
