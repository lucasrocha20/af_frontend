import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './route';

/* nao precisa de autenticação */
import SignIn from '../pages/signIn';
import SignUp from '../pages/signUp';

/* precisa de autenticação */
import Dashboard from '../pages/dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />

      <Route path="dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
}
