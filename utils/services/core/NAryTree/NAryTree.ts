import { NAryTreeInterface } from '@services/core/NAryTree/NAryTreeInterface'
import Queue from '../Queue/Queue'

export class NAryTree implements NAryTreeInterface {
  key: string | number
  children: Queue

  constructor(value: any) {
    this.key = value
    this.children = new Queue()
  }
}
