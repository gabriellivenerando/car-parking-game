import React from 'react';
import { Link } from 'react-router-dom';
import './button.css'

const Button = ({ className, onClick, title}) => {
    return (
        <div className={className}>
                <button onClick={onClick}>{title}</button>
        </div>
    )
}

export default Button;