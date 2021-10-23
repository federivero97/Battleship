import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Board from './Board';

// Move blankBoard to a ext JSON file
const blankBoard = [
  [
    { id: 'A', color: 'white' },
    { id: 'B', color: 'white' },
    { id: 'C', color: 'white' },
    { id: 'D', color: 'white' },
    { id: 'E', color: 'white' },
    { id: 'F', color: 'white' },
    { id: 'G', color: 'white' },
    { id: 'H', color: 'white' },
    { id: 'I', color: 'white' },
    { id: 'J', color: 'white' }
  ],
  [
    { id: 'A', color: 'white' },
    { id: 'B', color: 'white' },
    { id: 'C', color: 'white' },
    { id: 'D', color: 'white' },
    { id: 'E', color: 'white' },
    { id: 'F', color: 'white' },
    { id: 'G', color: 'white' },
    { id: 'H', color: 'white' },
    { id: 'I', color: 'white' },
    { id: 'J', color: 'white' }
  ],
  [
    { id: 'A', color: 'white' },
    { id: 'B', color: 'white' },
    { id: 'C', color: 'white' },
    { id: 'D', color: 'white' },
    { id: 'E', color: 'white' },
    { id: 'F', color: 'white' },
    { id: 'G', color: 'white' },
    { id: 'H', color: 'white' },
    { id: 'I', color: 'white' },
    { id: 'J', color: 'white' }
  ],
  [
    { id: 'A', color: 'white' },
    { id: 'B', color: 'white' },
    { id: 'C', color: 'white' },
    { id: 'D', color: 'white' },
    { id: 'E', color: 'white' },
    { id: 'F', color: 'white' },
    { id: 'G', color: 'white' },
    { id: 'H', color: 'white' },
    { id: 'I', color: 'white' },
    { id: 'J', color: 'white' }
  ],
  [
    { id: 'A', color: 'white' },
    { id: 'B', color: 'white' },
    { id: 'C', color: 'white' },
    { id: 'D', color: 'white' },
    { id: 'E', color: 'white' },
    { id: 'F', color: 'white' },
    { id: 'G', color: 'white' },
    { id: 'H', color: 'white' },
    { id: 'I', color: 'white' },
    { id: 'J', color: 'white' }
  ],
  [
    { id: 'A', color: 'white' },
    { id: 'B', color: 'white' },
    { id: 'C', color: 'white' },
    { id: 'D', color: 'white' },
    { id: 'E', color: 'white' },
    { id: 'F', color: 'white' },
    { id: 'G', color: 'white' },
    { id: 'H', color: 'white' },
    { id: 'I', color: 'white' },
    { id: 'J', color: 'white' }
  ],
  [
    { id: 'A', color: 'white' },
    { id: 'B', color: 'white' },
    { id: 'C', color: 'white' },
    { id: 'D', color: 'white' },
    { id: 'E', color: 'white' },
    { id: 'F', color: 'white' },
    { id: 'G', color: 'white' },
    { id: 'H', color: 'white' },
    { id: 'I', color: 'white' },
    { id: 'J', color: 'white' }
  ],
  [
    { id: 'A', color: 'white' },
    { id: 'B', color: 'white' },
    { id: 'C', color: 'white' },
    { id: 'D', color: 'white' },
    { id: 'E', color: 'white' },
    { id: 'F', color: 'white' },
    { id: 'G', color: 'white' },
    { id: 'H', color: 'white' },
    { id: 'I', color: 'white' },
    { id: 'J', color: 'white' }
  ],
  [
    { id: 'A', color: 'white' },
    { id: 'B', color: 'white' },
    { id: 'C', color: 'white' },
    { id: 'D', color: 'white' },
    { id: 'E', color: 'white' },
    { id: 'F', color: 'white' },
    { id: 'G', color: 'white' },
    { id: 'H', color: 'white' },
    { id: 'I', color: 'white' },
    { id: 'J', color: 'white' }
  ],
  [
    { id: 'A', color: 'white' },
    { id: 'B', color: 'white' },
    { id: 'C', color: 'white' },
    { id: 'D', color: 'white' },
    { id: 'E', color: 'white' },
    { id: 'F', color: 'white' },
    { id: 'G', color: 'white' },
    { id: 'H', color: 'white' },
    { id: 'I', color: 'white' },
    { id: 'J', color: 'white' }
  ]
];

const StartScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(blankBoard); // Get initial data from JSON file
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
