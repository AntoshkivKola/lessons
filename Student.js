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
   * @param {Date} year 
   */
  constructor(name, surName, year) {
    super(name, surName);
    this._year = year;
  }
  get year() {
    return this._year;
  }
  getCourse(currentDate) {
    const validDate =
      (currentDate.getFullYear() === this.year.getFullYear() + 5 && currentDate.getMonth() <= 5 && currentDate.getDate() <= 30) ||
      ((currentDate.getFullYear() < this.year.getFullYear() + 5) &&  (currentDate.getFullYear() > this.year.getFullYear())) ||
      (currentDate.getFullYear() === this.year.getFullYear() && currentDate.getMonth() <= this.year.getMonth() && currentDate.getDate() <= this.year.getDate());
    if (typeof (currentDate) !== 'object') {
      throw new TypeError('the argument must be a date');
    }
    if (!validDate) {
      throw new RangeError('Range EROR');
    }
    // if (currentDate > this.year + 4) {
    //   throw new RangeError('no longer a student');
    // }
    // if (currentDate < this.year) {
    //   throw new RangeError('not a student yet');
    // }
    if(currentDate.getFullYear() === this.year.getFullYear() + 5){
      return currentDate.getFullYear() - this.year.getFullYear();
    }
    return currentDate.getFullYear() - this.year.getFullYear() + 1;
  }
}

let currentDate = new Date(2021, 4, 15);
const s = new Student('Tets', 'Testovich', new Date(2018, 8, 1));
console.log(s.getCourse(currentDate)) // 4
console.log(s.getCourse(2020, 4,6)) // TypeError('the argument must be a date');
let currentDate2 = new Date(2028, 4, 15);
console.log(s.getCourse(currentDate2)) // RangeError('Range EROR');