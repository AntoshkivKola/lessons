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

const checkOfSequence = (symbol, index, arr) => {
  const open = ['(', '{', '[', '<', '0'];
  const close = [')', '}', ']', '>', '1'];
  const res = close[open.indexOf(symbol)];

  for (let i = index; i < arr.length; i++) {
    if (open.includes(arr[i])) {
      i = checkOfSequence(arr[i], i + 1, arr);
      if (i === false) {
        return false;
      }
      if (open.includes(arr[i])) {
        i = checkOfSequence(arr[i], i + 1, arr);
        if (i === false) {
          return false;
        }
      }
    }

    if (arr[i] === res) {
      return i + 1;
    }

    if (close.includes(arr[i])) {
      return false;
    }

  }
  return false;
}

const checkSequence = (str) => {
  const arr = str.split('');
  let id = checkOfSequence(arr[0], 1, arr);
  if (id < arr.length) {
    if (checkOfSequence(arr[id], id + 1, arr) !== arr.length) {
      return false
    }
  }
  return true;
};
