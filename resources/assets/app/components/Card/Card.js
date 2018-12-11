import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { variant, backgroundColor } = this.props;
    
    return (
      <div className={variant} data-background-color={backgroundColor}>
        {this.props.children}
      </div>
    );
  }
}
Card.propTypes = {
  variant: PropTypes.string,
  backgroundColor: PropTypes.string,
  children: PropTypes.node.isRequired,
};
Card.defaultProps = {
  variant: 'card',
  backgroundColor: null,
};
export default Card;
