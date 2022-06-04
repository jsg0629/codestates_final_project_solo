import { HOST_ADDRESS } from 'utils/constant/index'
import axios from 'axios'

export const getMostUsedTags = (setTopTagData: Function) => {
  return axios.get(`${HOST_ADDRESS}/artwork/tag/top`).then((res) => {
    return setTopTagData(res.data)
  })
}

export const getArtworkList = (tagId?: number) => async () => {
  const { data } = await axios.get(`${HOST_ADDRESS}/artwork`, {
    params: { tag_id: tagId },
  })
  return data
}
