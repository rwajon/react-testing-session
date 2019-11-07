import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeContainer from './containers/Home';

const Routes = () => (
  <Switch>
    <Route exact path="/" render={(props) => <HomeContainer {...props} />} />
  </Switch>
);

export default Routes;
