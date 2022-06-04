/* eslint-disable camelcase */
import styles from './ArtworkList.module.scss'

import { IArtworkData } from 'types/artwork'
import { BiCommentDetail } from 'react-icons/bi'
import { MdFavorite } from 'react-icons/md'
import { IoIosEye } from 'react-icons/io'

import { Link } from 'react-router-dom'

const Artwork = ({ artworkData }: { artworkData: IArtworkData }) => {
  const { artwork_id, title, imgURI, price, views, owner_name, like_count, comment_count, hashtags } = artworkData

  return (
    <div className={styles.artworkWrapper}>
      <li>
        <img src={imgURI} alt='artowrk img' />
        <Link to={`/artwork/${artwork_id}`}>
          <div className={styles.cardHoverArea}>
            <div className={styles.contentsBox}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardOwner}> Owned by {owner_name}</p>
              <div className={styles.moreInfromation}>
                <div className={styles.cardLikeCount}>
                  <MdFavorite /> {like_count}
                </div>
                <div className={styles.cardCommentCount}>
                  <BiCommentDetail /> {comment_count}
                </div>
                <div className={styles.cardviews}>
                  <IoIosEye /> {views}
                </div>
                <div className={styles.cardPrice}>{price} AST</div>
              </div>
            </div>
          </div>
        </Link>
      </li>
    </div>
  )
}

export default Artwork
