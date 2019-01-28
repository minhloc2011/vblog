import React from 'react';
import InputGroup from '../../InputGroup/InputGroup';
import Email from '../../Core/Email/Email';
import Password from '../../Core/Password/Password';

class CardBody extends React.Component {
  render() {
    return (
      <div className="card-body">
        <InputGroup size="lg" className="no-border">
          <InputGroup leftIcon>
            <InputGroup text>
              <i className="now-ui-icons users_circle-08" />
            </InputGroup>
          </InputGroup>
          <Email />
        </InputGroup>
        <InputGroup size="lg" className="no-border">
          <InputGroup leftIcon>
            <InputGroup text>
              <i className="fa fa-user-circle" />
            </InputGroup>
          </InputGroup>
          <Password placeholder="Password" />
        </InputGroup>
      </div>
    );
  }
}
export default CardBody;
