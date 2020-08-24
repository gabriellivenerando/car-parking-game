import React from 'react';
import './titleGame.css'

const TitleGame = ({ className, span }) => {
    return (
        <div>
            <p className={className}>Estacione os carros nas vagas disponíveis com <span>{span}</span></p>
        </div>
    )
}

export default TitleGame;