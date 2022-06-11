/* eslint-disable camelcase */
import { AiOutlineInstagram, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai'

import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getUserById } from 'services/user/get'

import Loading from 'components/Loading'
import styles from './User.module.scss'

const User = () => {
  const { user_id } = useParams()

  const { data: userData, isError: userIsError, isLoading } = useQuery(['user', user_id], getUserById(user_id))

  return (
    <div className={styles.userWrapper}>
      {isLoading ? (
        <Loading heightValue={undefined} />
      ) : (
        <div className={styles.userContentsWrapper}>
          <div className={styles.userImgBox}>
            <img src={userData.user_profile.picture} alt='profile img' />
          </div>
          <div className={styles.userName}>{userData.user.name}</div>
          <div className={styles.userMoreInform}>
            <AiOutlineInstagram size={25} />
            <AiOutlineTwitter size={25} />
            <AiFillFacebook size={25} />
          </div>
          <button type='button' className={styles.donateBtn}>
            Donate
          </button>
        </div>
      )}
    </div>
  )
}

export default User
