import React from 'react';

import Header from './components/header/index';
import Routes from './routes';

export default class App extends React.Component {
  render() {
    return (
      <div className="container text-center">
        <Header />

        <hr />

        <Routes />
      </div>
    );
  }
}
