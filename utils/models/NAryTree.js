import Queue from "./Queue";

export class NAryTree {
  constructor(value) {
    this.key = value;
    this.children = new Queue();
  }

  static levelOrderTraversal = (root) => {
    if (root == null) return;

    const queue = new Queue();
    queue.enqueue(root);

    while (queue.length > 0) {
      const parent = queue.peek();
      queue.dequeue();
      console.log(parent.key + " ");
      const children = parent.children.getArray();
      for (const child of children) queue.enqueue(child.value);
    }
  };
}
