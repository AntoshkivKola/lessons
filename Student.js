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
   * @param {Date} date 
   */
  constructor(name, surName, date) {
    super(name, surName);
    if(date.getFullYear() > new Date().getFullYear()){
      throw new RangeError('Not a student!');
    }
    this._date = date;
  }
  get date() {
    return this._date;
  }
  getCourse() {
    const currentDate = new Date();
    const validDate = (currentDate.getFullYear() <= this.date.getFullYear() + 5) &&  (currentDate.getFullYear() >= this.date.getFullYear());
    
    if (!validDate) {
      throw new RangeError('Not a student!');
    }
   
    if(currentDate.getFullYear() === this.date.getFullYear() + 5){
      return currentDate.getFullYear() - this.date.getFullYear();
    }
    return currentDate.getFullYear() - this.date.getFullYear() + 1;
  }
}

const s = new Student('Tets', 'Testovich', new Date(2018, 8, 1));
console.log(s.getCourse()); // 4
const s1 = new Student('1','1', new Date(2021,0,1));
console.log(s1.getCourse()) // 1
