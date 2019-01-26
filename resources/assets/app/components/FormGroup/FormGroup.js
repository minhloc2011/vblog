import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from 'App/utils/utils';

const propTypes = {
  tag: tagPropType,
  variant: PropTypes.oneOf(['success', 'danger']),
  className: PropTypes.string,
  cssModule: PropTypes.shape({}),
};

const defaultProps = {
  tag: 'div',
};

const FormGroup = (props) => {
  const {
    tag: Tag,
    variant,
    className,
    cssModule,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'form-group',
    variant ? `has-${variant}` : false,
  ), cssModule);

  return (
    <Tag className={classes} {...attributes} />
  );
};

FormGroup.propTypes = propTypes;
FormGroup.defaultProps = defaultProps;

export default FormGroup;
