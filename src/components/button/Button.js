// @flow
import React, { PureComponent } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import './Button.scss';

type Props = {
  children: React.Node,
  className?: string,
  device: string,
  type: string,
  shadow: boolean,
  size: string,
  width: string,
  restProps: any,
};

/**
 * Button Component.
 * @param {props} props The new component properties.
 * @returns {React$Element<any>} HTML markup for the component.
 */
export default class Button extends PureComponent<Props> {
  /**
   * Renders the component.
   * @returns {React$Element<any>} HTML markup for the component.
   */
  render() {
    const {
      children,
      className,
      device,
      type,
      shadow,
      size,
      width,
      ...restProps
    } = this.props;

    const classNames = cx({
      'bb-button': true,
      'bb-button--full-width': device === 'mobile',
      'bb-button--decorated': shadow,
      [`bb-button--${type}`]: type,
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

Button.propTypes = {
  /** The type of Button */
  type: PropTypes.oneOf(['primary', 'secondary', 'default']),
  /** Button size */
  size: PropTypes.oneOf(['tiny', 'normal', 'big']),
  /** Additional class names to be appended to the element */
  className: PropTypes.string,
  /** Styling according to the device */
  device: PropTypes.string,
  /** The button children */
  children: PropTypes.node,
};

Button.defaultProps = {
  size: 'normal'
};
