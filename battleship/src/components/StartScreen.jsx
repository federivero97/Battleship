import React from 'react';
import { useHistory } from 'react-router-dom';

const StartScreen = () => {
  const history = useHistory();

  function startGame() {
    history.push('/game');
  }

  return (
    <div className="start-screen">
      <div> Board </div>
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
