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

// 나의 user 정보 가져오기
router.get('/', async (req, res) => {
  const { user_id } = req.session
  try {
    if (user_id === undefined) return res.status(401).json('Error: Unauthorized')
    const user = await UserServiceInstance.getMyUserInfo(user_id)
    return res.status(200).json(user)
  } catch (err) {
    return res.status(404).json(err.toString())
  }
})

// 나의 user 정보(닉네임)이나 프로필 수정)
router.put('/', async (req, res) => {
  const { user_id } = req.session
  const { user_desc, user_picture, user_name, instargram, tweeter, facebook } = req.body

  try {
    if (user_id === undefined) return res.status(401).json('Error: Unauthorized')
    const updated_user = await UserServiceInstance.putMyUserInfo(
      user_id,
      user_desc,
      user_picture,
      user_name,
      instargram,
      tweeter,
      facebook
    )
    return res.status(201).json(updated_user)
  } catch (err) {
    return res.status(404).json(err.toString())
  }
})

// 다른 특정 user 정보 가져오기
router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const user = await UserServiceInstance.getOtherUserInfo(id)
    return res.status(200).json(user)
  } catch (err) {
    return res.status(404).json(err.toString())
  }
})

export default router
