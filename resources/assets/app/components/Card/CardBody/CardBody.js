import React from 'react';
import InputGroup from 'Components/InputGroup/InputGroup';
import Email from 'Components/Core/Email/Email';
import Password from 'Components/Core/Password/Password';

class CardBody extends React.Component {
  render() {
    return (
      <div className="card-body">
        <InputGroup size="lg" className="no-border">
          <InputGroup leftIcon>
            <InputGroup text>
              <i className="fas fa-at" />
            </InputGroup>
          </InputGroup>
          <Email />
        </InputGroup>
        <InputGroup size="lg" className="no-border">
          <InputGroup leftIcon>
            <InputGroup text>
              <i className="fas fa-key" />
            </InputGroup>
          </InputGroup>
          <Password placeholder="Password" />
        </InputGroup>
      </div>
    );
  }
}
export default CardBody;
