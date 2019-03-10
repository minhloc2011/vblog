import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Socialite from 'Components/Socialite/Socialite';
import './CardHeader.scss';

class CardHeader extends Component {
  render() {
    const { title, logo, socials } = this.props;
    const hasSocialite = socials.length > 0;

    return (
      <div className="card-header text-center">
        {logo.display && (
          <div className="logo-container">
            <img src={logo.path} alt="" />
          </div>
        )}
        {title && (
          <h3 className="card-title title-up">{title}</h3>
        )}
        {hasSocialite && (
          <Socialite dataProvider={socials} />
        )}
      </div>
    );
  }
}
CardHeader.propTypes = {
  title: PropTypes.string,
  logo: PropTypes.shape({
    display: PropTypes.bool.isRequired,
    path: PropTypes.string,
  }).isRequired,
  socials: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    isHighlight: PropTypes.bool.isRequired,
  }).isRequired),
};
CardHeader.defaultProps = {
  title: '',
  socials: [],
};

export default CardHeader;
