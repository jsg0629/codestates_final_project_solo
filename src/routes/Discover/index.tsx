import styles from './Discover.module.scss'
import TopArtistSlider from './TopArtistSlider'

const Discover = () => {
  return (
    <div className={styles.discoverWrapper}>
      <section className={styles.topArtistBox}>
        <h1>Top Artist</h1>
        <TopArtistSlider />
      </section>
      <section className={styles.discoverBox}>
        <h1>Discover</h1>
      </section>
    </div>
  )
}

export default Discover
