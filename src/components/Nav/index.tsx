import styles from './Nav.module.scss'
import { Link } from 'react-router-dom'
import Art1stLogo from '../../assets/images/Art1st.png'

const Nav = () => {
  return (
    <div className={styles.navWrapper}>
      <div className={styles.leftItems}>
        <img src={Art1stLogo} alt='Art1st logo' style={{ width: '80px', height: '32px' }} />
        <Link to='Discover'>Discover</Link>
      </div>
      <div className={styles.rightItems}>
        <input type='text' placeholder='Search illustrator' />
        <button type='button' className={styles.loginBtn}>
          Login
        </button>
      </div>
    </div>
  )
}

export default Nav
