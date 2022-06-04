/* eslint-disable camelcase */
import { HOST_ADDRESS } from 'utils/constant/index'
import axios from 'axios'

// 가장 많이 사용한 상위태그 10개
export const getMostUsedTags = (setTopTagData: Function) => {
  return axios.get(`${HOST_ADDRESS}/artwork/tag/top`).then((res) => {
    return setTopTagData(res.data)
  })
}

// 모든 artwork info
export const getArtworkList = (tagId?: number) => async () => {
  const { data } = await axios.get(`${HOST_ADDRESS}/artwork`, {
    params: { tag_id: tagId },
  })
  return data
}

// 특정 artwork info
export const getArtworkById = (artwork_id: string | string[] | undefined) => async () => {
  const { data } = await axios.get(`${HOST_ADDRESS}/artwork/${artwork_id}`)
  return data
}
