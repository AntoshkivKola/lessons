'use strict';

class User{
  constructor(name, surName, age, isBanned = false){
    this.name = name;
    this.surName = surName;
    this.age = age;
    this.isBanned = isBanned;
  }

  getFullName(){
    return `${this.name} ${this.surName}`;
  }
}

class Admin extends User{
  constructor(name, surName, age){
    super(name, surName, age, false)
  }
  ban(user){
    user.isBanned = !user.isBanned;
  }
  
}

const u = new User('Leopold', 'Vladimirovich', 45);
const admin = new Admin('Admin', 'Adminovich',15);