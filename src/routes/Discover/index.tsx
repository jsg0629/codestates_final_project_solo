import styles from './Discover.module.scss'
import TopArtistSlider from './TopArtistSlider'
import ArtworkList from './ArtworkList'
import TagList from './TagList.tsx'

import { useEffect } from 'react'

import { useRecoil } from 'hooks/state'
import { topTagDataState } from 'states/artwork'

const topTagData = [
  {
    id: 11,
    hashtag: 'hashtag11',
  },
  {
    id: 13,
    hashtag: 'hashtag13',
  },
  {
    id: 12,
    hashtag: 'hashtag12',
  },
  {
    id: 8,
    hashtag: 'hashtag8',
  },
  {
    id: 3,
    hashtag: 'hashtag3',
  },
  {
    id: 7,
    hashtag: 'hashtag7',
  },
  {
    id: 14,
    hashtag: 'hashtag14',
  },
  {
    id: 5,
    hashtag: 'hashtag5',
  },
  {
    id: 10,
    hashtag: 'hashtag10',
  },
  {
    id: 2,
    hashtag: 'hashtag2',
  },
]

const Discover = () => {
  const [tagsData, setTopTagData] = useRecoil(topTagDataState)

  useEffect(() => {
    setTopTagData(topTagData)
  }, [tagsData, setTopTagData])

  return (
    <div className={styles.discoverWrapper}>
      <section className={styles.topArtistBox}>
        <h1>Top Artist</h1>
        <TopArtistSlider />
      </section>
      <section className={styles.discoverBox}>
        <h1>Discover</h1>
        <TagList />
        <ArtworkList />
      </section>
    </div>
  )
}

export default Discover
