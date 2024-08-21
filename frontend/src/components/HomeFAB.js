import React from 'react'
import { Fab } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import { useNavigate } from 'react-router-dom'

const HomeFAB = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }

  return (
    <Fab
      variant="extended"
      color="primary"
      aria-label="home"
      onClick={handleClick}
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
  )
}

export default HomeFAB
