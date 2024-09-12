import React, { useState } from 'react'
import { Fab, Menu, MenuItem } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import SettingsIcon from '@mui/icons-material/Settings'
import { useNavigate } from 'react-router-dom'

const FAB = () => {
  const navigate = useNavigate()

  // Menu 관련 상태
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  // 각 설정 항목 클릭 시 navigate
  const handleMenuClick = (path) => {
    navigate(path)
    handleClose() // 메뉴 닫기
  }

  return (
    <>
      {/* Home 버튼 */}
      <Fab
        variant="extended"
        color="primary"
        aria-label="home"
        onClick={() => navigate('/')}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: 'rgb(89, 81, 218)',
          color: 'white',
        }}
      >
        <HomeIcon sx={{ mr: 1 }} />
        HOME
      </Fab>

      {/* Settings 버튼과 Menu */}
      <Fab
        variant="extended"
        color="secondary"
        aria-label="settings"
        onClick={handleClick}
        style={{
          position: 'fixed',
          bottom: '80px',
          right: '20px',
          backgroundColor: 'rgb(89, 81, 218)',
          color: 'white',
        }}
      >
        <SettingsIcon sx={{ mr: 1 }} />
        Settings
      </Fab>

      {/* Menu (토글되는 부분) */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={() => handleMenuClick('/artwork')}>명화 설정</MenuItem>
        <MenuItem onClick={() => handleMenuClick('/poster')}>표어포스터 설정</MenuItem>
        <MenuItem onClick={() => handleMenuClick('/video')}>동영상 설정</MenuItem>
        <MenuItem onClick={() => handleMenuClick('/evacuation-guide-map')}>연기감지 Test</MenuItem>
      </Menu>
    </>
  )
}

export default FAB
