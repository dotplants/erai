import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Index from './page/index';

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Index} />
      </Switch>
    );
  }
}
