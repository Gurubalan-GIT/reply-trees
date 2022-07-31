import LinkedList from "./SLL";

export default class Queue extends LinkedList {
  constructor() {
    super();
    this.length = 0;
  }

  isEmpty() {
    return !this.head;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.head.value;
  }

  enqueue(value) {
    this.append(value);
    this.length++;
  }

  dequeue() {
    this.deleteHead();
    this.length--;
  }
}
