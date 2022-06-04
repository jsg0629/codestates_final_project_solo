import styles from './TagList.module.scss'
import { ITopTagData } from 'types/artwork'

const Tag = ({ tagData }: { tagData: ITopTagData }) => {
  return (
    <li>
      <button type='button'>{tagData.hashtag}</button>
    </li>
  )
}

export default Tag
