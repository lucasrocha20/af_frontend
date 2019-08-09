import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './route';

/* nao precisa de autenticação */
import Contact from '../pages/contact';
import Plans from '../pages/plans';
import Home from '../pages/home';
import SignIn from '../pages/signIn';
import SignUp from '../pages/signUp';
import About from '../pages/about';
import Legislation from '../pages/legislation';

/* precisa de autenticação */
import Dashboard from '../pages/dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/contact" component={Contact} />
      <Route path="/plans" component={Plans} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/about" component={About} />
      <Route path="/legislation" component={Legislation} />

      <Route path="dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
}
