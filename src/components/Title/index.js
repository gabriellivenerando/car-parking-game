import React from 'react';
import './title.css'

const Title = ({ className, text }) => {
    return (
        <>
            <h2 className={className}>{text}</h2>
        </>
    ) 
}

export default Title;