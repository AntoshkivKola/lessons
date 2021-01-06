'use strict';

const logRange = (min, max) => {
  if(min > max){
    return false;
  }
  console.log(min);
  if (min < max) {
    logRange(min + 1, max)
  }
  return true;
}