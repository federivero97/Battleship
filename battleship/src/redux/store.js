import { createStore } from 'redux';
import reducer from './reducers';

const initialState = {
  cpuBoard: [],
  gameStart: false,
  gameResult: null,
  playerBoard: [],
  playerName: '',
  playerTurn: true
};

export default createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
