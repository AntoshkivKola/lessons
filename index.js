class Stack {
  constructor(maxSize = 10, ...array) {
    this._maxSize = maxSize;
    this._size = 0;

    for (const item of array) {
      this.push(item);
    }
  }

  get isEmpty() {
    return this._size === 0;
  }

  get size() {
    return this._size;
  }

  push(value) {
    if (this.size >= this._maxSize) {
      throw new RangeError('Stack overflow');
    }
    this[`_${this.size}`] = value;
    this._size++;
    return this.size;
  }

  pop() {
    if (this.size <= 0) {
      return;
    }
    const lastItem = this[`_${this.size - 1}`];
    delete this[`_${this.size - 1}`];
    this._size--;
    return lastItem;
  }

  pick() {
    return this[`_${this.size - 1}`];
  }
}

const newStack = new Stack(5, 12, 13, 14, 15);


const checkSequence = (str) => {
  const openStack = new Stack();
  const closeStack = new Stack();
  const open = ['(', '{', '[', '<', '0'];
  const close = [')', '}', ']', '>', '1'];
  
 
  for (symbol of str) {
    if (open.includes(symbol)) {

      openStack.push(symbol);
      closeStack.push(close[open.indexOf(symbol)]);
    }
    if (openStack.isEmpty) {
      return false;
    }
    if (close.includes(symbol)) {
      if(closeStack.pick() !== symbol){
        return false;
      }
      openStack.pop();
      closeStack.pop();
    }

  }

  return openStack.isEmpty;
};
