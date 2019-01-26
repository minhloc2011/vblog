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
  tag: 'input',
};

class TextInput extends React.Component {
  render() {
    const {
      tag: Tag,
      variant,
      className,
      cssModule,
      ...attributes
    } = this.props;

    const type = 'text';

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

TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;

export default TextInput;
