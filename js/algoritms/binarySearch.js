'use strict';

const binarySearch = (arr, x) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.round((start + end) / 2);
  let step = 0;
  while (true) {
    ++step;
    if (x === arr[middle]) {
      return step;
    }
    if (x < arr[middle]) {
      end = middle;
      middle = Math.floor((start + end) / 2);
    }
    if (x > arr[middle]) {
      start = middle;
      middle = Math.ceil((start + end) / 2);
    }
    if(start === end){
      return false;
    }
  }
}

const mas = [1, 2, 5, 8, 9, 11, 25, 36, 45];
