import React from 'react'
import city from '../assets/medellin.png'

const CardSlider = ({image, name, price,}) => {
  return (
    <div className="c-card">
        <div className="c-card__image-container">
            <img src={image} alt="city" className="c-card__image"/>
        </div>
        <div className="c-card__data" >
            <h3 className="c-card__name">{name}</h3>
            <a href="http://" className="c-card__price">{price} 
              <span className="c-card__coin">COP</span>
            </a> 
        </div>
        
    </div>
  )
}

export default CardSlider