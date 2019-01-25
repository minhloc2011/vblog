import React, { Component } from 'react';
import CardHeader from 'Components/Card/CardHeader/CardHeader';
import CardBody from 'Components/Card/CardBody/CardBody';
import CardFooter from 'Components/Card/CardFooter/CardFooter';
import logoImg from 'Images/logo.png';
import Card from 'Components/Card/Card';
import Button from 'Components/Core/Button/Button';

class LoginForm extends Component {
  render() {
    const logoable = {
      display: true,
      path: logoImg,
    };

    return (
      <div>
        <Card variant="card card-login card-plain">
          <form className="form" method="" action="">
            <CardHeader logo={logoable} />
            <CardBody />
            <CardFooter>
              <Button href="#pablo" size="lg" block round>Log In</Button>
              <div className="pull-left">
                <h6>
                  <Button href="/registration" link>Create Account</Button>
                </h6>
              </div>
              <div className="pull-right">
                <h6>
                  <Button href="#pablo" link>Forgot Password?</Button>
                </h6>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    );
  }
}

export default LoginForm;
