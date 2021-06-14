import React from 'react';
import './style.css';

const Input = ({ type, ...rest }) => {
    return (
        <>
            <input type={type}  {...rest} />
        </>
    );
}
export default Input;