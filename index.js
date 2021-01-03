"use strict";
// Объект с логикой
function MyArrayProto() {
  this.push = function push() {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
      ++this.length;
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
}

// Объекты с данными
function MyArray() {
  this.length = 0;
}
// Создаём прототип(связь между объектами). Наследование
MyArray.prototype = new MyArrayProto();

const myArray = new MyArray();
myArray.push(1);
myArray.push(2);
myArray.push(3);
myArray.push(4);
myArray.unshift(7,8,9);
console.log(myArray);