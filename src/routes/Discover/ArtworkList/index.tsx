import { IArtworkData } from 'types/artwork'
import Artwork from './Artwork'
import styles from './ArtworkList.module.scss'

const ArtworkList = ({ artworkListData }: { artworkListData: IArtworkData[] }) => {
  return (
    <ul className={styles.artworkListWrapper}>
      {artworkListData.map((artworkData) => {
        return <Artwork artworkData={artworkData} key={artworkData.artwork_id} />
      })}
    </ul>
  )
}

export default ArtworkList
