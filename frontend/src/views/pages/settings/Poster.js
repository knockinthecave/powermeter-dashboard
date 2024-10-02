import React, { useEffect, useState } from 'react'
import { CRow, CContainer } from '@coreui/react-pro'
import artworkImage1 from 'src/assets/images/settings/poster/1.jpg'
import artworkImage2 from 'src/assets/images/settings/poster/2.jpg'
import artworkImage3 from 'src/assets/images/settings/poster/3.jpg'
import artworkImage4 from 'src/assets/images/settings/poster/4.jpg'
import artworkImage5 from 'src/assets/images/settings/poster/5.jpg'
import artworkImage6 from 'src/assets/images/settings/poster/6.jpg'
import artworkImage7 from 'src/assets/images/settings/poster/7.jpg'
import artworkImage8 from 'src/assets/images/settings/poster/8.jpg'
import artworkImage9 from 'src/assets/images/settings/poster/9.jpg'
import artworkImage10 from 'src/assets/images/settings/poster/10.jpg'
import artworkImage11 from 'src/assets/images/settings/poster/11.jpg'
import artworkImage12 from 'src/assets/images/settings/poster/12.jpg'

// 12개월에 맞는 이미지 배열
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
  artworkImage11,
  artworkImage12,
]

const Poster = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    // 현재 날짜에서 월을 가져옴 (1월 = 0, 12월 = 11)
    const currentMonth = new Date().getMonth()
    setCurrentIndex(currentMonth) // 월에 맞는 이미지로 인덱스 설정
  }, [])

  return (
    <CRow className="justify-content-center">
      <CContainer fluid className="p-0 m-0" style={{ height: '90vh' }}>
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
          }}
        />
      </CContainer>
    </CRow>
  )
}

export default Poster
