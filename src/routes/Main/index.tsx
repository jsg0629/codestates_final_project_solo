import styles from './Main.module.scss'
import img from '../../assets/images/photo.jpg'

const Main = () => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.main}>Main</div>
      <img src={img} alt='dwqdwq' />
    </div>
  )
}

export default Main
