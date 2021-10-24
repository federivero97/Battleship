import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setPlayerName, setPlayerBoard } from '../redux/actions';
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

  // Validate
  function startGame() {
    dispatch(setPlayerName(name));
    dispatch(setPlayerBoard(board));
    history.push('/game');
  }

  const handleCellClick = (e) => {
    let newColor;

    if (e.color === 'white') {
      newColor = 'grey';
    } else {
      newColor = 'white';
    }

    const newBoard = Array.from(board);
    newBoard[e.row][e.column].color = newColor;
    setBoard(newBoard);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="start-screen">
      {board !== [] ? (
        <Board
          data={board}
          handleCellClick={(e) => {
            return handleCellClick(e);
          }}
        />
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
