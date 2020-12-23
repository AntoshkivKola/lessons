const sum = function (a, b) {
  return a + b;
}
const sub = function (a, b) {
  return a - b;
}
const mul = function (a, b) {
  return a * b;
}
const div = function (a, b) {
  return a / b;
}

/**  
 * функцыя кадькулятор
 * @returns {number | null}
*/
const calc = function () {
  const a = +prompt("Вв первое число");
  const b = +prompt("Вв второе число");
  const z = prompt("Вв знак");
  let f;
  switch (z) {
    case "+": {
      f = sum;
      break;
    } case "-": {
      f = sub;
      break;
    } case "*": {
      f = mul;
      break;
    } case "/": {
      f = div;
      break;
    }
  }
  if (typeof f === 'function') {
    return f(a, b);
  }
  return null;
}

// console.log(calc());

/** 
 *  функцыя опредиляет в какую декаду входит число
 * @param {number}
 * @returns {string}
*/
const decad = function (dayNumber) {
  if (dayNumber > 0 && dayNumber <= 10) {
    return "Число попадает в первую декаду";
  } else if (dayNumber > 10 && dayNumber <= 20) {
    return "Число попадает в вторую декаду";
  } else if (dayNumber > 20 && dayNumber <= 31) {
    return "Число попадает в третью декаду";
  } else {
    return "ERROR";
  }
}

console.log(decad(8));