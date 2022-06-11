import { useRecoil } from 'hooks/state'
import { useState } from 'react'
import { topTagDataState } from 'states/artwork'
import { ITopTagData } from 'types/artwork'

import Tag from './Tag'
import styles from './TagList.module.scss'

const TagList = ({ setTagId }: { setTagId: Function }) => {
  const [tagsData] = useRecoil(topTagDataState)
  const [clickedTagId, setClickedTagId] = useState(0)

  const handleTagClick = (Id: number) => {
    setClickedTagId(Id)
    setTagId(Id === 0 ? undefined : Id)
  }
  return (
    <ul className={styles.tagListWrapper}>
      <li>
        <button type='button' onClick={() => handleTagClick(0)} className={clickedTagId === 0 ? styles.fill : ''}>
          전체
        </button>
      </li>
      {tagsData.map((tagData: ITopTagData) => {
        return <Tag tagData={tagData} key={tagData.id} clickedTagId={clickedTagId} handleTagClick={handleTagClick} />
      })}
    </ul>
  )
}

export default TagList
