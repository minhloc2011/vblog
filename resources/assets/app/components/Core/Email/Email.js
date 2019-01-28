import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from 'App/utils/utils';
import Input from 'Core/Input/Input';

const Email = (props) => {
  const {
    className,
    cssModule,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
  ), cssModule);

  return (
    <Input type="email" {...attributes} className={classes} placeholder="Email Address" />
  );
};

Email.propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.shape({}),
};

export default Email;
