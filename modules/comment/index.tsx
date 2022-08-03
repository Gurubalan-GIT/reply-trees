import classes from '@styles/comments.module.scss'
import { Dispatch, FunctionComponent, SetStateAction } from 'react'
import { CommentType, ExpandCommentType } from 'utils/types'

type CommentProps = {
  comment: CommentType
  viewNestedComments: ExpandCommentType
  setViewNestedComments: Dispatch<SetStateAction<ExpandCommentType>>
}

const Comment: FunctionComponent<CommentProps> = ({
  comment,
  viewNestedComments,
  setViewNestedComments,
}) => {
  return (
    <div className={classes.commentContainer}>
      {comment.body}
      <div
        className={classes.expandButton}
        onClick={() =>
          setViewNestedComments({
            activeKey: comment.key,
            isExpanded:
              viewNestedComments.activeKey !== comment.key
                ? true
                : !viewNestedComments.isExpanded,
          })
        }
      >
        {!viewNestedComments.isExpanded ||
        viewNestedComments.activeKey !== comment.key
          ? '▼'
          : '▲'}
      </div>
    </div>
  )
}

export default Comment
