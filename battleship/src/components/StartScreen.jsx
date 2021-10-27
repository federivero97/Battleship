import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  setPlayerName,
  setPlayerBoard,
  setPlayerShips,
  setGameIsRunning
} from '../redux/actions';
import { createNewBoard, createRandomBoard } from '../helpers/board';
import { validateCell } from '../helpers/cell';
import { getFreeId, isHorizontal, isVertical } from '../helpers/helpers';
import Board from './Board';
import ShipsInfo from './ShipsInfo';
import BoardHelperInfo from './BoardHelperInfo';

const StartScreen = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const playerName = useSelector((state) => {
    return state.playerName;
  });

  const [name, setName] = useState(playerName);
  const [board, setBoard] = useState(createNewBoard());
  const [selectedCells, setSelectedCells] = useState([]);
  const [ships, setShips] = useState([]);
  const [validationErrorMessages, setValidationErrorMessages] = useState([]);

  const handleCellClick = (e) => {
    if (e.shipId) {
      const newBoard = Array.from(board);
      const ship = ships.find((s) => {
        return s.id === e.shipId;
      });

      ship.parts.forEach((p) => {
        const cell = newBoard[p.coordinates.x][p.coordinates.y];
        cell.color = 'white';
        cell.shipId = null;
      });

      setBoard(newBoard);
      setShips(
        ships.filter((s) => {
          return s.id !== ship.id;
        })
      );
    }
  };

  const selectCell = (cell) => {
    const freeShipId = getFreeId(ships);

    if (validateCell(board, cell, freeShipId)) {
      const newBoard = Array.from(board);
      newBoard[cell.row][cell.column].color = 'grey';
      newBoard[cell.row][cell.column].shipId = freeShipId;

      setBoard(newBoard);
      setSelectedCells([...selectedCells, cell]);
    }
  };

  const deselectCell = (cell) => {
    const newBoard = Array.from(board);

    newBoard[cell.row][cell.column].color = 'white';
    newBoard[cell.row][cell.column].shipId = null;

    setBoard(newBoard);
    setSelectedCells(selectedCells);
  };

  const handleOnDragStart = (e) => {
    selectCell(e);
  };

  const handleOnDragEnter = (e) => {
    if (selectedCells.length >= 1) {
      const lastCell = selectedCells[selectedCells.length - 1];

      if (
        selectedCells.length <= 3 &&
        ((isHorizontal(selectedCells) &&
          e.row === lastCell.row &&
          (e.column === lastCell.column - 1 ||
            e.column === selectedCells[selectedCells.length - 1].column + 1)) ||
          (isVertical(selectedCells) &&
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
    if (selectedCells.length === 1) {
      const newBoard = Array.from(board);

      newBoard[selectedCells[0].row][selectedCells[0].column].color = 'white';
      newBoard[selectedCells[0].row][selectedCells[0].column].shipId = null;

      setBoard(newBoard);
    }
    if (selectedCells.length > 1) {
      const freeShipId = getFreeId(ships);

      const newShip = {
        id: freeShipId,
        length: selectedCells.length,
        parts: selectedCells.map((c) => {
          return {
            id: c.id,
            coordinates: {
              x: c.row,
              y: c.column
            },
            hit: false
          };
        }),
        destroyed: false
      };

      setShips([...ships, newShip]);
    }

    setSelectedCells([]);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);

    const errorMessages = validationErrorMessages.filter((error) => {
      return error.error !== 'player-name';
    });

    setValidationErrorMessages(errorMessages);
  };

  const validation = () => {
    let flag = true;
    const errorMessages = [];

    if (!name) {
      flag = false;
      errorMessages.push({
        error: 'player-name',
        message: 'Insert player name.'
      });
    }

    if (ships.length === 5) {
      const carriers = ships.filter((s) => {
        return s.length === 4;
      });
      const cruisers = ships.filter((s) => {
        return s.length === 3;
      });
      const submarines = ships.filter((s) => {
        return s.length === 2;
      });

      if (carriers.length !== 1) {
        flag = false;
        errorMessages.push({
          error: 'carriers-number',
          message: 'You must to have 1 carrier.'
        });
      }
      if (cruisers.length !== 3) {
        flag = false;
        errorMessages.push({
          error: 'crussiers-number',
          message: 'You must to have 3 crussiers.'
        });
      }
      if (submarines.length !== 1) {
        flag = false;
        errorMessages.push({
          error: 'submarines-number',
          message: 'You must to have 1 submarine.'
        });
      }
    } else {
      flag = false;
      errorMessages.push({
        error: 'ships-number',
        message: 'You must to have 5 ships.'
      });
    }

    setValidationErrorMessages(errorMessages);
    return flag;
  };

  function startGame() {
    dispatch(setPlayerName(name));
    dispatch(setPlayerBoard(board));
    dispatch(setPlayerShips(ships));
    dispatch(setGameIsRunning(true));
    history.push('/game');
  }

  function handleStartGame() {
    if (validation()) {
      startGame();
    }
  }

  function handleCreateRandomBoard() {
    const { newBoard, newShips } = createRandomBoard(false);
    setBoard(newBoard);
    setShips(newShips);
  }

  function handleCleanBoard() {
    setBoard(createNewBoard());
    setShips([]);
  }

  return (
    <div className="start-screen">
      <div className="game">
        {board !== [] ? (
          <div className="board">
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
            <div className="buttons">
              <button
                className="button"
                type="button"
                onClick={handleCreateRandomBoard}
              >
                Random Board
              </button>
              <button
                className="button"
                type="button"
                onClick={handleCleanBoard}
              >
                Clean Board
              </button>
            </div>
          </div>
        ) : null}
        <div className="board-info">
          <ShipsInfo ships={ships} />
          <BoardHelperInfo />
        </div>
      </div>
      <div className="form">
        <input
          className="input"
          placeholder="Player Name"
          value={name}
          onChange={handleInputChange}
        />
        <button className="button" type="button" onClick={handleStartGame}>
          START GAME
        </button>
        {validationErrorMessages.length ? (
          <div className="errorMessages">
            {validationErrorMessages.map((e) => {
              return <p key={e.error}>*{e.message}</p>;
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default StartScreen;
