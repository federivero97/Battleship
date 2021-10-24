import {
  SET_PLAYER_NAME,
  DELETE_PLAYER_NAME,
  SET_PLAYER_BOARD,
  DELETE_PLAYER_BOARD
} from '../actions/types';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_PLAYER_NAME:
      return {
        ...state,
        playerName: action.payload
      };
    case DELETE_PLAYER_NAME:
      return {
        ...state,
        playerName: ''
      };
    case SET_PLAYER_BOARD:
      return {
        ...state,
        playerBoard: action.payload
      };
    case DELETE_PLAYER_BOARD:
      return {
        ...state,
        playerBoard: []
      };
    default:
      return state;
  }
};

export default reducer;
