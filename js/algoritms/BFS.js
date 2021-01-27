
class Queue {
  constructor(...args) {
    this._head = 0;
    this._tail = 0;
    args.forEach((elem) => {
      this.push(elem);
    });
  }

  get size() {

    return this._tail - this._head;
  }

  push(value) {
    if (this.size >= this._maxSize) {
      throw new RangeError('Stack overflow');
    }
    this[`_${this.size}`] = value;
    this._size++;
    this[this._tail] = value;
    this._tail++;
    return this.size;
  }

  pop() {
    if (this.size <= 0) {
      return;
    }
    if (this.size) {
      const lastItem = this[this._head];
      delete this[this._head++];
      return lastItem;
    }
    const lastItem = this[`_${this.size - 1}`];
    delete this[`_${this.size - 1}`];
    this._size--;
    return lastItem;
  }

  pick() {
    return this[`_${this.size - 1}`];
  }
}

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