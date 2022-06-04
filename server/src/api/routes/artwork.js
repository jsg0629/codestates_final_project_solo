/* eslint-disable camelcase */
import dotenv from 'dotenv'

import { Router } from 'express'
import ArtworkService from '../../services/artwork'

dotenv.config()

const router = Router()
const ArtworkServiceInstance = new ArtworkService()

// 모든 artwork 조회
router.get('/', async (req, res) => {
  const { tag_id } = req.query
  try {
    const artworks = await ArtworkServiceInstance.getAllArtworks(tag_id, undefined, undefined)
    res.status(200).json(artworks)
  } catch (err) {
    res.status(404).json(err.toString())
  }
})

// 특정 artwork의 정보 조회
router.get('/:artwork_id', async (req, res) => {
  const { artwork_id } = req.params
  try {
    const artwork = await ArtworkServiceInstance.getOneArtworkDetail(artwork_id)
    return res.status(200).json(artwork)
  } catch (err) {
    return res.status(404).json(err.toString())
  }
})

export default router
