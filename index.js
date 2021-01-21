'use strict';

// Деструктуризация - особый способ создания переменных

const monitor = {
  sizes: {
    height: {
      value: 20,
      scale: 'cm',
    },
    width: {
      value: 56.5,
      dol: {
        value: 56.5,
        la: {
          value: 56.5,
          ru: 'dolaru',
        },
      },

    },
  },
  model: {
    company: "Samsung",
    type: 'S24SD300M1'
  },
  brightness: 200,
  contrast: 100,
  color: 'black',
  dpi: 250,
  resolution: '4K',
};

console.log(monitor.sizes.height.value);

function getDiagonal(monitor) {
  monitor.sizes.height.value;
  monitor.sizes.width.value;
}

// const monitorBright = monitor.brightness;
//const { value: monitorH } = monitor.sizes.height;

const {
  sizes: {
    width: { value: w,
      dol: {
        la: { ru: dollaru }
      }
    },
    height: { value: h },
  },
  model: { type },
} = monitor;
const {color, ...restOfMonitor} = monitor;
//=========================== деструктуризацыя массива============================
const nums = [1,2,3,4,5,6,7,8];
const [firstNumber, , thirdNumber, ...restOfNums] = nums;

//=========================== деструктуризацыя вчхлдних параметров==========
function getFullName({firstName, lastName}){
  return `${firstName}${lastName}`;
};
//getFullName({firstName:'ted', lastName:'X'}) tedX

function getMI({color, dpi}){
  return `${color}, ${dpi}`;
}; 