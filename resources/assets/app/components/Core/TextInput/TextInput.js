import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from 'App/utils/utils';
import Input from '../Input/Input';

const TextInput = (props) => {
  const {
    className,
    cssModule,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
  ), cssModule);

  return (
    <Input type="text" {...attributes} className={classes} />
  );
};

TextInput.propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.shape({}),
};

export default TextInput;
