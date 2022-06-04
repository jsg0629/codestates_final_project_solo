/* eslint-disable camelcase */
import styles from './ArtDetail.module.scss'
import { useQuery } from 'react-query'
import { getArtworkById } from 'services/artwork/get'

import { useParams } from 'react-router-dom'

import Contents from './Contents'
import Comment from './Comment'

const ArtDetail = () => {
  const { artwork_id } = useParams()

  const { data: artworkData, isError, isLoading } = useQuery(['artwork', artwork_id], getArtworkById(artwork_id))

  console.log(artworkData)
  return (
    <div className={styles.artDetailWrapper}>
      <Contents />
      <Comment />
    </div>
  )
}

export default ArtDetail
