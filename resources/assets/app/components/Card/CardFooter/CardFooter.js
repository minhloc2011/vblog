import React, { Component } from 'react';

class CardFooter extends Component {
  render() {
    return (
      <div className="card-footer text-center">
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
      </div>
    );
  }
}
export default CardFooter;
