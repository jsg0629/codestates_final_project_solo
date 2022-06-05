import { HOST_ADDRESS } from 'utils/constant/index'
import axios from 'axios'

export const getTopCreators = () => async () => {
  // total_sales을 기준으로 user 테이블을 정렬하여 상위 15개의 user profile을 리턴해준다.
  const { data } = await axios.get(`${HOST_ADDRESS}/user/top`)
  return data
}

// other user info
export const getUserById = (id: undefined | string | string[]) => async () => {
  const { data } = await axios.get(`${HOST_ADDRESS}/user/${id}`)
  return data
}
