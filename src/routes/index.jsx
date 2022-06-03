import { Routes, Route } from 'react-router-dom'
import styles from './Routes.module.scss'
import { FaGithub } from 'react-icons/fa'
import { SiNotion } from 'react-icons/si'

import ArtDetail from './ArtDetail'
import Discover from './Discover'
import Login from './Login'
import Main from './Main'
import Mypage from './Mypage'
import Upload from './Upload'
import User from './User'
import Nav from 'components/Nav'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <header>
        <Nav />
      </header>
      <div className={styles.app}>
        <main>
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
        </main>
        <footer>
          <div className={styles.footerWrapper}>
            <div className={styles.firstItem}>©2022 Art1st. All Rights Reserved.</div>
            <div className={styles.secondItem}>
              <a
                href='https://github.com/jsg0629/wanted_final_project'
                target='_blank'
                style={{ marginRight: '30px' }}
                rel='noreferrer'
              >
                <FaGithub className={styles.githubIcon} size={25} />
              </a>
              <a
                href='https://fluoridated-cayenne-db1.notion.site/Wanted_final_project_-3770a1b65d3244f18f7b3b56579ac2c5'
                target='_blank'
                rel='noreferrer'
              >
                <SiNotion className={styles.notionIcon} size={25} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
