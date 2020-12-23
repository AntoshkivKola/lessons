const userInput1 = prompt("Введите число 1:");
const userInput2 = prompt("Введите число 2:");

const maxOfTwo = function(a, b){
  const num1 = +a;
  const num2 = +b;
  if(!isNaN(num1) && !isNaN(num2) ){
    if(num1 > num2){
      return num1;
    }else{
      return num2;
    }
  }else{
    alert("Вы ввели не числа!");
  }
}

const minOfTwo = function(a, b){
  const num1 = +a;
  const num2 = +b;
  if(!isNaN(num1) && !isNaN(num2) ){
  
    if(num1 < num2){
      return num1;
    }else{
      return num2;
    }
  }else{
    alert("Вы ввели не числа!");
  }
}

const parity = function(a){
  const num1 = +a;
  if(!isNaN(num1)){
    if( (num1%2) === 0){
      return true;
    }else{
      return false;
    }
  }
}



let a = prompt("Введите числа  квадратного уравнения: a");
let b = prompt("Введите числа  квадратного уравнения: b");
let c = prompt("Введите числа  квадратного уравнения: c");
const getExpresion = function(numA, numB, numC){
  a = +numA;
  b = +numB;
  c = +numC;
  
  if(!isNaN(a) && !isNaN(b) && !isNaN(c) ){
    const D = (b**2)-(4*a*c);
    
    if(D > 0){
      const x1 = ( -b + D**0.5 ) / (2*a);
      const x2 = ( -b - D**0.5 ) / (2*a);
    
    const result = [x1,x2];
    
    
    return result;
    }
  }else{
    console.log("error");
  }
}

console.log("max: ",maxOfTwo(userInput1, userInput2));
console.log("min: ",minOfTwo(userInput1, userInput2));
console.log(parity(userInput1));


let res = getExpresion(a, b, c);
console.log("x1: ",res[0],"x2:", res[1]);
