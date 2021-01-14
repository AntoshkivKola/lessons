'use strict';

class User {
  constructor(name, surName, age) {
    this.name = name;
    this.surName = surName;
    this.age = age;
  }

  set fullName(newFullName) {
    if (typeof newFullName != "string") {
      throw new TypeError();
    }
    const nameArray = newFullName.split(" ");
    if(nameArray.length !== 2){
      throw new RangeError();
    }
    this._name = newFullName[0];
    this._surName = newFullName[1];
  }

  get fullName() {
    return `${this.name} ${this.surName}`;
  }

  get isAdullt() {
    return this.age >= ADULT_AGE;
  }

  static isUser(obj){
    return obj instanceof User;
  }
}

const user = new User('Test', "Testovich", 19);

class Worker {
  constructor(name, surName, rate = Min_ZP, days = 0) {
    this.name = name;
    this.surName = surName;
    this.rate = rate;
    this.days = days;
  }

  set rate(newRate) {
    if (typeof newRate !== 'number') {
      throw new TypeError('');
    }
    if (newRate < 0) {
      throw new RangeError()
    }
    this._rate = newRate
  }

  get rate() {
    return this._rate;
  }

  set days(newDays) {
    if (typeof newDays !== 'number') {
      throw new TypeError('');
    }
    if (newDays < 0 || newDays > 31) {
      throw new RangeError()
    }
    this._days = newDays;
  }

  get days() {
    return this._days;
  }


  montsMoney() {
    if (this.days < 31) {
      return this._rate * this.days;
    }
    return this.moneyOneDay * 31;
  }
}
const worker = new Worker('Test', "Testovich", 19, 5);

class Fuel {
  constructor(volume, density) {
    this.volume = volume;
    this.density = density;
  }

  get fuelWeight() {
    return this.volume * this.density;
  }
}

class Auto {
  constructor(ownWeight, fuel, passengers) {
    this.ownWeight = ownWeight;
    this.fuel = fuel;
    this.passengers = passengers;
  }
  get weightPassengers() {
    let res = 0;
    this.passengers.forEach(elem => res += elem);
    return res;
  }
  get fullWeight() {
    return this.fuel.fuelWeight + this.ownWeight + this.weightPassengers;
  }

}

class Friend {
  constructor(name, appleAmount, friends) {
    this.name = name;
    this.appleAmount = appleAmount;
    this.friends = friends;
  }
  getAllApple() {

    return this.appleAmount + this.friends.appleAmount;

  }
}

const f95 = new Fuel(5, 1.25);
const bmw = new Auto(2305, f95, [70, 50, 30]);
console.log(bmw);
console.log(bmw.fullWeight);
const ivan = new Friend("Ivan", 15, null);
const f1 = new Friend("f1", 14, null);
const f2 = new Friend("f2", 7, [f1, ivan]);
const me = new Friend("I", 4, [f1, f2, ivan]);
/* зробити шоб робило getAllApple() з масивом! */
