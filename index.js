function Student(firstName, lastName, age, isMale){
  this.firstName = firstName;
  this.lastName - lastName;
  this.age = age;
  this.isMale = isMale;
}

function StudentPrototype(){
  this.toString = function toString(){
    return `${this.firstName} ${this.lastName}`;
  }
  this.sayHello = function sayHello(){
    return `${this.firstName} ${this.lastName} says "Hello!"`;
  }
  this.say = function say(message){
    return `Student ${this.firstName} say:\n${message}`;
  }
}

Student.prototype = new StudentPrototype();

const stud1 = new Student('Vlad', 'Test', 3, true);