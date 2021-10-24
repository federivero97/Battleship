import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deletePlayerBoard } from '../redux/actions';

const EndScreen = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(deletePlayerBoard());
    history.push('/start');
  }

  return (
    <div className="end-screen">
      <div> Result </div>
      <button type="button" onClick={handleClick}>
        Back to Start Screen
      </button>
    </div>
  );
};

export default EndScreen;
