import React from 'react';
import PropTypes from 'prop-types';

export default class User extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        userid: PropTypes.string.isRequired
      })
    })
  };

  render() {
    const { match } = this.props;

    return <h1>{match.params.userid}</h1>;
  }
}
