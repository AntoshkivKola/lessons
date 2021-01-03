"use strict";
// Объект с логикой
function MyArrayProto() {
  this.push = function push(item) {
    this[this.length] = item;
    return ++this.length;
  };
}

// Объекты с данными
function MyArray() {
  this.length = 0;
}
// Создаём прототип(связь между объектами). Наследование
MyArray.prototype = new MyArrayProto();

const myArray = new MyArray();
