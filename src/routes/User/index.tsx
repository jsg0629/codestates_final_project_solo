/* eslint-disable camelcase */
import styles from './User.module.scss'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'

import { getUserById } from 'services/user/get'

const User = () => {
  const { user_id } = useParams()

  const {
    data: userData,
    isError: userIsError,
    isLoading: userIsLoading,
  } = useQuery(['user', user_id], getUserById(user_id))

  console.log(userData)

  return <div>User</div>
}

export default User
