import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from 'App/utils/utils';

const propTypes = {
  tag: tagPropType,
  'aria-label': PropTypes.string,
  block: PropTypes.bool,
  round: PropTypes.bool,
  outLine: PropTypes.bool,
  iconOnly: PropTypes.bool,
  size: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.shape({}),
  link: PropTypes.bool,
};

const defaultProps = {
  tag: 'button',
  variant: 'primary',
  block: false,
  round: false,
  outLine: false,
  iconOnly: false,
  link: false,
};

class Button extends React.Component {
  render() {
    let {
      tag: Tag,
      'aria-label': ariaLabel,
      block,
      round,
      outLine,
      iconOnly,
      size,
      variant,
      cssModule,
      className,
      link,
      ...attributes
    } = this.props;

    const btnBackgroundColor = variant === 'default' ? '' : `btn-${variant}`;

    const classes = mapToCssModules(classNames(
      className,
      { link },
      link || 'btn',
      link || btnBackgroundColor,
      size ? `btn-${size}` : false,
      iconOnly ? 'btn-icon' : false,
      round ? 'btn-round' : false,
      outLine ? 'btn-simple' : false,
      block ? 'btn-block' : false,
    ), cssModule);

    if ((attributes.href && Tag === 'button') || (attributes.href && link)) {
      Tag = 'a';
    }
    
    return (
      <Tag
        type={Tag}
        {...attributes}
        className={classes}
        aria-label={ariaLabel || null}
      />
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
