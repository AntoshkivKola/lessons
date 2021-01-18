
const ugaday = () => {
  let step = 0;
  let start = 1;
  let end = 100;
  let middle = Math.round((start + end) / 2);

  while (true) {
    ++step;
    if (confirm(`Your number = ${middle}`)) {
      alert(`Your number is: ${middle} I do id for ${step} step's`);
      return;
    }
    if (confirm(`Your number > ${middle}`)) {
      start = middle;
      middle = Math.floor((start + end) / 2);
    } else {
      end = middle;
      middle = Math.ceil((start + end) / 2);
    }
  }
}

ugaday()