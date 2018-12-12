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

    return (
      <div>
        <Card variant="card card-login card-plain">
          <form className="form" method="" action="">
            <CardHeader logo={logoable} />
            <CardBody />
            <CardFooter>
              <a href="#pablo" className="btn btn-primary btn-round btn-lg btn-block">Get Started</a>
              <div className="pull-left">
                <h6>
                  <a href="/registration" className="link">Create Account</a>
                </h6>
              </div>
              <div className="pull-right">
                <h6>
                  <a href="#pablo" className="link">Forgot Password?</a>
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
