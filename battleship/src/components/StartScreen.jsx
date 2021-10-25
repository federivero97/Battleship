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
  const [currentShip, setCurrentShip] = useState(null);
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
  //   console.log(currentShip);
  // }, [currentShip]);

  useEffect(() => {
    console.log(playerShips);
  }, [playerShips]);

  const handleOnDragStart = (e) => {
    setCurrentShip([]);

    const newBoard = Array.from(board);
    newBoard[e.row][e.column].color = 'grey';
    setBoard(newBoard);
  };

  const handleOnDragEnter = (e) => {
    const newBoard = Array.from(board);

    if (
      currentShip.length > 1 &&
      currentShip.some((s) => {
        return s.id === e.id;
      })
    ) {
      const lastPart = currentShip.pop();
      newBoard[lastPart.row][lastPart.column].color = 'white';
      newBoard[lastPart.row][lastPart.column].shipId = playerShips.length + 1;
      setCurrentShip(currentShip);
    } else {
      setCurrentShip([...currentShip, e]);
      newBoard[e.row][e.column].color = 'grey';
    }

    setBoard(newBoard);
  };

  const handleOnDragEnd = () => {
    if (currentShip.length > 1) {
      const newShip = {
        id: playerShips.length + 1,
        length: currentShip.length,
        parts: currentShip.map((p) => {
          return {
            id: p.id,
            coordinates: {
              x: p.row,
              y: p.column
            },
            damaged: false
          };
        }),
        destroyed: false
      };
      setPlayerShips([...playerShips, newShip]);
    } else {
      const newBoard = Array.from(board);
      newBoard[currentShip[0].row][currentShip[0].column].color = 'white';
      setBoard(newBoard);
    }
    setCurrentShip(null);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const validation = () => {
    let flag = true;

    if (!name) {
      flag = false;
    }
    // VALIDATE PLAYER BOARD
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
