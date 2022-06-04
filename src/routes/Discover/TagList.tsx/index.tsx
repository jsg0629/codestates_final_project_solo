import styles from './TagList.module.scss'
import Tag from './Tag'

const TagList = () => {
  return (
    <ul className={styles.tagListWrapper}>
      <Tag />
    </ul>
  )
}

export default TagList
