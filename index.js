'use strict';

const numbers = [1, 2, 21, 54, 84, 7];
const numbers2 = [1, 5, 7, 8];

const resNumbers = [...numbers, ...numbers2];//spread
console.log(resNumbers);

const sum = (...args) => {//rest
  let accumulator = null;
  args.forEach((currentArg) => {
    accumulator += currentArg;
  });
  return accumulator;
}

const sumReduse = (...rest) => {
  return rest.reduce((accumulator, value) => {
    return accumulator + value;
  });
}