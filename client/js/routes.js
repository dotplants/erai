import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Index from './page/index';
import User from './page/user';

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/user/:userid" component={User} />
      </Switch>
    );
  }
}
