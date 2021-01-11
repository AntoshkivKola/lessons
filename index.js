'use strict';

function countVowels(str) {
  let counter = null;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  const strArr = str.toLowerCase().split('');

  strArr.forEach((letter) => {
     vowels.forEach((vL)=>{
       if(vL === letter){
         counter++;
       }
     })
  });

  return counter;
};
console.log(countVowels("letter spasing")) // 4