import styles from './Discover.module.scss'
import TopArtistSlider from './TopArtistSlider'
import ArtworkList from './ArtworkList'
import TagList from './TagList.tsx'

import { useQuery } from 'react-query'
import { useEffect, useState } from 'react'

import { useRecoil } from 'hooks/state'
import { topTagDataState } from 'states/artwork'

import { getMostUsedTags, getArtworkList } from 'services/artwork/get'

import Loading from 'components/Loading'

const Discover = () => {
  const [tagId, setTagId] = useState<undefined | number>(undefined)
  const [, setTopTagData] = useRecoil(topTagDataState)

  const { isLoading: tagDataLoading } = useQuery(['tag', 'top'], () => {
    getMostUsedTags(setTopTagData)
  })

  const {
    data: artworkListData,
    isLoading: isLoadingArtworkList,
    isError: isErrorArtworkList,
  } = useQuery(['artwork', 'list', ['tag', tagId]], getArtworkList(tagId), {
    staleTime: 1 * 60 * 1000,
  })
  console.log(artworkListData)

  return (
    <div className={styles.discoverWrapper}>
      <section className={styles.topArtistBox}>
        <h1>Top Artist</h1>
        <TopArtistSlider />
      </section>
      <section className={styles.discoverBox}>
        <h1>Discover</h1>
        {tagDataLoading ? <Loading heightValue={undefined} /> : <TagList setTagId={setTagId} />}
        {isLoadingArtworkList ? <Loading heightValue='260px' /> : <ArtworkList artworkListData={artworkListData} />}
      </section>
    </div>
  )
}

export default Discover
