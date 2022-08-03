import RootLayout from '@layouts/RootLayout'
import { Dispatch, RootState } from '@rematch/store'
import { Comments as CommentsType } from '@services/Comments/Comments'
import classes from '@styles/home.module.scss'
import AddComment from 'modules/AddComment'
import Comments from 'modules/comments'
import type { NextPage } from 'next'
import { useDispatch, useSelector } from 'react-redux'
import { buildNewComment } from 'utils/helpers'

const Home: NextPage = () => {
  const commentsQueue: CommentsType = useSelector(
    (state: RootState) => state.comments
  )

  const dispatch = useDispatch<Dispatch>()

  const handleAddComment = (commentBody: string) => {
    dispatch.comments.addComment(buildNewComment(commentBody))
  }

  return (
    <RootLayout className={classes.rootContainer}>
      <div className={classes.commentsContainer}>
        {!!commentsQueue?.length && <Comments commentsQueue={commentsQueue} />}
        <AddComment handleAddComment={handleAddComment} />
      </div>
    </RootLayout>
  )
}

export default Home
