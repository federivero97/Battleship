import { createStore } from 'redux';
import reducer from './reducers';

const initialState = {
  gameIsRunning: false,
  gameResult: null,
  playerName: '',
  playerBoard: [],
  playerShips: []
};

export default createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
