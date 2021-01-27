'use strict';
/*
/// 1 step
const graph = new Map()
graph.set('start', new Map());
graph.get('start').set('a', 6);
graph.get('start').set('b', 2);

graph.set('a', new Map());
graph.get('a').set('fin', 1);

graph.set('b', new Map());
graph.get('b').set('fin', 5);
graph.get('b').set('a', 3);

graph.set('fin', new Map());

/// 2 step
const costs = new Map();
costs.set('a', 6);
costs.set('b', 2);
costs.set('fin', Infinity);

/// 3 step
const parents = new Map();
parents.set('a', 'start');
parents.set('b', 'start');
parents.set('fin', undefined);
*/


/// 1 step
const graph = new Map()
graph.set('start', new Map());
graph.get('start').set('a', 1);
graph.get('start').set('b', 2);
graph.get('start').set('c', 3);

graph.set('a', new Map());
graph.get('a').set('d', 5);

graph.set('b', new Map());
graph.get('b').set('c', 0);
graph.get('b').set('d', 4);

graph.set('c', new Map());
graph.get('c').set('fin', 8);

graph.set('d', new Map());
graph.get('d').set('fin', 5);

graph.set('fin', new Map());

/// 2 step
const costs = new Map();
costs.set('a', 1);
costs.set('b', 2);
costs.set('c', 3);
costs.set('d', Infinity);
costs.set('fin', Infinity);

/// 3 step
const parents = new Map();
parents.set('a', 'start');
parents.set('b', 'start');
parents.set('c', 'start');
parents.set('d', undefined);
parents.set('fin', undefined);


/// 4 step
const processed = [];
let i = 0;


// [...graph.keys()].forEach((elem)=>{
//   return processed.includes(elem);
// })

function min(arr) {
  let [min] = arr;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}

function getNode(min, map) {
  let minNode;
  map.forEach((value, key) => {
    if (value === min) {
      minNode = key;
      return key;
    }
  });
  return minNode;
}

/// 
const new_costs = new Map();

while (i < graph.size - 1) {
  i++;

  graph.get('start')

  let node = getNode(min([...costs.values()]), costs);
  let cost = costs.get(node);
  let neighbros = graph.get(node);
  for(const n of [...neighbros.keys()]){
    let new_cost = cost + neighbros.get(n);
    if(new_cost <= costs.get(n)){
     costs.set(n, new_cost);
     parents.set(n, node);
    }
  }
  new_costs.set(node, costs.get(node))
  costs.delete(node);

  processed.push([...graph.keys()][i]);

}

function showWay(map){
  
  let node = getNode('start',map);
  const way = ['start'];
  debugger;
  while(true){
    way.push(node);
    if(node === 'fin'){
      break;
    }
    node = getNode(node,map);
  }
  return way;
}


function showWay2(map){
  
  let node = map.get('fin');
  const way = ['fin'];
  
  while(true){
    way.push(node);
    if(node === 'start'){
      break;
    }
    node = map.get(node);
  }
  return way.reverse();
}


console.log(showWay2(parents).join(' => ')  + `   weight = ${new_costs.get('fin')}`);

