'use strict';


function getMoreStr(str1, str2) {
  const result = [];


  let matrix = new Array(str1.length).fill(0);
  let max = {
    maxSize : 0,
    index:0,
  };

  for (let i = 0; i < str1.length; i++) {
    matrix[i] = [];
    for (let j = 0; j < str2.length; j++) {
      matrix[i][j] = 0;
      if (str1[i] === str2[j]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;
      }
      if (matrix[i][j] > max.maxSize) {
        max.maxSize = matrix[i][j];
        max.index = i;
      }

    }
  }
  for (let i = 0; i < max.maxSize; i++) {
    result.push(str1[max.index--]);
  }

  return result.reverse().join('');
}