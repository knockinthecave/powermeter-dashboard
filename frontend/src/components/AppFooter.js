import React from 'react'
import { CFooter } from '@coreui/react-pro'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <a href="http://jcastnet.co.kr" target="_blank" rel="noopener noreferrer">
          (주)제이캐스트
        </a>
        <span className="ms-1">&copy; 2024 Jcastnet</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
