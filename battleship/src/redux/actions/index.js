import {
  DELETE_PLAYER_BOARD,
  DELETE_PLAYER_NAME,
  DELETE_PLAYER_SHIPS,
  SET_GAME_IS_RUNNING,
  SET_PLAYER_BOARD,
  SET_PLAYER_NAME,
  SET_PLAYER_SHIPS
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

// PLAYER SHIPS ACTIONS
export const setPlayerShips = (ships) => {
  return {
    type: SET_PLAYER_SHIPS,
    payload: ships
  };
};

export const deletePlayerShips = () => {
  return {
    type: DELETE_PLAYER_SHIPS
  };
};

// GAME IS RUNNING ACTIONS
export const setGameIsRunning = (bool) => {
  return {
    type: SET_GAME_IS_RUNNING,
    payload: bool
  };
};
