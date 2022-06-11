import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import Art1stLogo from '../../assets/images/Art1st.png'
import styles from './Nav.module.scss'

const Nav = () => {
  return (
    <div className={styles.navWrapper}>
      <div className={styles.leftItems}>
        <ul>
          <li>
            <Link to='/'>
              <img src={Art1stLogo} alt='Art1st logo' style={{ width: '80px', height: '32px' }} />
            </Link>
          </li>
          <li>
            <Link to='Discover' className={styles.navDiscover}>
              Discover
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.rightItems}>
        <div className={styles.searchInputBox}>
          <input type='text' placeholder='Search Artist....' />
          <span className={styles.separator}> </span>
          <FaSearch className={styles.searchIcon} />
        </div>
        <button type='button' className={styles.loginBtn}>
          Login
        </button>
      </div>
    </div>
  )
}

export default Nav
