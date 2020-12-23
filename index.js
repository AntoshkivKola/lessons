/**
 * function dactorial of number
 * 
 * @param {number} - num
 * @returns {number| null}
  */

const fact = function (num) {
  if (num > 0) {
    let result = 1;
    while (num > 0) {
      result *= num;
      num--;
    }
    return result;
  } else if(num === 0){
    return 1;
  }
  return null;
}

/**
 * function powwer of number
 * 
 * @param {number} - a
 * @param {number} - n   
 * @returns {number| null}
  */
const powwer = function (a, n) {
  let res = 1;
  if (n > 0) {
      for (let i = 0; i < n; i++) {
        res *= a;
      }
    return res;
  }else if(n === 0){
    return 1;
  }else if(n < 0){
    for (let i = 0; i < -n; i++) {
      res *= a;
    }
    return 1/res;
  }
  return null;
}
