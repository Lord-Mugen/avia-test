import CardSlider from './CardSlider'
import { Icon } from '@iconify/react';
import { useRef } from 'react';
import fondo from '../assets/medellin.png';

const Slider = () => {

  const slider = useRef(null)

  const handleScrollLeft = () => {
    slider.current.scrollLeft += 300
  }

  const handleScrollRight = () => {
    slider.current.scrollLeft -= 300
  }

  /* llamada de api   https://jsonplaceholder.typicode.com/users  s*/
 /* const URL = 'https://agenciasenlinea.aviatur.com/aviatur/content.json';
  
  const showData = async ()=>{ 
    const response = await fetch(URL,{mode:'cors'})
     const data = await response.json()
     console.log(data)
  }


  showData() */

  return (
    <div className="c-slider">
      <h1 className="c-slider__title">Vuelos recomendados</h1>
      <button className="c-slider__icon c-slider__icon--left"
        onClick={() => handleScrollRight()}
      >
        <Icon icon="akar-icons:circle-chevron-left-fill" />
      </button>
      <div className="c-slider__cards-container" ref={slider}>

        <CardSlider image={fondo} name='Medellin, Colombia' price='$350.000'/>
        <CardSlider image={fondo} name='Medellin, Colombia' price='$350.000'/>
        <CardSlider image={fondo} name='Medellin, Colombia' price='$350.000'/>
        <CardSlider image={fondo} name='Medellin, Colombia' price='$350.000'/>
        <CardSlider image={fondo} name='Medellin, Colombia' price='$350.000'/>
        <CardSlider image={fondo} name='Medellin, Colombia' price='$350.000'/>

      </div >
      <button className="c-slider__icon c-slider__icon--right" onClick={() => handleScrollLeft()}>
        <Icon icon="akar-icons:circle-chevron-right-fill" />
      </button >

    </div>
  )
}

export default Slider