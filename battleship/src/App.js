import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './Routes';
import store from './redux/store';

const Battleship = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Battleship />
    </Provider>
  );
};

export default App;
