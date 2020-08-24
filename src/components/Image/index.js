import React from 'react';
import './image.css'

const Image = ({className, onClick, src, alt}) =>{
    return(
       <div className={className}>
           <img onClick={onClick} src={src} alt={alt}/>
       </div>
    )
}

export default Image;