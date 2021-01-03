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
}

// Объекты с данными
function MyArray() {
  this.length = 0;
  for (let i = 0; i < arguments.length; i++) {
    this.push(arguments[i]);
  }
}
// Создаём прототип(связь между объектами). Наследование
MyArray.prototype = new MyArrayProto();

const myArray = new MyArray(1, 5, 3, 7);
const arr = new Array(1, 5, 3, 7);

// myArray.push(1);
// myArray.push(2);
// myArray.push(3);
// myArray.push(4);
// myArray.unshift(7, 8, 9);

function AccumulatorPrototype() {
  this.checkNumber = function (number) {
    return (isNaN(number)) || (number < 0);
  }
  this.read = function () {
    const userNumber = Number(prompt("Enter a number"));
    if (this.checkNumber(userNumber)) {
      return;
    }
    this.value += userNumber;
    return this.value;
  }
 
}

function Accumulator(startingValue) {
  if(!this.checkNumber(startingValue)){
    this.value = startingValue;
  }
}

Accumulator.prototype = new AccumulatorPrototype();
const acc = new Accumulator(1);