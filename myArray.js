"use strict";
// Объект с логикой
function MyArrayProto() {
  this.push = function push() {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length++] = arguments[i];
    }
    return this.length;
  };

  this.pop = function () {
    if (this.length === 0) { return; }
    const lastItem = this[this.length - 1];
    delete this[--this.length];
    return lastItem;
  };

  this.unshift = function () {
    for (let i = (this.length + arguments.length - 1); i > 0; i--) {
      this[i] = this[i - (arguments.length)];
    }
    for (let i = 0; i < arguments.length; i++) {
      this[i] = arguments[i];
      ++this.length;
    }
    return this.length;
  };

  this.every = function every(func) {

    for (let i = 0; i < this.length; i++) {
      if (!func(this[i], i, this)) {
        return false;
      }
    }
    return true;
  }

  this.filter = function filter(func) {
    const newArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
      if (func(this[i], i, this)) {
        newArray.push(this[i]);
      }
    }
    return newArray;
  }
  this.flat = function flat(depth = 1) {
    let result = new MyArray();
    this.forEach((item) => {
      if (MyArray.isMyArray(item) && depth) {
        result = result.concat(item.flat(depth - 1));
      } else if (item !== undefined) {
        result.push(item);
      }
    });
    return result;
  }
}

// Объекты с данными
function MyArray() {
  this.length = 0;
  for (let i = 0; i < arguments.length; i++) {
    this.push(arguments[i]);
  }
}

MyArray.isMyArray = function isMayArray(obj) {
  return obj instanceof MyArray();
}
// Создаём прототип(связь между объектами). Наследование
MyArray.prototype = new MyArrayProto();

const myArray = new MyArray(1, 5, 3, 7);
const arr = new MyArray(0,0,0,0,0,undefined,new MyArray(1,1,1,undefined,new MyArray(2,2,new MyArray(3)),1),undefined,0);
//console.log(arr);
// myArray.push(1);
// myArray.push(2);
// myArray.push(3);
// myArray.push(4);
// myArray.unshift(7, 8, 9);
//console.log(myArray);
