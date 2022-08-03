import { NAryTree } from '@services/core/NAryTree/NAryTree'
import { CommentType, UserType } from 'utils/types'

export class Comment extends NAryTree {
  body: string
  user: UserType
  parentCommentKey?: string | number

  constructor(comment: CommentType) {
    super(comment.key)
    this.body = comment.body
    this.user = comment.user
    this.parentCommentKey = comment.parentCommentKey
  }
}
