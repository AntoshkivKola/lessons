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
  constructor(name, surName, year) {
    super(name, surName);
    this.year = year;
  }
  getCourse(currentYear) {
    const YEAR_OF_GRADUATION = this.year + 4;
    if (typeof (currentYear) !== 'number') {
      throw new TypeError('the argument must be a number');
    }
    if (currentYear > YEAR_OF_GRADUATION || currentYear < this.year) {
      throw new RangeError('argument must be equal to the year of admission or no more than 5');
    }
    return currentYear - this.year + 1
  }
}

const s = new Student('Tets', 'Testovich', 2018);