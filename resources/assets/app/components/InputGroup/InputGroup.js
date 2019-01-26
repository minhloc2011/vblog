import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from 'App/utils/utils';

const propTypes = {
  tag: tagPropType,
  leftIcon: PropTypes.bool,
  rightIcon: PropTypes.bool,
  text: PropTypes.bool,
  size: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.shape({}),
};

const defaultProps = {
  tag: 'div',
  leftIcon: false,
  rightIcon: false,
  text: false,
};

const InputGroup = (props) => {
  let {
    tag: Tag,
    leftIcon,
    rightIcon,
    text,
    size,
    className,
    cssModule,
    ...attributes
  } = props;

  const prepend = leftIcon ? 'input-group-prepend' : false;
  const append = rightIcon ? 'input-group-append' : false;
  const textStyle = text ? 'input-group-text' : false;

  const classes = mapToCssModules(classNames(
    className,
    prepend || append || textStyle || 'input-group',
    size ? `input-${size}` : false,
  ), cssModule);

  if (text) {
    Tag = 'span';
  }

  return (
    <Tag className={classes} {...attributes} />
  );
};

InputGroup.propTypes = propTypes;
InputGroup.defaultProps = defaultProps;

export default InputGroup;
