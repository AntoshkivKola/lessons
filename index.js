function createMultiplicationtable() {
  const table = {};

  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      table[`${i} * ${j} = `] = i * j;
    }
  }

  return table;
}
console.log(createMultiplicationtable());

function cvartal(n) {
  if (n > 12) {
    return false
  }
  if (n <= 3) {
    return 1;
  } else if (n >= 4 && n <= 6) {
    return 2;
  } else if (n >= 7 && n <= 9) {
    return 3;
  }
  return 4
}
console.log(cvartal(12));