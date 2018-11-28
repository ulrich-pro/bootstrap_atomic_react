import React from 'react';
import { Switch, Route } from 'react-router-dom';

import UserManagmentRoute from './UserManagment';
import HomeRoute from './Home';

const Main = () => (
  <Switch>
    <Route exact path="/" component={HomeRoute} />
    <Route path="/usermanagment" component={UserManagmentRoute} />
  </Switch>
);

export default Main;
