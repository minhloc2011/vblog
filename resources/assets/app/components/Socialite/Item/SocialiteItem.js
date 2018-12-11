import React, { Component } from 'react';
import { string, bool } from 'prop-types';
import { Link } from 'react-router-dom';

const btn = {
  facebook: 'btn-facebook',
  twitter: 'btn-twitter',
  google: 'btn-google',
};
const fontIcon = {
  facebook: 'fab fa-facebook-square',
  twitter: 'fab fa-twitter',
  google: 'fab fa-google-plus',
};

class SocialiteItem extends Component {
  render() {
    const { type, href, isHighlight } = this.props;
    let material;
    if (isHighlight) {
      material = `btn btn-neutral ${btn.type} btn-icon btn-lg btn-round`;
    } else {
      material = `btn btn-neutral ${btn.type} btn-icon btn-round`;
    }

    return (
      <Link
        to={href}
        className={material}
      >
        <i className={fontIcon[type]} />
      </Link>
    );
  }
}
SocialiteItem.propTypes = {
  type: string.isRequired,
  href: string.isRequired,
  isHighlight: bool.isRequired,
};

export default SocialiteItem;
