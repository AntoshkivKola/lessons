class Queue {
  constructor(...args) {
    this._head = 0;
    this._tail = 0;
    args.forEach((elem) => {
      this.push(elem);
    });
  }

  get size() {
    return this._tail - this._head;
  }

  push(value) {
    this[this._tail] = value;
    this._tail++;
    return this.size;
  }

  pop() {
    if (this.size) {
      const lastItem = this[this._head];
      delete this[this._head++];
      return lastItem;
    }
  }

  mergeQueue(q1, q2) {
    const q = new Queue();
    while(q1.size) {
      q.push(q1.pop())
    }
    while(q2.size) {
      q.push(q2.pop())
    }
    return q;
  }
}
const q = new Queue();
const q1 = new Queue(1, 2, 3);
const q2 = new Queue(1, 8, 4);
const q3 = q.mergeQueue(q1, q2);