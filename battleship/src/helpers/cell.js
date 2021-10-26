export function validateCell(board, cell, shipId) {
  let valid = true;

  for (let i = -1; i < 2; i += 1) {
    for (let j = -1; j < 2; j += 1) {
      if (
        cell.row + i < 10 &&
        cell.row + i >= 0 &&
        cell.column + j < 10 &&
        cell.column + j >= 0 &&
        board[cell.row + i][cell.column + j].shipId &&
        board[cell.row + i][cell.column + j].shipId !== shipId
      ) {
        valid = false;
        break;
      }
    }
  }

  return valid;
}

export function fire(board, ships, cell) {
  const targetedCell = board[cell.row][cell.column];
  targetedCell.selected = true;

  if (cell.shipId) {
    const targetedShip = ships.find((s) => {
      return s.id === cell.shipId;
    });

    const targetedPart = targetedShip.parts.find((p) => {
      return p.id === cell.id;
    });

    targetedPart.hited = true;

    if (
      targetedShip.parts.every((p) => {
        return p.hited;
      })
    ) {
      targetedShip.parts.forEach((p) => {
        const part = board[p.coordinates.x][p.coordinates.y];
        part.color = 'red';
      });
    } else {
      targetedCell.color = 'orange';
    }
  } else {
    targetedCell.color = 'lightblue';
  }

  return { board, ships };
}
