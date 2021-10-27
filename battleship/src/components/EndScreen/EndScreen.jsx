import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  deletePlayerBoard,
  deletePlayerShips,
  setGameIsRunning,
  setGameResult
} from '../../redux/actions';

const EndScreen = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const gameResult = useSelector((state) => {
    return state.gameResult;
  });

  function handleClick() {
    dispatch(deletePlayerBoard());
    dispatch(deletePlayerShips());
    dispatch(setGameIsRunning(false));
    dispatch(setGameResult(null));
    history.push('/start');
  }

  return (
    <div className="end-screen">
      <div className="game-result">
        <div className={gameResult.result ? 'won' : 'lost'}>
          {gameResult.message}
        </div>
      </div>
      <button className="button" type="button" onClick={handleClick}>
        Go to Start Screen
      </button>
    </div>
  );
};

export default EndScreen;
