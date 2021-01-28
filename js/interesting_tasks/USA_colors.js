'use strict';

/*
  Вы рисуете карту США, на которой два соседних штата не могут быть окрашены о одинаковый цвет.
  Требуется найти минимальное количество цветов.
*/
const states = new Map();
states.set('florida', ['alabama', 'georgia']);
states.set('alabama', ['florida', 'mississippi', 'georgia', 'tennessee']);
states.set('georgia', ['alabama', 'florida', 's carolina', 'n carolina', 'tennessee']);
states.set('mississippi', ['laustia', 'ariavius', 'tennessee', 'alabama']);
states.set('laustia', ['mississippi', 'ariavius']);
states.set('ariavius', ['mississippi', 'laustia', 'tennessee', 'missourl']);
states.set('tennessee', ['missourl', 'verginia', 'kentyky', 'ariavius', 'mississippi', 'alabama', 'georgia', 'n carolina']);
states.set('n carolina', ['tennessee', 'georgia', 's carolina']);
states.set('s carolina', ['n carolina', 'georgia']);
states.set('missourl', ['illools', 'kentyky', 'tennessee', 'ariavius']);
states.set('kentyky', ['missourl', 'tennessee', 'verginia', 'ohio', 'indiana', 'illools', 'w virinia']);
states.set('verginia', ['kentyky', 'tennessee', 'n carolina', 'w virinia']);
states.set('illools', ['missourl', 'indiana', 'kentyky']);
states.set('ohio', ['indiana', 'kentyky', 'w virinia']);
states.set('w virinia', ['ohio', 'verginia', 'kentyky']);
states.set('indiana', ['illools', 'kentyky', 'ohio']);



const colors = new Map();
colors.set('florida', 0);
colors.set('alabama', 0);
colors.set('georgia', 0);
colors.set('mississippi', 0);
colors.set('laustia', 0);
colors.set('ariavius', 0);
colors.set('tennessee', 0);
colors.set('n carolina', 0);
colors.set('s carolina', 0);
colors.set('missourl', 0);
colors.set('kentyky', 0);
colors.set('verginia', 0);
colors.set('illools', 0);
colors.set('ohio', 0);
colors.set('w virinia', 0);
colors.set('indiana', 0);
// arr of colors 
const col = [1, 2, 3, 4, 5, 6, 7, 8, 9];


function USAColors(states) {
  const statesColor = [...colors.keys()];
  let neighborsColors = [];

  for (const state of statesColor) {
    if (colors.get(state)) {
      continue;
    }
    for (const neighborState of states.get(state)) {
      neighborsColors.push(colors.get(neighborState));
    }
    for (const numColor of col) {
      if (neighborsColors.includes(numColor)) {
        continue;
      }
      colors.set(state, numColor);
      neighborsColors = [];
      break;
    }
  }
  
  return colors;
}
