function withLog(fn){
  return function(...arg){
    const result = fn(...arg);
    console.log(result);
    return result;
  }
}

