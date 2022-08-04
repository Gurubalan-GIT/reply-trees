import { SendOutlined } from '@ant-design/icons'
import classes from '@styles/comments.module.scss'
import classNames from 'classnames'
import { FunctionComponent, useState } from 'react'

type AddCommentProps = {
  handleAddComment: (commentBody: string) => void
  isReply?: boolean
}

const AddComment: FunctionComponent<AddCommentProps> = ({
  handleAddComment,
  isReply,
}) => {
  const [commentBody, setCommentBody] = useState<string>('')

  const handleOnAdd = () => {
    handleAddComment(commentBody)
    setCommentBody('')
  }

  return (
    <div
      className={classNames(
        classes.addCommentWrapper,
        !isReply && classes.rootCommentWrapper
      )}
    >
      <input
        onChange={(e) => setCommentBody(e.target.value)}
        value={commentBody}
        placeholder={isReply ? 'Reply to this comment' : 'Post a comment'}
      />
      <button onClick={handleOnAdd}>
        <SendOutlined />
      </button>
    </div>
  )
}

export default AddComment
