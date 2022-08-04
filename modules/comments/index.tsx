import { Comments as CommentsType } from '@services/Comments/Comments'
import classes from '@styles/comments.module.scss'
import Comment from 'modules/comment'
import { FunctionComponent, useState } from 'react'
import { ExpandCommentType } from 'utils/types'

type CommentsProps = {
  commentsQueue?: CommentsType
}

const Comments: FunctionComponent<CommentsProps> = ({ commentsQueue }) => {
  const comments = commentsQueue?.getArray()
  const [viewNestedComments, setViewNestedComments] =
    useState<ExpandCommentType>({
      activeKey: '',
      isExpanded: false,
    })

  return (
    <div>
      {comments?.map((comment) => (
        <div key={comment.value.key}>
          <Comment
            key={comment.value.key}
            comment={comment.value}
            viewNestedComments={viewNestedComments}
            setViewNestedComments={setViewNestedComments}
          />
          {comment.value?.children?.length > 0 &&
            viewNestedComments.activeKey === comment.value.key &&
            viewNestedComments.isExpanded && (
              <div className={classes.nestedComments}>
                <Comments
                  key={comment.value.key}
                  commentsQueue={comment.value?.children}
                />
              </div>
            )}
        </div>
      ))}
    </div>
  )
}

export default Comments
