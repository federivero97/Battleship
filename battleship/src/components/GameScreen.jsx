import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { createRandomCPUBoard } from '../helpers/board';
import Board from './Board';

const GameScreen = () => {
  const history = useHistory();
  const playerName = useSelector((state) => {
    return state.playerName;
  });
  const playerBoard = useSelector((state) => {
    return state.playerBoard;
  });

  const [firstBoard, setFirstBoard] = useState(playerBoard);
  const [secondBoard, setSecondBoard] = useState(createRandomCPUBoard());

  function quitGame() {
    setFirstBoard([]);
    setSecondBoard([]);
    history.push('/end');
  }

  return (
    <div className="game-screen">
      <div className="game">
        {firstBoard !== [] ? (
          <Board data={firstBoard} handleCellClick={() => {}} />
        ) : null}
        {secondBoard !== [] ? (
          <Board data={secondBoard} handleCellClick={() => {}} />
        ) : null}
      </div>
      <div className="info">
        <div> Playing: {playerName} </div>
        <button type="button" onClick={quitGame}>
          QUIT GAME
        </button>
      </div>
    </div>
  );
};

export default GameScreen;
