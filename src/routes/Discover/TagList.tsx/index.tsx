import styles from './TagList.module.scss'
import Tag from './Tag'

import { useRecoil } from 'hooks/state'
import { topTagDataState } from 'states/artwork'

import { ITopTagData } from 'types/artwork'

const TagList = () => {
  const [tagsData] = useRecoil(topTagDataState)
  console.log(tagsData)
  return (
    <ul className={styles.tagListWrapper}>
      <li>
        <button type='button'>전체</button>
      </li>
      {tagsData.map((tagData: ITopTagData) => {
        return <Tag tagData={tagData} key={tagData.id} />
      })}
    </ul>
  )
}

export default TagList
