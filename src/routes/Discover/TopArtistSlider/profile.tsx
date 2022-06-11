import { IUserData } from 'types/user'
import { Link } from 'react-router-dom'

import styles from './TopArtistSlider.module.scss'

const Profile = ({ userData }: { userData: IUserData }) => {
  return (
    <li className={styles.profileBox}>
      <img src={userData.ProfileImg} alt='profile img' />
      <Link to={`/user/${userData.id}`}>{userData.name}</Link>
    </li>
  )
}

export default Profile
