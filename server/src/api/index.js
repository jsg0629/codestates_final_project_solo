import express from 'express'
import main from './routes/main'
import user from './routes/user'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('🚀 API Server is running...')
})

router.use('/main', main)
router.use('/user', user)

export default router
