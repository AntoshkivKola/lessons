const getSmaller = (...args) => {
  let [smaller] = args;
  let id = 0;
  args.forEach((elem, index)=>{
    if(elem < smaller){
      smaller = elem;
      id = index;
    }
  });
 
  return id;
};

const selectionSort = (arr) =>{
  const newArr = [];
  const l = arr.length;
  for(let i = 0; i < l; i++){
    let smalletId = getSmaller(...arr);
    let x = arr[0];
    arr[0]=arr[smalletId];
    arr[smalletId] = x;
    newArr.push(arr[0]);
    arr.shift();
  }
  return newArr;
}

