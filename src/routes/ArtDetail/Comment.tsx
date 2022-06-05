import styles from './ArtDetail.module.scss'

import { IoSendSharp } from 'react-icons/io5'
import { useRef, useEffect, useCallback } from 'react'

const Comment = () => {
  const ref = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (ref === null || ref.current === null) {
      return
    }
    ref.current.style.height = '40px'
    ref.current.style.height = `${ref.current.scrollHeight}px`
  }, [])

  const handleResizeHeight = useCallback(() => {
    if (ref === null || ref.current === null) {
      return
    }
    ref.current.style.height = '40px'
    ref.current.style.height = `${ref.current.scrollHeight}px`
  }, [])

  return (
    <div className={styles.commentFormWrapper}>
      <form
        className={styles.commentForm}
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <div className={styles.textareaBox}>
          <textarea name='' placeholder='Type your comment here...' ref={ref} onInput={handleResizeHeight} />
          <span className={styles.separator}> </span>
          <button type='submit' className={styles.sendBtn}>
            <span>SEND</span>
            <IoSendSharp size={20} />
          </button>
        </div>
      </form>
    </div>
  )
}
export default Comment
