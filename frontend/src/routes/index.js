import React from 'react';
import { Switch } from 'react-router-dom';

import Dashboard from '~/pages/Dashboard';
import NotFound from '~/pages/NotFound';
import Profile from '~/pages/Profile';
import Route from '~/routes/Route';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

export default function Routes() {
  console.tron.error('oktestew');
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      <Route path="/" component={() => <NotFound />} />
    </Switch>
    /**
     * <Route path="/" component={() => <h1>404 Not Found</h1>} />
     */
  );
}
