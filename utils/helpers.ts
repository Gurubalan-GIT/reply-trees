import { Comment } from '@services/Comment/Comment'
import { Comments } from '@services/Comments/Comments'
import { CommentType } from './types'

const buildCommentTrees = (root: Comment, comments: CommentType[]) => {
  for (const comment of comments) {
    const commentTree = new Comment(comment)
    root.children.enqueue(commentTree)
    if (!!comment?.children?.length)
      // Recursively traverse through the queue and enqueue comment trees
      buildCommentTrees(commentTree, comment.children)
  }
}

export const convertDataToTrees = (comments: CommentType[]) => {
  const rootCommentsQueue = new Comments()

  for (const comment of comments) {
    const commentTree = new Comment(comment)
    rootCommentsQueue.enqueue(commentTree)
    if (!!comment?.children?.length)
      // We can't call the current function again as tree's children would be the Queue's instance.
      buildCommentTrees(commentTree, comment.children)
  }
  return rootCommentsQueue
}
