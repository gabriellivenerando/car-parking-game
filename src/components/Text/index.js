import React from 'react';
import './text.css'

const Text = ({className, text}) =>{
    return(
      <div>
          <p className={className}>{text}</p>
      </div>
    )
}

export default Text;