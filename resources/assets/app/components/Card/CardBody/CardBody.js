import React from 'react';
import TextInput from '../../Core/TextInput/TextInput';
import FormGroup from '../../FormGroup/FormGroup';
import InputGroup from '../../InputGroup/InputGroup';

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
          <TextInput placeholder="First Name..." />
        </InputGroup>
        <InputGroup size="lg" className="no-border">
          <InputGroup leftIcon>
            <InputGroup text>
              <i className="fa fa-user-circle" />
            </InputGroup>
          </InputGroup>
          <TextInput placeholder="Last Name..." />
        </InputGroup>
        <FormGroup variant="success">
          <TextInput variant="success" placeholder="Testing..." />
        </FormGroup>
      </div>
    );
  }
}
export default CardBody;
