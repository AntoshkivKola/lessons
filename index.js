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
      scale: 'cm',
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

const { value: monitorH } = monitor.sizes.height;
const {
  sizes: {
    width: { value: w },
    height: { value: h },
  },
  model: { type },
} = monitor;
