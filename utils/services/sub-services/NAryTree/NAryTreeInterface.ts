import Queue from '@service/sub-services/Queue/Queue'

export interface NAryTreeInterface {
  key: number | string
  children: Queue
}
