const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

export function createNewBoard() {
  const board = [];

  for (let i = 0; i < 10; i += 1) {
    const column = [];

    for (let j = 0; j < 10; j += 1) {
      column.push({
        id: rows[i] + (j + 1),
        column: j,
        row: i,
        color: 'white',
        available: true,
        selected: false,
        shipId: null
      });
    }

    board.push(column);
  }

  return board;
}

export function createRandomCPUBoard() {
  const board = createNewBoard();

  return board;
}
