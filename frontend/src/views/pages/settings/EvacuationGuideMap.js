import React, { useEffect, useState } from 'react'
import { CRow, CContainer } from '@coreui/react-pro'
import evacuationGuideMap from 'src/assets/images/settings/evacuation_route/evacuation.jpg'
import './EvacuationGuideMap.css' // CSS 파일로 스타일 추가

const EvacuationGuideMap = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 2) // 예시로 두 가지 상태로 깜빡임
    }, 500) // 0.5초마다 깜빡임

    return () => clearInterval(intervalId)
  }, [])

  return (
    <CRow className="justify-content-center">
      <CContainer fluid className="p-0 m-0 evacuation-map-container">
        <div
          className={`evacuation-map-background ${currentIndex === 0 ? 'blink-on' : 'blink-off'}`}
          style={{
            backgroundImage: `url(${evacuationGuideMap})`,
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
