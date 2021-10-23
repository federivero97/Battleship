import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import EndScreen from './components/EndScreen';
import GameScreen from './components/GameScreen';
import StartScreen from './components/StartScreen';

const Routes = () => {
  return (
    <div className="container bwm-container">
      <Switch>
        <Route exact path="/start">
          <StartScreen />
        </Route>
        <Route exact path="/game">
          <GameScreen />
        </Route>
        <Route exact path="/end">
          <EndScreen />
        </Route>
        <Route path="/">
          <Redirect to="/start" />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
