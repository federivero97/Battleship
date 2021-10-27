import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import EndScreen from './components/EndScreen';

const Routes = () => {
  const gameIsRunning = useSelector((state) => {
    return state.gameIsRunning;
  });

  const gameResult = useSelector((state) => {
    return state.gameResult;
  });

  return (
    <Switch>
      <Route exact path="/start">
        {!gameIsRunning ? (
          <StartScreen />
        ) : (
          <Redirect to={{ pathname: '/game' }} />
        )}
      </Route>
      <Route exact path="/game">
        {gameIsRunning ? (
          <GameScreen />
        ) : (
          <Redirect to={{ pathname: '/start' }} />
        )}
      </Route>
      <Route exact path="/result">
        {!gameIsRunning && gameResult !== null ? (
          <EndScreen />
        ) : (
          <Redirect to={{ pathname: '/start' }} />
        )}
      </Route>
      <Route path="/">
        <Redirect to="/start" />
      </Route>
    </Switch>
  );
};

export default Routes;
