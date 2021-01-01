"use strict";

function getMonthDecade(dayNumber){
  if(isNaN(dayNumber) || dayNumber >= 32){
    return false;
  }
  if(dayNumber === 31){
    return 3;
  }
  return Math.ceil(dayNumber / 10);
}
