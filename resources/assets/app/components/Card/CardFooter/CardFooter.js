import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardFooter extends Component {
  render() {
    return (
      <div className="card-footer text-center">
        {this.props.children}
      </div>
    );
  }
}
CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
};
export default CardFooter;
