function createFamily() {
  const countOfRelatives = +prompt('Введите кол-во вашых родствиников');
  if (isNaN(countOfRelatives)) {
    return false;
  }
  const family = {}
  let name = '';
  let info = '';
  for (let i = 0; i < countOfRelatives; i++) {
    name = prompt(`Введите имя ${i+1} родствиника: `);
    info = prompt(`Введите информацыю про ${i+1} родствиника: `);
    family[name] = info;
  }
  return family;
}
console.log(createFamily());