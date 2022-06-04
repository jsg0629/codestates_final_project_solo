import styles from './TagList.module.scss'
import Tag from './Tag'

const TagList = () => {
  return (
    <div className={styles.tagListWrapper}>
      <Tag />
    </div>
  )
}

export default TagList
