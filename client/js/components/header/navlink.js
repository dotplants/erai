import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

export default class NavLink extends React.Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    className: PropTypes.string,
    children: PropTypes.any
  };

  render() {
    const { to, children, className, ...prop } = this.props;

    return (
      <Link to={to} className={classnames('nav-link', className)} {...prop}>
        {children}
      </Link>
    );
  }
}
