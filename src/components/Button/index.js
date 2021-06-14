import React from 'react';
import './style.css';

const Button = ({ handlerButton, disabled, title, ...rest }) => {
    return (
        <>
            <button onClick={handlerButton} disabled={disabled} {...rest}>{title}</button>
        </>
    );
}
export default Button;