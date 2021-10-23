import React from 'react';
import { useHistory } from 'react-router-dom';

const GameScreen = () => {
  const history = useHistory();

  function quitGame() {
    history.push('/end');
  }

  return (
    <div className="game-screen">
      <div className="game">
        <div> Player Board </div>
        <div> CPU Board </div>
      </div>
      <div className="info">
        <div> Playing: ... </div>
        <button type="button" onClick={quitGame}>
          QUIT GAME
        </button>
      </div>
    </div>
  );
};

export default GameScreen;
