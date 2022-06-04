/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
import dotenv from 'dotenv'

import db from '../models/index'
import UserService from './user'
import HashtagService from './hashtag'

dotenv.config()

class ArtworkService {
  constructor() {
    this.Artwork = db.Artwork
    this.User = db.User
    this.Like = db.Like
    this.Hashtag = db.Hashtag
    this.ArtworkHashtag = db.ArtworkHashtag
    this.UserServiceInterface = new UserService()
    this.HashtagServiceInterface = new HashtagService()
  }

  // 모든 artwork 조회
  async getAllArtworks(tag_id, owner_id, limit) {
    const _limit = limit === undefined ? undefined : Number(limit)
    const options = {
      where: {},
      attributes: [['id', 'artwork_id'], 'title', 'imgURI', 'price', 'views', 'owner_id'],
      include: [],
      _limit,
    }

    if (tag_id !== undefined) {
      options.include = [
        {
          attributes: [],
          model: db.ArtworkHashtag,
          where: { hashtag_id: tag_id },
        },
      ]
    }

    if (owner_id !== undefined) {
      options.where = { owner_id }
    }

    try {
      let artworks = await this.Artwork.findAll(options)
      artworks = await Promise.all(
        artworks.map(async (val) => {
          const _val = val.dataValues
          const additionalInfo = await this.getOneArtworkAdditional(_val.artwork_id, _val.owner_id)
          delete _val.owner_id
          return { ..._val, ...additionalInfo }
        })
      )

      return artworks
    } catch (err) {
      throw Error(err.toString())
    }
  }

  // 하나의 artwork에 대해 부차적인 정보 가져오기
  async getOneArtworkAdditional(artwork_id, owner_id) {
    const hashtags = await this.HashtagServiceInterface.getArtworkTag(artwork_id)

    const owner_name = await this.User.findOne({
      attributes: [['name', 'owner_name']],
      where: { id: owner_id },
    })

    const like_count = await db.Like.count({
      where: { artwork_id },
    })

    const comment_count = await db.Comment.count({
      where: { artwork_id },
    })

    return { ...owner_name.dataValues, like_count, comment_count, hashtags }
  }
}

export default ArtworkService
