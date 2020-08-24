import React from 'react';
import './paragraph.css'

const Paragraph = ({className, text}) =>{
    return(
      <div className="paragraph__container">
          <p className={className}>{text}</p>
      </div>
    )
}

export default Paragraph;