import {
  DELETE_PLAYER_BOARD,
  DELETE_PLAYER_NAME,
  DELETE_PLAYER_SHIPS,
  SET_GAME_IS_RUNNING,
  SET_PLAYER_BOARD,
  SET_PLAYER_NAME,
  SET_PLAYER_SHIPS
} from '../actions/types';

const reducer = (state, action) => {
  switch (action.type) {
    // PLAYER NAME ACTIONS

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

    // PLAYER BOARD ACTIONS
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

    // PLAYER SHIPS ACTIONS
    case SET_PLAYER_SHIPS:
      return {
        ...state,
        playerShips: action.payload
      };
    case DELETE_PLAYER_SHIPS:
      return {
        ...state,
        playerShips: []
      };

    // GAME IS RUNNING ACTIONS
    case SET_GAME_IS_RUNNING:
      return {
        ...state,
        gameIsRunning: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
