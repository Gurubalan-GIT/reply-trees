import { Dispatch as RematchDispatch } from '@rematch/store'
import classes from '@styles/comments.module.scss'
import classNames from 'classnames'
import AddComment from 'modules/AddComment'
import {
  Dispatch,
  Fragment,
  FunctionComponent,
  SetStateAction,
  useState,
} from 'react'
import { useDispatch } from 'react-redux'
import { buildNewReply } from 'utils/helpers'
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
  const [viewAddReplyBlock, setViewAddReplyBlock] = useState<boolean>(false)
  const dispatch = useDispatch<RematchDispatch>()

  const handleViewNestedComments = () => {
    setViewNestedComments({
      activeKey: comment.key,
      isExpanded:
        viewNestedComments.activeKey !== comment.key
          ? true
          : !viewNestedComments.isExpanded,
    })
  }

  const handleOnReply = () => {
    setViewNestedComments({
      activeKey: comment.key,
      isExpanded: !viewAddReplyBlock,
    })
    setViewAddReplyBlock(!viewAddReplyBlock)
  }

  return (
    <Fragment>
      <div className={classes.commentContainer}>
        {comment.body}
        <div className={classes.commentOptionsContainer}>
          <div
            onClick={handleOnReply}
            className={classNames(
              classes.expandButton,
              classes.addCommentButton
            )}
          >
            {viewAddReplyBlock ? 'Cancel Reply' : 'Reply'}
          </div>
          {!!comment?.children?.length && (
            <div
              className={classes.expandButton}
              onClick={handleViewNestedComments}
            >
              {!viewNestedComments.isExpanded ||
              viewNestedComments.activeKey !== comment.key
                ? 'View Replies'
                : 'Hide Replies'}
            </div>
          )}
        </div>
      </div>
      {viewAddReplyBlock && (
        <AddComment
          isReply
          handleAddComment={(commentBody) =>
            dispatch.comments.addReply(
              buildNewReply(
                commentBody,
                comment.key,
                comment?.rootCommentKey ?? comment.key
              )
            )
          }
        />
      )}
    </Fragment>
  )
}

export default Comment
