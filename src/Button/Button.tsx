import * as React from 'react';
import './style.css';

export interface Props {
  size?: string;
  type?: string;
  plain?: boolean;
  loading?: boolean;
  disabled?: boolean;
  icon?: string;
  nativeType?: string;
}

const Button: React.SFC<Props> = props => {
  const {
    size = 'small',
    type = 'default',
    // plain = false,
    // loading = false,
    disabled = false,
    // icon = '',
    nativeType = 'button',
  } = props;
  const classnames = `nm-button nm-button--${size} nm-button--${type}`;
  return (
    <button className={classnames} type={nativeType} disabled={disabled}>
      {props.children}
    </button>
  );
};

export default Button;
