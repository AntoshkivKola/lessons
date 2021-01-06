function getFullName() {
  return `${this.firstName} ${this.lastName}`;
}

function User(firts, last, age, email, isMale, isSubscibed = false) {
  this.firstName = firts;
  this.lastName = last;
  this.age = age;
  this.email = email;
  this.isMale = isMale;
  this.isSubscibed = isSubscibed;

  this.getFullName = getFullName;
}

function createRandomUsers(amount = 1) {
  const db = [];
  for (let i = 0; i < amount; i++) {
    const user = new User(
      `Name${i}`,
      `Surname${i}`,
      Math.ceil(Math.random() * 100),
      `email${i}@mail.com`,
      Math.random() > 0.5,
      Math.random() > 0.5
    );
    db.push(user);
  }
  return db;
}

const users = createRandomUsers(25)
console.table(users);
console.log(users[0].getFullName());
console.log(users.map(function (user) {
  return user.getFullName();
}));


console.log(users.filter(function (user) {
  return user.age >= ADULT_AGE;
}));
//1.2task
const adultWoman = users.filter(function (user) {
  return user.age >= ADULT_AGE && user.isSubscibed && !user.isMale;
}).map(function (user) {
  return user.email;
});
console.table(adultWoman);
