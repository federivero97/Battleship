import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Board from './Board';
import blankBoard from '../data/blankBoard.json';
import { setPlayerName } from '../redux/actions';

const StartScreen = () => {
  const [data, setData] = useState([]);
  const playerName = useSelector((state) => {
    return state.playerName;
  });

  const [name, setName] = useState(playerName);
  const dispatch = useDispatch();

  useEffect(() => {
    setData(blankBoard);
  }, []);

  const history = useHistory();

  function startGame() {
    dispatch(setPlayerName(name));
    history.push('/game');
  }

  const handleCellClick = (e) => {
    console.log(e);
  };

  const handleChange = (e) => {
    setName(e.target.value);
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
        <input placeholder="Player Name" value={name} onChange={handleChange} />
        <button type="button" onClick={startGame}>
          START GAME
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
