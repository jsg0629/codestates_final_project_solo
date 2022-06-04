import styles from './TopArtistSlider.module.scss'
import Slider from 'react-slick'
import { useState, useRef, useCallback } from 'react'
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { dummyData } from './dummy'

const TopArtistSlider = () => {
  const [isEnd, setIsEnd] = useState(false)
  const slickRef = useRef<Slider>(null)
  const [profilesData, setProfilesData] = useState(dummyData)
  console.log(profilesData)

  const initialSettings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 10,
    slidesToScroll: 6,
    centerPadding: '0px',
    arrows: false,
  }

  const previous = useCallback(() => {
    slickRef?.current?.slickPrev()
    setIsEnd(false)
  }, [])

  const next = useCallback(() => {
    slickRef?.current?.slickNext()
    setIsEnd(true)
  }, [])

  return (
    <div className={styles.topArtistSliderWrapper}>
      <button onClick={previous} type='button' className={isEnd ? styles.beforeBtn : styles.endBtn}>
        <MdNavigateBefore size={35} />
      </button>
      <ul className={styles.sliderBox}>
        <Slider className={styles.slider} ref={slickRef} {...initialSettings}>
          {profilesData.map((el) => {
            return (
              <li className={styles.profileBox} key={`profileKey${el.name}`}>
                <img src={el.profileImg} alt='profile img' />
                <div className={styles.profileName}>{el.name}</div>
              </li>
            )
          })}
        </Slider>
      </ul>
      <button onClick={next} type='button' className={isEnd ? styles.endBtn : styles.nextBtn}>
        <MdNavigateNext size={35} />
      </button>
    </div>
  )
}

export default TopArtistSlider
