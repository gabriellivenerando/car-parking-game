import React from 'react';
import './mainTitle.css'

const MainTitle = ({className, title}) =>{
    return(
       <>
        <h1 className={className}>{title}</h1>
       </>
    )
}

export default MainTitle;