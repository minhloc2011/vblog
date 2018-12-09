import React, { Component } from 'react';
import Card from 'Components/Card/Card';

class MainLogin extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-md-4 ml-auto mr-auto">
          <div className="card card-login card-plain">
            <form className="form" method="" action="">
              <Card />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default MainLogin;
