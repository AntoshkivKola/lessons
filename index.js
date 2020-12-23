/* функцыя кадькулятор

*/


const calc = function(){
  const a = +prompt("Вв первое число");
  const b = +prompt("Вв второе число");
  const z = prompt("Вв знак");

  switch(z){
    case "+":{
      return a + b;
    }case "-":{
      return a - b;
    }case "*":{
      return a * b;
    }case "/":{
      return a / b;
    }
  }
}

console.log(calc());