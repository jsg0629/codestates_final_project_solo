import styles from './TagList.module.scss'
import { ITopTagData } from 'types/artwork'

const Tag = ({
  tagData,
  clickedTagId,
  handleTagClick,
}: {
  tagData: ITopTagData
  clickedTagId: number
  handleTagClick: Function
}) => {
  return (
    <li>
      <button
        type='button'
        onClick={() => {
          handleTagClick(tagData.id)
        }}
        className={clickedTagId === tagData.id ? styles.fill : ''}
      >
        {tagData.hashtag}
      </button>
    </li>
  )
}

export default Tag
