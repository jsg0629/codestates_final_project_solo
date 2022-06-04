import styles from './TopArtistSlider.module.scss'
import { IUserData } from 'types/user'

const Profile = ({ userData }: { userData: IUserData }) => {
  return (
    <li className={styles.profileBox}>
      <img src={userData.ProfileImg} alt='profile img' />
      <div className={styles.profileName}>{userData.name}</div>
    </li>
  )
}

export default Profile
