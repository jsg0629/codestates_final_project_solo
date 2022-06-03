import expressLoader from './express'
import mysqlLoader from './mysql'

export default async ({ expressApp }) => {
  await mysqlLoader()
  console.log('mySQL Initialized')

  await expressLoader({ app: expressApp })
  console.log('Express Initialized')
}
