/// <reference types="react" />
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
declare const Button: React.SFC<Props>;
export default Button;
