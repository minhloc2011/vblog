import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from 'App/utils/utils';

const propTypes = {
  tag: tagPropType,
  type: PropTypes.string,
  variant: PropTypes.oneOf(['success', 'danger']),
  className: PropTypes.string,
  cssModule: PropTypes.shape({}),
};

const defaultProps = {
  tag: 'input',
  type: 'text',
};

class Input extends React.Component {
  render() {
    const {
      tag: Tag,
      type,
      variant,
      className,
      cssModule,
      ...attributes
    } = this.props;

    const outLineColor = variant ? `form-control-${variant}` : '';

    const classes = mapToCssModules(classNames(
      className,
      'form-control',
      outLineColor,
    ), cssModule);

    return (
      <Tag type={type} {...attributes} className={classes} />
    );
  }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
