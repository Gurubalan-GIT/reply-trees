import { user } from '@constants'
import { Comment } from '@services/Comment/Comment'
import { Comments } from '@services/Comments/Comments'
import { v4 as uuidV4 } from 'uuid'
import { CommentType } from './types'

const buildCommentTrees = (
  root: Comment,
  comments: CommentType[],
  rootCommentKey: string | number
) => {
  for (const comment of comments) {
    const commentTree = new Comment({
      ...comment,
      parentCommentKey: root.key,
      rootCommentKey,
    })
    root.children.enqueue(commentTree)
    if (!!comment?.children?.length)
      // Recursively traverse through the queue and enqueue comment trees
      buildCommentTrees(commentTree, comment.children, rootCommentKey)
  }
}

export const convertDataToTrees = (comments: CommentType[]) => {
  const rootCommentsQueue = new Comments()

  for (const comment of comments) {
    const commentTree = new Comment(comment)
    rootCommentsQueue.enqueue(commentTree)
    if (!!comment?.children?.length)
      // We can't call the current function again as tree's children would be the Queue's instance.
      buildCommentTrees(commentTree, comment.children, commentTree.key)
  }
  return rootCommentsQueue
}

export const buildNewComment = (commentBody: string) => {
  return new Comment({
    key: uuidV4(),
    body: commentBody,
    user,
  })
}

export const buildNewReply = (
  commentBody: string,
  parentCommentKey: string | number,
  rootCommentKey?: string | number
) => {
  return new Comment({
    key: uuidV4(),
    body: commentBody,
    user,
    parentCommentKey,
    rootCommentKey,
  })
}
