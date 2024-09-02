import React, { useEffect, useState } from 'react'
import { CRow, CContainer } from '@coreui/react-pro'
import artworkImage1 from 'src/assets/images/settings/artwork/artwork.jpg'
import artworkImage2 from 'src/assets/images/settings/artwork/artwork2.jpg'
import artworkImage3 from 'src/assets/images/settings/artwork/artwork3.jpg'
import Debussy from 'src/assets/music/Debussy.mp3'

const images = [artworkImage1, artworkImage2, artworkImage3]

const ArtWork = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      // 이미지를 순서대로 변경
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    // 컴포넌트가 언마운트될 때 타이머를 정리합니다.
    return () => clearInterval(intervalId)
  }, [])

  return (
    <CRow className="justify-content-center">
      <CContainer fluid className="p-0 m-0" style={{ height: '100vh' }}>
        <div
          style={{
            backgroundImage: `url(${images[currentIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100%',
            width: '100%',
            margin: 0,
            padding: 0,
          }}
        />
        <audio src={Debussy} autoPlay loop />
      </CContainer>
    </CRow>
  )
}

export default ArtWork
