import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SocialiteItem from './Item/SocialiteItem';

class Socialite extends Component {
  render() {
    const items = [];
    this.props.dataProvider.forEach((item) => {
      items.push(
        <SocialiteItem
          key={item.type}
          type={item.type}
          href={item.href}
          isHighlight={item.isHighlight}
        />,
      );
    });
    return (
      <div className="social-line">{items}</div>
    );
  }
}
Socialite.propTypes = {
  dataProvider: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    isHighlight: PropTypes.bool.isRequired,
  }).isRequired),
};
Socialite.defaultProps = {
  dataProvider: [],
};

export default Socialite;
