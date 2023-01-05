type Position = { x: number; y: number };

const listOfPostions: Position[] = [];
const gridSize = 3;

for (let i = 0; i < gridSize; i++) {
  for (let j = 0; j < gridSize; j++) {
    const pos: Position = { x: i, y: j };
    listOfPostions.push(pos);
  }
}

console.log(listOfPostions);
