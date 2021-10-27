import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setGameIsRunning, setGameResult } from '../../redux/actions';
import { createNewBoard, createRandomBoard } from '../../helpers/board';
import { fire } from '../../helpers/cell';
import Board from '../Board/Board';
import {
  getMinByAttribute,
  getMaxByAttribute,
  isHorizontal,
  isVertical,
  shuffle
} from '../../helpers/helpers';

const GameScreen = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const playerName = useSelector((state) => {
    return state.playerName;
  });
  const [playerBoard, setPlayerBoard] = useState(
    useSelector((state) => {
      return state.playerBoard;
    })
  );
  const [playerShips, setPlayerShips] = useState(
    useSelector((state) => {
      return state.playerShips;
    })
  );
  const [CPUBoard, setCPUBoard] = useState(createNewBoard());
  const [CPUShips, setCPUShips] = useState([]);
  const [playerTurn, setplayerTurn] = useState(true);
  const [targetShip, setTargetShip] = useState([]);

  useEffect(() => {
    const { newBoard, newShips } = createRandomBoard(true);
    setCPUBoard(newBoard);
    setCPUShips(newShips);
  }, []);

  function selectTargetCell() {
    let targetCell = null;

    if (targetShip.length > 0) {
      let directions = [];
      if (isHorizontal(targetShip)) {
        directions.push('left', 'right');
      }
      if (isVertical(targetShip)) {
        directions.push('up', 'down');
      }

      directions = shuffle(directions);

      while (targetCell === null) {
        const selectedDirection = directions.pop();

        switch (selectedDirection) {
          case 'up': {
            const upCell = getMinByAttribute(targetShip, 'row');

            if (
              upCell.row > 0 &&
              !playerBoard[upCell.row - 1][upCell.column].selected
            ) {
              targetCell = playerBoard[upCell.row - 1][upCell.column];
            }
            break;
          }
          case 'down': {
            const downCell = getMaxByAttribute(targetShip, 'row');

            if (
              downCell.row < 9 &&
              !playerBoard[downCell.row + 1][downCell.column].selected
            ) {
              targetCell = playerBoard[downCell.row + 1][downCell.column];
            }
            break;
          }
          case 'left': {
            const leftCell = getMinByAttribute(targetShip, 'column');

            if (
              leftCell.column > 0 &&
              !playerBoard[leftCell.row][leftCell.column - 1].selected
            ) {
              targetCell = playerBoard[leftCell.row][leftCell.column - 1];
            }
            break;
          }
          case 'right': {
            const rightCell = getMaxByAttribute(targetShip, 'column');

            if (
              rightCell.column < 9 &&
              !playerBoard[rightCell.row][rightCell.column + 1].selected
            ) {
              targetCell = playerBoard[rightCell.row][rightCell.column + 1];
            }
            break;
          }
          default:
            break;
        }
      }
    } else {
      while (targetCell === null) {
        const row = Math.floor(Math.random() * 10);
        const column = Math.floor(Math.random() * 10);

        if (!playerBoard[row][column].selected) {
          targetCell = playerBoard[row][column];
        }
      }
    }

    return targetCell;
  }

  function finishGame(result, message) {
    setTimeout(() => {
      setPlayerBoard([]);
      setPlayerShips([]);
      setCPUBoard([]);
      setCPUShips([]);
      dispatch(setGameResult({ result, message }));
      dispatch(setGameIsRunning(false));
      history.push('/result');
    }, 1000);
  }

  function handleCPUTurns() {
    const targetCell = selectTargetCell();

    const { board, ships, result } = fire(playerBoard, playerShips, targetCell);

    switch (result) {
      case 'WATER':
        break;
      case 'HIT':
        setTargetShip([...targetShip, targetCell]);
        break;
      case 'DESTROYED':
        setTargetShip([]);
        break;
      default:
        break;
    }

    setPlayerBoard(board);
    setPlayerShips(ships);

    if (
      ships.every((s) => {
        return s.destroyed;
      })
    ) {
      finishGame(false, 'YOU LOST');
    } else {
      setplayerTurn(true);
    }
  }

  function handleCellClick(cell) {
    if (playerTurn && !cell.selected) {
      setplayerTurn(false);

      const { board, ships } = fire(CPUBoard, CPUShips, cell);

      setCPUBoard(board);
      setCPUShips(ships);

      if (
        ships.every((s) => {
          return s.destroyed;
        })
      ) {
        finishGame(true, 'YOU WON');
      } else {
        setTimeout(() => {
          handleCPUTurns();
        }, 500);
      }
    }
  }

  function handleQuitGame() {
    finishGame(false, 'YOU SURRENDERER');
  }

  return (
    <div className="game-screen">
      <div className="game">
        <div className="playerBoard">
          <span> {playerName} </span>
          {playerBoard !== [] ? <Board data={playerBoard} /> : null}
        </div>
        <div className="CPUBoard">
          <span> CPU </span>
          {CPUBoard !== [] ? (
            <Board
              data={CPUBoard}
              handleCellClick={(e) => {
                return handleCellClick(e);
              }}
            />
          ) : null}
        </div>
      </div>
      <div className="info">
        <div className="info-turn">
          <span className="label"> Playing: </span>
          <span className="player"> {playerTurn ? playerName : 'CPU'} </span>
        </div>
        <button className="button" type="button" onClick={handleQuitGame}>
          SURRENDER
        </button>
      </div>
    </div>
  );
};

export default GameScreen;
