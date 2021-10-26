import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  setPlayerName,
  setPlayerBoard,
  setGameIsRunning
} from '../redux/actions';
import { createNewBoard } from '../helpers/board';
import Board from './Board';

const StartScreen = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const playerName = useSelector((state) => {
    return state.playerName;
  });

  const [name, setName] = useState(playerName);
  const [board, setBoard] = useState(createNewBoard());
  const [selectedCells, setSelectedCells] = useState(null);
  const [playerShips, setPlayerShips] = useState([]);

  const handleCellClick = (e) => {
    const ship = playerShips.find((s) => {
      return s.parts.some((p) => {
        return p.id === e.id;
      });
    });

    console.log(ship);
  };

  // useEffect(() => {
  //   console.log(selectedCells);
  // }, [selectedCells]);

  useEffect(() => {
    console.log(playerShips);
  }, [playerShips]);

  const selectCell = (cell) => {
    const newBoard = Array.from(board);

    newBoard[cell.row][cell.column].color = 'grey';
    newBoard[cell.row][cell.column].shipId = playerShips.length + 1;

    setBoard(newBoard);
    setSelectedCells([...selectedCells, cell]);
  };

  const deselectCell = (cell) => {
    const newBoard = Array.from(board);

    newBoard[cell.row][cell.column].color = 'white';
    newBoard[cell.row][cell.column].shipId = null;

    setBoard(newBoard);
    setSelectedCells(selectedCells);
  };

  const handleOnDragStart = (e) => {
    const newBoard = Array.from(board);
    newBoard[e.row][e.column].color = 'grey';

    setBoard(newBoard);
    setSelectedCells([]);
  };

  const handleOnDragEnter = (e) => {
    if (selectedCells.length >= 1) {
      const lastCell = selectedCells[selectedCells.length - 1];
      const horizontal = selectedCells.every((c) => {
        return c.row === e.row;
      });
      const vertical = selectedCells.every((c) => {
        return c.column === e.column;
      });

      if (
        selectedCells.length <= 3 &&
        ((horizontal &&
          e.row === lastCell.row &&
          (e.column === lastCell.column - 1 ||
            e.column === selectedCells[selectedCells.length - 1].column + 1)) ||
          (vertical &&
            e.column === lastCell.column &&
            (e.row === selectedCells[selectedCells.length - 1].row - 1 ||
              e.row === selectedCells[selectedCells.length - 1].row + 1)))
      ) {
        selectCell(e);
      }

      if (
        selectedCells.length >= 2 &&
        selectedCells[selectedCells.length - 2].id === e.id
      ) {
        const lastPart = selectedCells.pop();
        deselectCell(lastPart);
      }
    } else {
      selectCell(e);
    }
  };

  const handleOnDragEnd = () => {
    if (selectedCells.length > 1) {
      const newShip = {
        id: playerShips.length + 1,
        length: selectedCells.length,
        parts: selectedCells.map((c) => {
          return {
            id: c.id,
            coordinates: {
              x: c.row,
              y: c.column
            },
            damaged: false
          };
        }),
        destroyed: false
      };
      setPlayerShips([...playerShips, newShip]);
    } else {
      const newBoard = Array.from(board);
      newBoard[selectedCells[0].row][selectedCells[0].column].color = 'white';
      setBoard(newBoard);
    }
    setSelectedCells(null);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const validation = () => {
    let flag = true;

    if (!name) {
      flag = false;
    }

    if (playerShips.length !== 5) {
      flag = false;
    } else {
      const carriers = playerShips.filter((s) => {
        return s.length === 4;
      });
      const cruisers = playerShips.filter((s) => {
        return s.length === 3;
      });
      const submarine = playerShips.filter((s) => {
        return s.length === 2;
      });

      if (carriers === 1 && cruisers === 3 && submarine === 1) {
        flag = false;
      }
    }

    return flag;
  };

  function startGame() {
    dispatch(setPlayerName(name));
    dispatch(setPlayerBoard(board));
    dispatch(setGameIsRunning(true));
    history.push('/game');
  }

  function handleStartGame() {
    if (validation()) {
      startGame();
    }
  }

  return (
    <div className="start-screen">
      {board !== [] ? (
        <Board
          data={board}
          handleCellClick={(e) => {
            return handleCellClick(e);
          }}
          handleOnDragStart={(e) => {
            return handleOnDragStart(e);
          }}
          handleOnDragEnter={(e) => {
            return handleOnDragEnter(e);
          }}
          handleOnDragEnd={() => {
            return handleOnDragEnd();
          }}
        />
      ) : null}
      <div className="form">
        <input
          placeholder="Player Name"
          value={name}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleStartGame}>
          START GAME
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
