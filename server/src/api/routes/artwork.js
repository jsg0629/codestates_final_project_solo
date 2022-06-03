/* eslint-disable camelcase */
import dotenv from 'dotenv'

import { Router } from 'express'
import ArtworkService from '../../services/artwork'

dotenv.config()

const router = Router()
const ArtworkServiceInstance = new ArtworkService()

router.get('/', async (req, res) => {
  const { tag_id, is_selling } = req.query
  try {
    const artworks = await ArtworkServiceInstance.getAllArtworks(tag_id, is_selling, undefined, undefined, undefined)
    res.status(200).json(artworks)
  } catch (err) {
    res.status(404).json(err.toString())
  }
})
