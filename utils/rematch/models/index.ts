import { Models } from '@rematch/core'
import { comments } from './comments'

export interface RootModel extends Models<RootModel> {
  comments: typeof comments
}

export const models: RootModel = { comments }
