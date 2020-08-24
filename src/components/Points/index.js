import React from 'react';
import Image from '../Image/'
import './points.css'

const Points = ({counter}) => {
    return (
        <div className="points__container">
            <Image/>
            <div className="points">{counter}</div>
        </div>
    )
}

export default Points;