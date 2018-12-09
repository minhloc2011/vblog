import React, { Component } from 'react';
import logo from 'Images/logo.png';

class CardHeader extends Component {
  render() {
    return (
      <div className="card-header text-center">
        <div className="logo-container">
          <img src={logo} alt="" />
        </div>
      </div>
    );
  }
}
export default CardHeader;
