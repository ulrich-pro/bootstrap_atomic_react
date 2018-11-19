import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserManagment from '../pages/UserManagment';

const UserManagmentRoute = () => (
  <Switch>
    <Route exact path="/usermanagment" component={UserManagment} />
  </Switch>
);

export default UserManagmentRoute;
