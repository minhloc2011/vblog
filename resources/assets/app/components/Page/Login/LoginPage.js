import React, { Component } from 'react';
import NavBar from 'Components/Header/NavBar/NavBar';
import MainLogin from 'App/components/MainContainer/MainLogin/MainLogin';
import login from 'Images/login.jpg';

class LoginPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="page-header clear-filter" filter-color="orange">
          <div className="page-header-image" style={{ backgroundImage: `url( ${login} )` }} />
          <div className="content">
            <MainLogin />
          </div>
        </div>
      </div>
    );
  }
}
export default LoginPage;
