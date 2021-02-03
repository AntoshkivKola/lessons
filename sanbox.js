'use strict';
/*
function logIntervalNumber() {
  console.time('1');
  let i = 1;
  const intervalId = setInterval(() => {
   
    if (i >= 20) {
      clearInterval(intervalId);
      console.timeEnd('1');
    }
    console.log(i++);
    return i;

  }, 100);
};

function d2(i = 1) {
  console.time('2');
  if (i > 20) {
    console.timeEnd('2');
    return;

  }
  setTimeout(() => {
    console.log(i);
    d2(++i);

  }, 100);

}

*/


const car = {
  maarck: 'lanus',
  color: 'red',
  probeg: 1658,
  start(){
    console.log('Wrrrmmmm!');
  },
  wheels: [1,1,null,1],
  windshield: undefined,
  stop(){
    console.log('Trrr...');
  }
}

const serializedObject = JSON.stringify(car); // сериализация
console.log(serializedObject);
const resializedObject = JSON.parse(serializedObject); // десериализация
