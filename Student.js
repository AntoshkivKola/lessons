'use strict'

class User {
  constructor(name, surName) {
    this.name = name;
    this.surName = surName;
  }
  getFullName() {
    return `${this.name} ${this.surName}`;
  }
}

class Student extends User {
  /**
   * 
   * @param {string} name 
   * @param {string} surName 
   * @param {number} year 
   */
  constructor(name, surName, year) {
    super(name, surName);
    this._year = year;
  }
  get year() {
    return this._year;
  }
  getCourse(currentDate) {
    if (typeof (currentDate) !== "number") {
      throw new TypeError('the argument must be a date');
    }
    if (currentDate > this.year + 4) {
      throw new RangeError('no longer a student');
    }
    if (currentDate < this.year) {
      throw new RangeError('not a student yet');
    }
    return currentDate - this.year + 1
  }
}

const s = new Student('Tets', 'Testovich', 2018);
console.log(s.getCourse(2000)) // RangeError('not a student yet');
console.log(s.getCourse(2030)) // RangeError('no longer a student');
console.log(s.getCourse(2020)) // 3