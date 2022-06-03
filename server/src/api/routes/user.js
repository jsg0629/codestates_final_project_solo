/* eslint-disable camelcase */
import { Router } from 'express'
import UserService from '../../services/user'

const UserServiceInstance = new UserService()
const router = Router()

// 로그인
router.post('/login', async (req, res) => {
  const { user_id, user_pw } = req.body
  try {
    await UserServiceInstance.login(user_id, user_pw, req).then(() => {
      res.status(200).json({ message: 'ok' })
    })
  } catch (err) {
    res.status(404).send({ data: null, message: 'not authorized' })
  }
})

// 로그 아웃
router.delete('/logout', (req, res) => {
  try {
    const isLogout = UserServiceInstance.logout(req.session)
    if (isLogout) {
      res.status(200).json({ data: null, message: 'done' })
    } else {
      res.status(404)
    }
  } catch (err) {
    res.status(404).json(err.toString())
  }
})

router.get('/islogin', async (req, res) => {
  const { user_id } = req.session
  try {
    if (user_id === undefined) return res.status(200).json(false)
    const user = await UserServiceInstance.getMyUserInfo(user_id)
    console.log(user)
    console.log(user.user.id)
    const {
      user_profile: { picture },
      user: { id, name, balance },
    } = user
    return res.status(200).json({ id, name, picture, balance })
  } catch (err) {
    return res.status(404).json(err.toString())
  }
})

router.post('/signup', async (req, res) => {
  const { user_id, user_pw } = req.body
  try {
    await UserServiceInstance.signUp(user_id, user_pw)
    res.status(201).json(true)
  } catch (err) {
    res.status(404).json(err.toString())
  }
})

// Artworks Page Top Creator 15명 Users 정보 가져오기
router.get('/top', async (req, res) => {
  try {
    const TopUsers = await UserServiceInstance.getTopUsers()
    res.status(200).json(TopUsers)
  } catch (err) {
    res.status(404).json(err.toString())
  }
})
