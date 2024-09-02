import React from 'react'
import { CRow, CContainer } from '@coreui/react-pro'
import VideoFile from 'src/assets/videos/korea.mp4'

const Video = () => {
  return (
    <CRow className="justify-content-center">
      <CContainer fluid className="p-0 m-0" style={{ height: '100vh' }}>
        <video
          src={VideoFile}
          style={{
            height: '100%',
            width: '100%',
            margin: 0,
            padding: 0,
          }}
          controls
          autoPlay
          loop
          muted
        />
      </CContainer>
    </CRow>
  )
}

export default Video
