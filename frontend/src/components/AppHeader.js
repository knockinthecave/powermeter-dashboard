import React from 'react'
import {
  CContainer,
  CHeader,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CButton,
} from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilSettings } from '@coreui/icons'
import { useNavigate } from 'react-router-dom'

const AppHeader = () => {
  const navigate = useNavigate()

  const handleNavigate = (path) => {
    navigate(path)
  }

  const buttonStyle = {
    fontSize: '1.25rem', // 글씨 크기를 크게 설정
    fontWeight: 'bold', // 글씨를 굵게 설정
  }

  const dropdownItemStyle = {
    fontSize: '1.25rem', // 글씨 크기를 크게 설정
    fontWeight: 'bold', // 글씨를 굵게 설정
  }

  return (
    <CHeader position="sticky" className="bg-primary mb-4 p-0">
      <CContainer fluid className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <CButton
            color="primary"
            className="me-3 text-white"
            onClick={() => handleNavigate('/temperature-humidity')}
            style={buttonStyle}
          >
            온도/습도
          </CButton>
          <CButton
            color="primary"
            className="me-3 text-white"
            onClick={() => handleNavigate('/air-quality')}
            style={buttonStyle}
          >
            미세먼지
          </CButton>
          <CButton
            color="primary"
            className="me-3 text-white"
            onClick={() => handleNavigate('/dashboard')}
            style={buttonStyle}
          >
            전력량
          </CButton>
        </div>

        <div className="d-flex align-items-center ms-auto">
          <CDropdown className="ms-4">
            <CDropdownToggle color="primary" className="text-white" style={buttonStyle}>
              <CIcon icon={cilSettings} size="xl" />
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem onClick={() => handleNavigate('/artwork')} style={dropdownItemStyle}>
                명화 설정
              </CDropdownItem>
              <CDropdownItem onClick={() => handleNavigate('/poster')} style={dropdownItemStyle}>
                표어포스터설정
              </CDropdownItem>
              <CDropdownItem onClick={() => handleNavigate('/video')} style={dropdownItemStyle}>
                동영상 설정
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </div>
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
