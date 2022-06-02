import { Routes, Route } from 'react-router-dom'
import styles from './Routes.module.scss'

import ArtDetail from './ArtDetail'
import Discover from './Discover'
import Login from './Login'
import Main from './Main'
import Mypage from './Mypage'
import Upload from './Upload'
import User from './User'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.app}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='Login' element={<Login />} />
          <Route path='Discover' element={<Discover />} />
          <Route path='ArtDetail' element={<ArtDetail />} />
          <Route path='Upload' element={<Upload />} />
          <Route path='Mypage' element={<Mypage />} />
          <Route path='User' element={<User />} />
          <Route path='*' element={<div>404</div>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
