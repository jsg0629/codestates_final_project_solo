import { HOST_ADDRESS } from 'utils/constant/index'
import axios from 'axios'

export const getMostUsedTags = (setTopTagData: Function) => {
  return axios.get(`${HOST_ADDRESS}/artwork/tag/top`).then((res) => {
    return setTopTagData(res.data)
  })
}
