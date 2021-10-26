import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setGameIsRunning } from '../redux/actions';
import { createNewBoard, createRandomBoard } from '../helpers/board';
import Board from './Board';

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
  console.log(playerShips);
  console.log(CPUShips);

  useEffect(() => {
    const { newBoard, newShips } = createRandomBoard(false);
    setCPUBoard(newBoard);
    setCPUShips(newShips);
  }, []);

  function handleQuitGame() {
    setPlayerBoard([]);
    setPlayerShips([]);
    dispatch(setGameIsRunning(false));
    history.push('/result');
  }

  return (
    <div className="game-screen">
      <div className="game">
        <div className="playerBoard">
          <span> {playerName}’s Board </span>
          {playerBoard !== [] ? <Board data={playerBoard} /> : null}
        </div>
        <div className="CPUBoard">
          <span> CPU’s Board </span>
          {CPUBoard !== [] ? <Board data={CPUBoard} /> : null}
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
