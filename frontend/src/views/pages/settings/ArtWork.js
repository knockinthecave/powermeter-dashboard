import React, { useEffect, useState } from 'react'
import { CRow, CContainer } from '@coreui/react-pro'
import artworkImage1 from 'src/assets/images/settings/artwork/artwork1.jpg'
import artworkImage2 from 'src/assets/images/settings/artwork/artwork2.jpg'
import artworkImage3 from 'src/assets/images/settings/artwork/artwork3.jpg'
import artworkImage4 from 'src/assets/images/settings/artwork/artwork4.jpg'
import artworkImage5 from 'src/assets/images/settings/artwork/artwork5.jpg'
import artworkImage6 from 'src/assets/images/settings/artwork/artwork6.jpg'
import artworkImage7 from 'src/assets/images/settings/artwork/artwork7.jpg'
import artworkImage8 from 'src/assets/images/settings/artwork/artwork8.jpg'
import artworkImage9 from 'src/assets/images/settings/artwork/artwork9.jpg'
import artworkImage10 from 'src/assets/images/settings/artwork/artwork10.jpg'
import Debussy from 'src/assets/music/Debussy.mp3'

const images = [
  artworkImage1,
  artworkImage2,
  artworkImage3,
  artworkImage4,
  artworkImage5,
  artworkImage6,
  artworkImage7,
  artworkImage8,
  artworkImage9,
  artworkImage10,
]

const ArtWork = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        setFade(true)
      }, 500) // 500ms 동안 페이드 아웃 후 이미지 전환
    }, 15000) // 15초마다 이미지 변경

    // 컴포넌트가 언마운트될 때 타이머를 정리합니다.
    return () => clearInterval(intervalId)
  }, [])

  return (
    <CRow className="justify-content-center">
      <CContainer
        fluid
        className="p-0 m-0"
        style={{
          height: '90vh',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            backgroundImage: `url(${images[currentIndex]})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100%',
            width: '100%',
            margin: 0,
            padding: 0,
            transition: 'opacity 0.5s ease-in-out',
            opacity: fade ? 1 : 0,
          }}
        />
        <audio src={Debussy} autoPlay loop />
      </CContainer>
    </CRow>
  )
}

export default ArtWork
