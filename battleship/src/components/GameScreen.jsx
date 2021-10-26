import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setGameIsRunning } from '../redux/actions';
import { createRandomCPUBoard } from '../helpers/board';
import Board from './Board';

const GameScreen = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const playerName = useSelector((state) => {
    return state.playerName;
  });
  const playerBoard = useSelector((state) => {
    return state.playerBoard;
  });

  const [firstBoard, setFirstBoard] = useState(playerBoard);
  const [secondBoard, setSecondBoard] = useState(createRandomCPUBoard());

  function handleQuitGame() {
    setFirstBoard([]);
    setSecondBoard([]);
    dispatch(setGameIsRunning(false));
    history.push('/result');
  }

  return (
    <div className="game-screen">
      <div className="game">
        <div className="firstBoard">
          <span> {playerName}’s Board </span>
          {firstBoard !== [] ? <Board data={firstBoard} /> : null}
        </div>
        <div className="secondBoard">
          <span> CPU’s Board </span>
          {secondBoard !== [] ? <Board data={secondBoard} /> : null}
        </div>
      </div>
      <div className="info">
        <div className="info-turn">
          <span className="label"> Playing: </span>
          <span className="player"> {playerName} </span>
        </div>
        <button className="button" type="button" onClick={handleQuitGame}>
          QUIT GAME
        </button>
      </div>
    </div>
  );
};

export default GameScreen;
