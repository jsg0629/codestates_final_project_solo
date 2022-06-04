import styles from './ArtworkList.module.scss'
import Artwork from './Artwork'

import { IArtworkData } from 'types/artwork'

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
