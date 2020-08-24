import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home';
import Introduction from '../pages/Introduction';
import Game from '../pages/Game';


const Routes = () => {
  return (
    <BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/introduction" component={Introduction} />
        <Route path="/game" component={Game} />
    </Switch>
</ BrowserRouter>
  );
}

export default Routes;