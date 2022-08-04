import { NodeInterface } from '@services/core/LinkedList/LinkedListInterface'
import { NAryTree } from '@services/core/NAryTree/NAryTree'
import Queue from '@services/core/Queue/Queue'
import { CommentType, UserType } from 'utils/types'

export class Comment extends NAryTree {
  body: string
  user: UserType
  parentCommentKey?: string | number
  rootCommentKey?: string | number

  constructor(comment: CommentType) {
    super(comment.key)
    this.body = comment.body
    this.user = comment.user
    this.parentCommentKey = comment.parentCommentKey
    this.rootCommentKey = comment.rootCommentKey
  }

  static findTree = (
    root: Comment | NodeInterface | null,
    key?: string | number
  ) => {
    if (root == null) return

    const queue = new Queue()
    queue.enqueue(root)

    while (queue.length > 0) {
      const parent: Comment = queue.peek()
      queue.dequeue()
      if (parent.key == key) return parent
      const children = parent.children?.getArray()
      for (const child of children) queue.enqueue(child.value)
    }
    return null
  }
}
