import React from 'react';
import { Nav } from 'reactstrap';

import NavLink from './navlink';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="brand">
          <div className="title">えらい。</div>
          <div className="sub">- ERAI -</div>
        </div>

        <Nav horizontal="center">
          <NavLink to="/">ホーム</NavLink>
          <NavLink to="/random">ランダムえらい</NavLink>
          <NavLink to="/login">ログイン</NavLink>
        </Nav>
      </header>
    );
  }
}
