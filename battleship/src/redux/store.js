import { createStore } from 'redux';
import reducer from './reducers';

const initialState = {
  cpuBoard: [],
  gameIsRunning: false,
  gameResult: null,
  playerBoard: [],
  playerName: '',
  playerShips: [],
  playerTurn: true
};

export default createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
