import { SET_PLAYER_NAME, DELETE_PLAYER_NAME } from '../actions/types';

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
        playerName: null
      };
    default:
      return state;
  }
};

export default reducer;
