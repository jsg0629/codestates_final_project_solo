import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getMainData } from '../../services/main/get'

import Error from 'components/Error'
import Loading from 'components/Loading'
import styles from './Main.module.scss'

const Main = () => {
  const { data, isError, isLoading } = useQuery(['main'], getMainData())

  if (isError) return <Error />

  return (
    <div className={styles.appWrapper}>
      {isLoading ? (
        <Loading heightValue={undefined} />
      ) : (
        <div className={styles.mainContentsWrapper}>
          <div className={styles.titleBox}>
            <div className={styles.firstItem}>
              Donate for your <mark>ARTIST</mark>
            </div>
            <div className={styles.secondItem}>
              Sell your <mark>ARTWORK</mark>
            </div>
          </div>
          <Link to={`/artwork/${data.id}`}>
            <div className={styles.bannerArtwork}>
              <img src={data.imgURI} alt='artWorkImg' />
            </div>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Main
