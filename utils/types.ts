export type UserType = {
  id: string
  image: string
  name: string
}

export type CommentType = {
  key: string
  body: string
  user: UserType
  parentCommentKey?: string | number
  children?: CommentType[]
}

export type ExpandCommentType = {
  activeKey: string
  isExpanded: boolean
}
