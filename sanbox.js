'use strict';
let d = 0;
const p = fetch('./constants.js')
  .then((response) => response.text())
  .then((data) => { d = data; console.log(data) })
  .catch((err)=>{
    console.log('common error!!');
  });
