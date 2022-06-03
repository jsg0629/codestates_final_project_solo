import { useQuery } from 'react-query'

import styles from './Main.module.scss'
import { getMainData } from '../../services/main/get'
import Error from 'components/Error'
import Loading from 'components/Loading'

const Main = () => {
  const { data, isError, isLoading } = useQuery(['main'], getMainData())

  if (isError) return <Error />

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.appWrapper}>
          <div className={styles.titleBox}>
            <div className={styles.firstItem}>
              Donate for your <mark>ARTIST</mark>
            </div>
            <div className={styles.secondItem}>
              Sell your <mark>ARTWORK</mark>
            </div>
          </div>
          <div className={styles.bannerArtwork}>
            <img src={data.imgURI} alt='artWorkImg' />
          </div>
        </div>
      )}
    </div>
  )
}

export default Main
