import styles from './Main.module.scss'
import artWorkImg from '../../assets/images/ArtWork.jpg'

const Main = () => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.titleBox}>
        <div className={styles.firstItem}>
          Donate for your <mark>ARTIST</mark>
        </div>
        <div className={styles.secondItem}>
          Sell your <mark>ARTWORK</mark>
        </div>
      </div>
      <div className={styles.bannerArtwork}>
        <img src={artWorkImg} alt='artWorkImg' />
      </div>
    </div>
  )
}

export default Main
