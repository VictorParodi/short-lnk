import { Meteor } from 'meteor/meteor';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { render } from 'react-dom';

import Signup from './../imports/ui/Signup';
import Link from './../imports/ui/Link';
import NotFound from './../imports/ui/NotFound';
import Login from './../imports/ui/Login';

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} /> 
      <Route path="/signup" component={Signup} />
      <Route path="/link" component={Link} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

Meteor.startup(() => {
  render(
    routes,
    document.getElementById('app')
  );
});