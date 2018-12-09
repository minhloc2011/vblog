import React, { Component } from 'react';
import CardHeader from 'Components/Card/CardHeader/CardHeader';
import CardBody from 'Components/Card/CardBody/CardBody';
import CardFooter from 'Components/Card/CardFooter/CardFooter';

class Card extends Component {
  render() {
    return (
      <div>
        <CardHeader />
        <CardBody />
        <CardFooter />
      </div>
    );
  }
}
export default Card;
