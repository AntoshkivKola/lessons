function quickSort(...args) {
  if (args.length < 2) {
    return args;
  }
  if (args.length === 2) {
    if (args[0] < args[1]) {
      let x = args[0];
      args[0] = args[1];
      args[1] = x;
      return args;
    }
    return args;
  }
  const base = args[Math.round(args.length / 2)];
  const gretter = [];
  args.forEach((elem) => {
    if (elem > base) {
      gretter.push(elem);
    }
  });

  const less = [];
  args.forEach((elem) => {
    if (elem < base) {
      less.push(elem);
    }
  });
  return [...quickSort(...gretter), base, ...quickSort(...less)];
}
