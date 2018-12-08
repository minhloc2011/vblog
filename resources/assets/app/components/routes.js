import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './Page/Login/LoginPage';
import RegistrationPage from './Page/Registration/RegistrationPage';

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/registration" component={RegistrationPage} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
