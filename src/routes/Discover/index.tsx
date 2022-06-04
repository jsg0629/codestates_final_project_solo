import styles from './Discover.module.scss'
import TopArtistSlider from './TopArtistSlider'
import ArtworkList from './ArtworkList'
import TagList from './TagList.tsx'

import { useQuery } from 'react-query'
import { useEffect } from 'react'

import { useRecoil } from 'hooks/state'
import { topTagDataState } from 'states/artwork'

import { getMostUsedTags } from 'services/artwork/get'

import Loading from 'components/Loading'

const Discover = () => {
  const [, setTopTagData] = useRecoil(topTagDataState)

  const { isLoading: tagDataLoading } = useQuery(['tag', 'top'], () => {
    getMostUsedTags(setTopTagData)
  })

  console.log(tagDataLoading)
  return (
    <div className={styles.discoverWrapper}>
      <section className={styles.topArtistBox}>
        <h1>Top Artist</h1>
        <TopArtistSlider />
      </section>
      <section className={styles.discoverBox}>
        <h1>Discover</h1>
        {tagDataLoading ? <Loading /> : <TagList />}
        <ArtworkList />
      </section>
    </div>
  )
}

export default Discover
