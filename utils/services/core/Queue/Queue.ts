import { QueueInterface } from '@services/core/Queue/QueueInterface'
import LinkedList from '../LinkedList/LinkedList'

export default class Queue extends LinkedList implements QueueInterface {
  length: number

  constructor() {
    super()
    this.length = 0
  }

  isEmpty() {
    return !this.head
  }

  peek() {
    if (this.isEmpty()) {
      return null
    }

    return this.head?.value
  }

  enqueue(value: any) {
    this.append(value)
    this.length++
  }

  dequeue() {
    this.deleteHead()
    this.length--
  }
}
