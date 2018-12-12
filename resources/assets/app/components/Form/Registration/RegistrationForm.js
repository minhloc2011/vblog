import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RegistrationForm extends Component {
  render() {
    const socialite = [
      { type: 'twitter', href: '#twitter', isHighlight: false },
      { type: 'facebook', href: '#facebook', isHighlight: true },
      { type: 'google', href: '#google', isHighlight: false },
    ];

    return (
      <div>
        Registration Form
      </div>
    );
  }
}
export default RegistrationForm;
