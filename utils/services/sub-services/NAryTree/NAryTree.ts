import { NAryTreeInterface } from '@service/sub-services/NAryTree/NAryTreeInterface'
import Queue from '../Queue/Queue'

export class NAryTree implements NAryTreeInterface {
  key: string | number
  children: Queue

  constructor(value: any) {
    this.key = value
    this.children = new Queue()
  }

  static levelOrderTraversal = (root: NAryTree) => {
    if (root == null) return

    const queue = new Queue()
    queue.enqueue(root)

    while (queue.length > 0) {
      const parent = queue.peek()
      queue.dequeue()
      console.log(parent.key + ' ')
      const children = parent.children.getArray()
      for (const child of children) queue.enqueue(child.value)
    }
  }
}
