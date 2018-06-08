// @flow
import React, { PureComponent } from 'react';
import cx from 'classnames';

import './Button.scss';

export default class Button extends PureComponent {
  render() {
    const { children, className, disabled, shadow, size, width, ...restProps } = this.props;

    const classNames = cx({
      'bb-button': true,
      'bb-button--disabled': disabled,
      'bb-button--decorated': shadow,
      [`bb-button--${size}`]: size,
      [`bb-button--${width}`]: width,
      [className]: !!className,
    });

    const buttonProps = {
      ...restProps,
      className: classNames,
    };

    return (
      <button {...buttonProps}>
        {children}
      </button>
    );
  }
}
