const fact = function(num){
  let result = 1;
  while(num > 0){
    result *= num;
    num--;
  }
  return result;
}
