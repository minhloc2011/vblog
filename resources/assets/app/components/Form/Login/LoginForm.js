import React, { Component } from 'react';
import CardHeader from 'Components/Card/CardHeader/CardHeader';
import CardBody from 'Components/Card/CardBody/CardBody';
import CardFooter from 'Components/Card/CardFooter/CardFooter';
import logo from 'Images/logo.png';
import Card from 'Components/Card/Card';

class LoginForm extends Component {
  render() {
    const logoable = {
      display: true,
      path: logo,
    };
    // const socialite = [
    //   { type: 'twitter', href: '#twitter', isHighlight: false },
    //   { type: 'facebook', href: '#facebook', isHighlight: true },
    //   { type: 'google', href: '#google', isHighlight: false },
    // ];

    return (
      <div>
        <Card variant="card card-login card-plain">
          <form className="form" method="" action="">
            <CardHeader logo={logoable} />
            <CardBody />
            <CardFooter />
          </form>
        </Card>
      </div>
    );
  }
}

export default LoginForm;
