import React, { Component } from 'react';
import LoginForm from 'Components/Form/Login/LoginForm';

class MainLogin extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-md-4 ml-auto mr-auto">
          <LoginForm />
        </div>
      </div>
    );
  }
}
export default MainLogin;
