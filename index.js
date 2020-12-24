const cat1 = {
  name: 'Pushok',
  color: "red",
  breed: "Persian",
  age: 5,
  isSlipeeng: true,
  isMale: true,
  run: function () {
    return "I AM RUNNING";
  },
  mau: function () {
    return "mai may..";
  },
  sleep: function () {
    return "Hrrrrr - phhh";
  },
};

const cat = {
  name: 'Vasok',
  color: "green",
  breed: "Indian",
  age: 3,
  isSlipeeng: true,
  isMale: true,
  run: function () {
    return "I AM going...";
  },
  mau: function () {
    return "MAU!";
  },
  sleep: function () {
    return "Z-z-z-z-z-..";
  }
};

function Cat(name, color, breed, age, isSlipeeng, isMale) {
  this.name = name;
  this.color = color;
  this.breed = breed;
  this.age = age;
  this.isSlipeeng = isSlipeeng;
  this.isMale = isMale;
  // Methods
  this.run = function () {
    return "I AM going...";
  };
  this.mau = function () {
    return "MAU!";
  };
  this.sleep = function () {
    return "Z-z-z-z-z-..";
  };
}


const cat3 = new Cat('Ivan', 'white', 'Dyren', 18, false, true);
let catsArray = [];
for (let i = 0; i < 3; i++) {

  catsArray[i] = new Cat("Bobby " + i,"black", "Nygerr", 1, false, true);
}

// task 1
function User(name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.fullName = name + " " + surname;
  this.age = age;
}

const uset1 = new User("Ivan", "Haha", "5");

// task 2
function Country(name, population, area) {
  this.name = name;
  this.population = population;
  this.area = area;
  /* Methods */
  this.getDensity = function(){
    return this.population / this.area;
  }
}
const country1 = new Country("Polsha", 15666, 125890);
console.log(country1.population);
console.log(country1.getDensity());
country1.population -= 5000;
console.log(country1.population);
console.log(country1.getDensity());

// task 3
function Car(name, maxSpeed){
  this.name = name;
  this.maxSpeed = maxSpeed;
  this.speed = 0;
  /* Methods */
  this.accelerate = function(boost){
    if( (this.speed + boost)<=this.maxSpeed) {
      return (this.speed += boost);
    }else{
      return false;
    }
  }
  this.deaccelerate = function(deboost){
    if((this.speed - deboost) > 0 ){
     return ( this.speed -= deboost);
    }else{
      return false;
    }
  }
  this.stop = function(){
    return (this.speed = 0);
  }
}

const car1 = new Car("BMW", 170);