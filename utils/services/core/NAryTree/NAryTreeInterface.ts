import Queue from '@services/core/Queue/Queue'

export interface NAryTreeInterface {
  key: number | string
  children: Queue
}
