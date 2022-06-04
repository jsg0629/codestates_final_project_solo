import styles from './ArtworkList.module.scss'
import Artwork from './Artwork'

const ArtworkList = () => {
  return (
    <div className={styles.ArtworkListWrapper}>
      <Artwork />
    </div>
  )
}

export default ArtworkList
