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
    return false;
  }
  return Math.ceil(n/3);
}
console.log(cvartal(12));