'use strict';
/*
// 1) Вывод чисел от 25 до 0 (порядок уменьшения)
for (let i = 25; i >= 0; i--) {
  console.log(i);
}
//1) while
let i = 25;
while (true) {
  console.log(i--);
  if (i < 0) {
    break;
  }
}
//1) do while
i = 25;
do {
  console.log(i--);
} while (i >= 0);

//2) Вывод чисел от 10 до 50, которые кратны 5
for (let i = 10; i <= 50; i += 5) {
  console.log(i);
}
//2)  while
i = 5;
while (i <= 45) {
  console.log(i += 5);
}
//2)  do while
i = 10;
do {
  if (i % 5 === 0) {
    console.log(i);
  }
  i++;
} while (i <= 50);

//3)  Найти сумму чисел в пределах от 1 до 100.
let res = 0;
for (let i = 1; i <= 100; i++) {
  res += i;
}
//3) while
res = 0;
i = 1;
while (i <= 100) {
  res += i++;
}
//3) do while
res = 0;
i = 1;
do {
  res += i++;
} while (i <= 100);

console.log(res);

// 4) предлагать пользователю решить пример userUnput до тех пор, пока он его не решит
let userUnput = Number(prompt(`Решите (2 + 2 * 2)`));
for (let i = 0; i < 1; i) {
  if (userUnput === (2 + 2 * 2)) {
    break;
  }
  userUnput = Number(prompt(`Решите (2 + 2 * 2)`));
}
//4) while
while (true) {
  if (userUnput === (2 + 2 * 2)) {
    break;
  }
  userUnput = Number(prompt(`Решите (2 + 2 * 2)`));
}
//4) do while
do {
  userUnput = Number(prompt(`Решите (2 + 2 * 2)`));
} while (userUnput !== (2 + 2 * 2));
*/