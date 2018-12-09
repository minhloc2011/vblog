import React, { Component } from 'react';

class CardBody extends Component {
  render() {
    return (
      <div className="card-body">
        <div className="input-group no-border input-lg">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="now-ui-icons users_circle-08" />
            </span>
          </div>
          <input type="text" className="form-control" placeholder="First Name..." />
        </div>
        <div className="input-group no-border input-lg">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="now-ui-icons text_caps-small" />
            </span>
          </div>
          <input type="text" placeholder="Last Name..." className="form-control" />
        </div>
      </div>
    );
  }
}
export default CardBody;
