import React from 'react'
import { Icon } from '@iconify/react';


const CardPromo = ({ img, name }) => {
    return (
        <article className="c-card-promo">
            <img className="c-card-promo__img" src={img} alt="Image" />
            <div className="c-card-promo__button-group">
                <button className="c-card-promo__btn"><Icon icon="bxs:plane" /></button>
                <button className="c-card-promo__btn"><Icon icon="bxs:car" /></button>
            </div>
            <h1 className="c-card-promo__city">{name}</h1>
        </article>
    )
}

export default CardPromo