export default class SLL {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  static getNewNode(value) {
    return { value, next: null };
  }

  append(value) {
    const newNode = SLL.getNewNode(value);
    if (this.tail) this.tail.next = newNode;
    this.tail = newNode;
    if (!this.head) this.head = newNode;
  }

  prepend(value) {
    const newNode = SLL.getNewNode(value);
    newNode.next = this.head;
    this.head = newNode;
    if (!this.tail) this.tail = newNode;
  }

  getArray() {
    const elements = [];
    let currentNode = this.head;
    while (currentNode) {
      elements.push(currentNode);
      currentNode = currentNode.next;
    }
    return elements;
  }

  find(value) {
    if (!this.head) return null;
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value.key === value) return currentNode;
      currentNode = currentNode.next;
    }
    return null;
  }

  insertAfter(value, afterValue) {
    const existingNode = this.find(afterValue);
    if (existingNode) {
      const newNode = SLL.getNewNode(value);
      newNode.next = existingNode.next;
      existingNode.next = newNode;
    }
  }

  deleteAll(value) {
    if (!this.head) return;
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }
    if (this.head.value === value) {
      this.head = this.head.next || null;
    }
    if (this.tail.value === value) {
      this.tail = currentNode;
    }
  }

  deleteHead() {
    if (!this.head) return null;
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }
  }
}
