import React from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react-pro'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import GaugeComponent from 'react-gauge-component'

const PowerMeter = () => {
  const random = (min, max) => Math.round(Math.random() * 1000)
  const maxYValue = 1500

  const currentPower = 1200 // 현재 전력량

  const kiloWattToMegaWatt = (value) => {
    if (value >= 1000) {
      value = value / 1000
      if (Number.isInteger(value)) {
        return value.toFixed(0) + ' kW'
      } else {
        return value.toFixed(1) + ' kW'
      }
    } else {
      return value.toFixed(0) + ' W'
    }
  }

  return (
    <CRow>
      <div style={{ marginBottom: '12px' }}>
        <h2>전력량계</h2>
      </div>
      <CCol md={6}>
        <CCard className="mb-4">
          <CCardHeader>현재 유효전력 (W)</CCardHeader>
          <CCardBody>
            <GaugeComponent
              arc={{
                nbSubArcs: 150,
                colorArray: ['#5BE12C', '#F5CD19', '#EA4228'],
                width: 0.4,
                padding: 0.003,
              }}
              labels={{
                valueLabel: {
                  fontSize: 40,
                  formatTextValue: kiloWattToMegaWatt,
                },
                tickLabels: {
                  type: 'outer',
                  ticks: [
                    { value: 100 },
                    { value: 200 },
                    { value: 300 },
                    { value: 400 },
                    { value: 500 },
                    { value: 600 },
                    { value: 700 },
                    { value: 800 },
                    { value: 900 },
                    { value: 1000 },
                    { value: 1500 },
                    { value: 2000 },
                    { value: 2500 },
                    { value: 3000 },
                  ],
                  valueConfig: {
                    formatTextValue: kiloWattToMegaWatt,
                  },
                },
              }}
              value={currentPower}
              maxValue={3000}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol md={6}>
        <CCard className="mb-4">
          <CCardHeader>현재 무효전력 (W)</CCardHeader>
          <CCardBody>
            <GaugeComponent
              arc={{
                nbSubArcs: 150,
                colorArray: ['#5BE12C', '#F5CD19', '#EA4228'],
                width: 0.4,
                padding: 0.003,
              }}
              labels={{
                valueLabel: {
                  fontSize: 40,
                  formatTextValue: kiloWattToMegaWatt,
                },
                tickLabels: {
                  type: 'outer',
                  ticks: [
                    { value: 100 },
                    { value: 200 },
                    { value: 300 },
                    { value: 400 },
                    { value: 500 },
                    { value: 600 },
                    { value: 700 },
                    { value: 800 },
                    { value: 900 },
                    { value: 1000 },
                    { value: 1500 },
                    { value: 2000 },
                    { value: 2500 },
                    { value: 3000 },
                  ],
                  valueConfig: {
                    formatTextValue: kiloWattToMegaWatt,
                  },
                },
              }}
              value={currentPower}
              maxValue={3000}
            />
          </CCardBody>
        </CCard>
      </CCol>
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
              options={{
                scales: {
                  y: {
                    max: maxYValue,
                    beginAtZero: true,
                  },
                },
              }}
              style={{ height: '300px', width: '100%' }}
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
              options={{
                scales: {
                  y: {
                    max: maxYValue,
                    beginAtZero: true,
                  },
                },
              }}
              style={{ height: '300px', width: '100%' }}
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
              options={{
                scales: {
                  y: {
                    max: maxYValue,
                    beginAtZero: true,
                  },
                },
              }}
              style={{ height: '300px', width: '100%' }}
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
              options={{
                scales: {
                  y: {
                    max: maxYValue,
                    beginAtZero: true,
                  },
                },
              }}
              style={{ height: '300px', width: '100%' }}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default PowerMeter
