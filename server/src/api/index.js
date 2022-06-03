import express from 'express'
import main from './routes/main'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('🚀 API Server is running...')
})

router.use('/main', main)

export default router
