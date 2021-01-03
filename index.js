"use strict";
// Объект с логикой
function MyArrayProto() {
  this.push = function push(item) {
    this[this.length] = item;
    return ++this.length;
  };
  
  this.pop = function () {
    if (this.length === 0) { return; }
    const lastItem = this[this.length - 1];
    delete this[--this.length];
    return lastItem;
  };

  this.unshift = function (item) {
    for(let i = this.length; i > 0; i--){
      this[i] = this[i-1];
    }
    this[0] = item;
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
myArray.push(1);
myArray.push(2);
myArray.push(3);
myArray.push(4);
myArray.unshift(8);
console.log(myArray);