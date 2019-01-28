import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from 'App/utils/utils';
import Input from 'Components/Core/Input/Input';

const Password = (props) => {
  const {
    className,
    cssModule,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
  ), cssModule);

  return (
    <Input type="password" {...attributes} className={classes} />
  );
};

Password.propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.shape({}),
};

export default Password;
