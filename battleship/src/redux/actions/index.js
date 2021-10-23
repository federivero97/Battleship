import { SET_PLAYER_NAME, DELETE_PLAYER_NAME } from './types';

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
