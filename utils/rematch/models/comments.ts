import { GET_COMMENTS } from '@localization'
import { createModel } from '@rematch/core'
import type { RootModel } from '.'

export const comments = createModel<RootModel>()({
  state: [] as any[],
  reducers: {
    setComments: (state: any[], payload: any[]) => [...state, ...payload],
  },
  effects: {
    async loadComments(): Promise<any> {
      const response = await fetch(GET_COMMENTS)
      const { comments }: { comments: any[] } = await response.json()
      this.setComments(comments)
    },
  },
})
