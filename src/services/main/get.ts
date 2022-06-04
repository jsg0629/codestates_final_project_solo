import { HOST_ADDRESS } from 'utils/constant/index'
import axios from 'axios'

export const getMainData = () => async () => {
  const { data } = await axios.get(`${HOST_ADDRESS}/main`)
  return data
}
