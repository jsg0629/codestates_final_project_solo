/* eslint-disable class-methods-use-this */
/* eslint-disable no-await-in-loop */
import db from '../models/index'

class MainService {
  constructor() {
    this.Artwork = db.Artwork
  }

  async getMain() {
    try {
      const banner = await db.Artwork.findOne({
        // 가장 view가 많은 작품을 가져옴.
        attributes: ['id', 'imgURI'],
        order: [['views', 'DESC']],
        limit: 1,
      })

      return banner // artworks가 하나도 없으면 빈 배열 반환
    } catch (err) {
      throw Error(err.toString())
    }
  }
}

export default MainService
