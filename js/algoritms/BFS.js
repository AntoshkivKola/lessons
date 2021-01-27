const graph = new Map();
graph.set('start', ['a', 'b', 'c']);
graph.set('b', ['d', 'r']);
graph.set('a', ['r']);
graph.set('c', ['t', 'j']);
graph.set('d', ['g','fin']);
graph.set('r', []);
graph.set('g', ['r']);
graph.set('t', ['g']);
graph.set('j', []);
graph.set('fin', []);

const parents = new Map();
parents.set('a', 'start');
parents.set('b', 'start');
parents.set('c', 'start');
parents.set('d', undefined);
parents.set('r', undefined);
parents.set('t', undefined);
parents.set('j', undefined);
parents.set('fin', undefined);


function bfs(g) {
  const graph = [...g]

  for(const corteg of graph ){
    corteg[1].forEach((elem)=>{
      
      for(const nextVertex of g.get(elem)){
        if(parents.get(nextVertex) === undefined){
          parents.set(nextVertex, elem)
        }
        if(nextVertex === 'fin'){
          return showWayBFS(parents);
        }
      }
      
    });
  }
  

  return showWayBFS(parents);
}

function showWayBFS(map){
  
  let node = map.get('fin');
  const way = ['fin'];
  let count = 0;

  while(true){
    way.push(node);
    count++;
    if(node === 'start'){
      break;
    }
    node = map.get(node);
  }
  return way.reverse().join(' => ') + `   weight: ${count}`;
}