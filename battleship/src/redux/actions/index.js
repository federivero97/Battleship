import {
  SET_PLAYER_NAME,
  DELETE_PLAYER_NAME,
  SET_PLAYER_BOARD,
  DELETE_PLAYER_BOARD
} from './types';

// PLAYER BOARD ACTIONS
export const setPlayerBoard = (board) => {
  return {
    type: SET_PLAYER_BOARD,
    payload: board
  };
};

export const deletePlayerBoard = () => {
  return {
    type: DELETE_PLAYER_BOARD
  };
};

// PLAYER NAME ACTIONS
export const setPlayerName = (name) => {
  return {
    type: SET_PLAYER_NAME,
    payload: name
  };
};

export const deletePlayerName = () => {
  return {
    type: DELETE_PLAYER_NAME
  };
};
