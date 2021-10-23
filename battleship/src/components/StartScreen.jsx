import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Board from './Board';
import blankBoard from '../data/blankBoard.json';

const StartScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(blankBoard);
  }, []);

  const history = useHistory();

  function startGame() {
    history.push('/game');
  }

  const handleCellClick = (e) => {
    console.log(e);
  };

  return (
    <div className="start-screen">
      {data !== [] ? (
        <div>
          <Board
            data={data}
            handleCellClick={(e) => {
              return handleCellClick(e);
            }}
          />
        </div>
      ) : null}
      <div className="form">
        <input placeholder="Player Name" />
        <button type="button" onClick={startGame}>
          START GAME
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
