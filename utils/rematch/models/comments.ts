import { GET_COMMENTS } from '@localization'
import { createModel } from '@rematch/core'
import { Comments } from '@services/Comments/Comments'
import Queue from '@services/core/Queue/Queue'
import { convertDataToTrees } from 'utils/helpers'
import { CommentType } from 'utils/types'
import type { RootModel } from '.'

export const comments = createModel<RootModel>()({
  state: new Queue() as Comments,
  reducers: {
    setComments: (state, payload: Comments) => payload,
  },
  effects: {
    async loadComments(): Promise<any> {
      const response = await fetch(GET_COMMENTS)
      const { comments }: { comments: CommentType[] } = await response.json()
      this.setComments(convertDataToTrees(comments))
    },
  },
})
