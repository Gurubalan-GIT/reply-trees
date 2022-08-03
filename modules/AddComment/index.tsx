import classes from '@styles/comments.module.scss'
import { FunctionComponent, useState } from 'react'

type AddCommentProps = {
  handleAddComment: (commentBody: string) => void
}

const AddComment: FunctionComponent<AddCommentProps> = ({
  handleAddComment,
}) => {
  const [commentBody, setCommentBody] = useState<string>('')

  const handleOnAdd = () => {
    handleAddComment(commentBody)
    setCommentBody('')
  }

  return (
    <div className={classes.addCommentWrapper}>
      <input
        onChange={(e) => setCommentBody(e.target.value)}
        value={commentBody}
      />
      <button onClick={handleOnAdd}>Add Comment</button>
    </div>
  )
}

export default AddComment
