import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <div className="container bwm-container">
      <Switch>
        <Route exact path="/">
          Start Screen
        </Route>
        <Route exact path="/game">
          Game Screen
        </Route>
        <Route exact path="/end">
          End Screen
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
