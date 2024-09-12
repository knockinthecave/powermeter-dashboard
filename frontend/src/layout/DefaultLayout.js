import React from 'react'
import { AppContent, AppFooter, AppHeader } from '../components/index'
import { CContainer } from '@coreui/react-pro'

const DefaultLayout = () => {
  return (
    <CContainer fluid>
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <div className="body flex-grow-1">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </CContainer>
  )
}

export default DefaultLayout
