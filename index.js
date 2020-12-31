const user = {
  firstName: "Vasia",
  lastName: "Testovich",
  age: 15,
  isMale: true,
};

function sayHello(user) {
  if (user.age >= ADULT_AGE) {
    alert(`Hello ${user.firstName}`);
    return true;
  }
  alert(`Good Bay ${user.firstName}`);

  return false;
}

const PROTOCOL = 'http://';
const SERVER_IP = 'localhost';
const PORT = 5500;

function createQuery(path){
  return `${PROTOCOL}${SERVER_IP}:${PORT.toString()}${path}`;
}

console.log(createQuery("/index.html"));