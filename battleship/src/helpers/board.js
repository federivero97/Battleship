import { validateCell } from './cell';

export function createNewBoard() {
  const board = [];
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

  for (let i = 0; i < 10; i += 1) {
    const column = [];

    for (let j = 0; j < 10; j += 1) {
      column.push({
        id: rows[i] + (j + 1),
        column: j,
        row: i,
        color: 'white',
        selected: false,
        shipId: null
      });
    }

    board.push(column);
  }

  return board;
}

export function createRandomBoard(hidden) {
  const board = createNewBoard();
  const ships = [];
  const shipsLength = [4, 3, 3, 3, 2];

  shipsLength.forEach((length, shipId) => {
    let selectedCells = [];

    while (selectedCells.length !== length) {
      const row = Math.floor(Math.random() * 10);
      const column = Math.floor(Math.random() * 10);
      selectedCells = [];

      const horizontal = Math.floor(Math.random() * 2) === 1;

      for (let l = 0; l < length; l += 1) {
        if (horizontal && column + l < 10) {
          const cell = board[row][column + l];

          if (validateCell(board, cell, shipId + 1)) {
            selectedCells.push(cell);
          } else {
            break;
          }
        }

        if (!horizontal && row + l < 10) {
          const cell = board[row + l][column];

          if (validateCell(board, cell, shipId + 1)) {
            selectedCells.push(cell);
          } else {
            break;
          }
        }
      }
    }

    const newShip = {
      id: shipId + 1,
      length,
      parts: selectedCells.map((c) => {
        if (!hidden) {
          board[c.row][c.column].color = 'grey';
        }
        board[c.row][c.column].shipId = shipId + 1;

        return {
          id: c.id,
          coordinates: {
            x: c.row,
            y: c.column
          },
          hited: false
        };
      }),
      destroyed: false
    };

    ships.push(newShip);
  });

  return { newBoard: board, newShips: ships };
}
