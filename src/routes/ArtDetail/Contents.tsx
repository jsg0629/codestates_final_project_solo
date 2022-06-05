/* eslint-disable camelcase */
import styles from './ArtDetail.module.scss'

import { IDetailArtworkData } from 'types/artwork'

import dayjs from 'dayjs'
import { Link } from 'react-router-dom'

import { MdFavoriteBorder } from 'react-icons/md'

const Contents = ({ artworkData }: { artworkData: IDetailArtworkData }) => {
  const { title, description, imgURI, price, views, createdAt, owner_name, hashtags, owner_id } = artworkData

  const date = dayjs(createdAt)
  let hashtagList

  Array.isArray(hashtags)
    ? (hashtagList = hashtags.map((tagName: string[] | string) => {
        return (
          <li key={`Key-${tagName}`} className={styles.fill}>
            {tagName}
          </li>
        )
      }))
    : (hashtagList = <li className={styles.fill}>{hashtags}</li>)

  return (
    <div className={styles.contentsWrapper}>
      <div className={styles.contentsHeader}>
        <h2>{title}</h2>
        <div className={styles.btnBox}>
          <button type='button' className={styles.buyBtn}>
            Buy Artwork
          </button>
          <button type='button' className={styles.favBtn}>
            <MdFavoriteBorder size={20} />
          </button>
        </div>
      </div>

      <div className={styles.moreInfrom}>
        <div className={styles.ownerName}>
          Created by
          <Link to={`/user/${owner_id}`}>{owner_name}</Link>
        </div>
        <div>{date.format('YYYY-MM-DD')}</div>
        <div>{views} views</div>
        <div>{price} AST</div>
      </div>
      <div className={styles.artworkImgBox}>
        <img src={imgURI} alt='artwork img' />
      </div>
      <p className={styles.artworkDesc}>{description}</p>
      <ul className={styles.tagListWrapper}>{hashtagList}</ul>
    </div>
  )
}

export default Contents
