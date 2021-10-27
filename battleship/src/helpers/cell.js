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
  let result;
  const targetedCell = board[cell.row][cell.column];
  targetedCell.selected = true;

  if (cell.shipId) {
    const targetedShip = ships.find((s) => {
      return s.id === cell.shipId;
    });

    const targetedPart = targetedShip.parts.find((p) => {
      return p.id === cell.id;
    });

    targetedPart.hit = true;

    if (
      targetedShip.parts.every((p) => {
        return p.hit;
      })
    ) {
      targetedShip.parts.forEach((p) => {
        const part = board[p.coordinates.x][p.coordinates.y];
        part.color = 'red';
        part.borderColor = 'red';
        result = 'DESTROYED';
      });

      targetedShip.destroyed = true;
    } else {
      targetedCell.color = 'orange';
      targetedCell.borderColor = 'orange';
      result = 'HIT';
    }
  } else {
    targetedCell.color = 'lightblue';
    result = 'WATER';
  }

  return { board, ships, result };
}
