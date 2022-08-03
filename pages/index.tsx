import RootLayout from '@layouts/RootLayout'
import { RootState } from '@rematch/store'
import { Comments as CommentsType } from '@services/Comments/Comments'
import classes from '@styles/home.module.scss'
import Comments from 'modules/comments'
import type { NextPage } from 'next'
import { useSelector } from 'react-redux'

const Home: NextPage = () => {
  const commentsQueue: CommentsType = useSelector(
    (state: RootState) => state.comments
  )

  return (
    <RootLayout className={classes.rootContainer}>
      <div className={classes.commentsContainer}>
        {!!commentsQueue?.length && <Comments commentsQueue={commentsQueue} />}
      </div>
    </RootLayout>
  )
}

export default Home
