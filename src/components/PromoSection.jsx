import React from 'react'
import fondo from '../assets/promo.png'

import CardPromo from './CardPromo';


const PromoSection = () => {
  return (
    <section className="c-promo-section">
      <h1 className="c-promo-section__title">Paquetes imperdibles</h1>
      <div className="c-promo-section__container">

        <div className="c-promo-section__content-card">
          <CardPromo img='https://picsum.photos/768/768' name={"Cali, Colombia"}/>
        </div>

        <div className="c-promo-section__content-card c-promo-section__content-card--right">
           <div className="c-promo-section__content-card c-promo-section__content-card--inside">
           <CardPromo img='https://picsum.photos/300/300' name={"Cali, Colombia"}/>
          </div>

          <div className="c-promo-section__content-card c-promo-section__content-card--inside-down">
            <CardPromo img='https://picsum.photos/330/300' name={"Cali, Colombia"}/>
            <CardPromo img='https://picsum.photos/304/300' name={"Cali, Colombia"}/>
          </div>
        </div>

      </div>

    </section>
  )
}
/*  
  */
export default PromoSection