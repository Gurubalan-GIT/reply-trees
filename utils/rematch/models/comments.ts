import { GET_COMMENTS } from '@localization'
import { createModel } from '@rematch/core'
import { Comment } from '@services/Comment/Comment'
import { Comments } from '@services/Comments/Comments'
import { convertDataToTrees } from 'utils/helpers'
import { CommentType } from 'utils/types'
import type { RootModel } from '.'

export const comments = createModel<RootModel>()({
  state: new Comments() as Comments,
  reducers: {
    setComments: (_state: Comments, payload: Comments) => payload,
    addComment: (state: Comments, payload: Comment) => {
      const updatedState: Comments = Object.assign(Object.create(state), state)
      updatedState.enqueue(payload)
      return updatedState
    },
  },
  effects: {
    async loadComments(): Promise<any> {
      const response = await fetch(GET_COMMENTS)
      const { comments }: { comments: CommentType[] } = await response.json()
      this.setComments(convertDataToTrees(comments))
    },
  },
})
