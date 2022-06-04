/* eslint-disable camelcase */
import styles from './ArtDetail.module.scss'

import { useParams } from 'react-router-dom'

const ArtDetail = () => {
  const { artwork_id } = useParams()
  console.log(artwork_id)
  return <div>ArtDetail</div>
}

export default ArtDetail
