import React from 'react';
import { Nav } from 'reactstrap';

import NavLink from './navlink';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="brand">えらい。</div>

        <Nav horizontal="center">
          <NavLink to="/">ホーム</NavLink>
          <NavLink to="/">ランダムえらい</NavLink>
          <NavLink to="/">ログイン</NavLink>
        </Nav>
      </header>
    );
  }
}
