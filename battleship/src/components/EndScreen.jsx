import React from 'react';
import { useHistory } from 'react-router-dom';

const EndScreen = () => {
  const history = useHistory();

  function handleClick() {
    history.push('/start');
  }

  return (
    <div>
      <div> Result </div>
      <button type="button" onClick={handleClick}>
        Back to Start Screen
      </button>
    </div>
  );
};

export default EndScreen;
