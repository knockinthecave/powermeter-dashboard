import React from 'react'
import { CRow, CContainer } from '@coreui/react-pro'
import Evauation from 'src/assets/images/settings/evacuation_route/Evacuation.png'
import './EvacuationGuideMap.css' // CSS 파일로 스타일 추가

const EvacuationGuideMap = () => {
  return (
    <CRow className="justify-content-center">
      <CContainer fluid className="p-0 m-0 evacuation-map-container">
        <div
          style={{
            backgroundImage: `url(${Evauation})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100%',
            width: '100%',
            margin: 0,
            padding: 0,
          }}
        />
      </CContainer>
    </CRow>
  )
}

export default EvacuationGuideMap
