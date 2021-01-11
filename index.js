'use strict';

const fact = (num) => {
  if (num < 0) {
    return false;
  }
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * fact(num - 1);
}

const powwer = (num, exp) => {
  let pos = true;
  if (exp < 0) {
    exp = -exp;
    pos = false;
  }

  if (exp === 1) {
    return num;
  }
  if (exp === 0) {
    return 1;
  }
  debugger;
  const res = num * powwer(num, exp - 1);

  if (pos) {
    return res
  }
  return 1 / res;

}

const par = (num) => {
  if(num === 1){
    return '()'
  }
  return `(${par(num - 1 )})`;
};
console.log(par(5));