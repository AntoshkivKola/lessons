'use strict';

class Figure {
  constructor(name) {
    this.name = name;
  }
  getArea() { }
}

class Circle extends Figure {
  constructor(radius) {
    super("Circle");
    this._radius = radius;
  }
  getArea() {
    return  Math.PI * this._radius * this._radius;
  }
}

function getFigureArea(figure){
  if(figure instanceof Figure){
    return figure.getArea();
  }
  throw new TypeError();
}

const c = new Circle(5);