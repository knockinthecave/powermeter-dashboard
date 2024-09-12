import React from 'react'
import { CRow, CContainer } from '@coreui/react-pro'
import VideoFile from 'src/assets/videos/korea.mp4'
import banner1 from 'src/assets/images/settings/banner/banner1.jpg'
import banner2 from 'src/assets/images/settings/banner/banner2.jpg'

const Video = () => {
  return (
    <CRow className="justify-content-center">
      <CContainer fluid className="p-0 m-0" style={{ height: '90vh' }}>
        {/* Image Section */}
        <div
          style={{
            backgroundImage: `url(${banner2})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '20%', // 이미지가 화면의 나머지 절반을 차지하도록 설정
            width: '100%',
          }}
        />

        {/* Video Section */}
        <div style={{ height: '60%', width: '100%' }}>
          <video
            src={VideoFile}
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'contain', // 영상이 화면에 꽉 차도록
              margin: 0,
              padding: 0,
            }}
            autoPlay
            loop
            muted
          />
        </div>

        {/* Image Section */}
        <div
          style={{
            backgroundImage: `url(${banner1})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '20%', // 이미지가 화면의 나머지 절반을 차지하도록 설정
            width: '100%',
          }}
        />
      </CContainer>
    </CRow>
  )
}

export default Video
