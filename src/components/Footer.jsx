import React from 'react'
import lata from '../assets/lata.png'
import anato from '../assets/anato.png'
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <footer className="c-footer">
      <div className="c-footer__container">
        <div className="c-footer__section">
          <h2 className="c-footer__title">Acerca de nosotros</h2>
          <ul className="c-footer__ul">
            <li className="c-footer__li">FAQ</li>
            <li className="c-footer__li">Conactanos</li>
            <li className="c-footer__li">Sucursales Aviatur</li>
            <li className="c-footer__li">Organizacion Aviatur</li>
            <li className="c-footer__li">Trabaje con nosotros</li>
            <li className="c-footer__li">Premios y certificaciones</li>
            <li className="c-footer__li">Declaracion viajero responsable</li>
            <li className="c-footer__li">Buenas practicas de turismo sostenible</li>
            <li className="c-footer__li">Informacion util para el viajero en Colombia</li>
          </ul>
        </div>
      
        <div className="c-footer__section">
          <h2 className="c-footer__title">Servivio al cliente</h2>
            <ul className="c-footer__ul">
              <li className="c-footer__li">Solicite su cotizacion aqui</li>
              <li className="c-footer__li">Evalue nuestro sitio</li>
              <li className="c-footer__li">Reclamos </li>
              <li className="c-footer__li">Problemas tecnicos</li>
              <li className="c-footer__li">Escribele a Jean Claude Bessudo</li>
            </ul>
        </div>

        <div className="c-footer__section">
          <h2 className="c-footer__title">Otros Productos</h2>
            <ul className="c-footer__ul">
              <li className="c-footer__li">Viajes corporativos</li>
              <li className="c-footer__li">Consolidador de agentes/agencias</li>
              <li className="c-footer__li">Portal de facturacion electronica</li>
              <li className="c-footer__li">Caso Navegante</li>
              <li className="c-footer__li">Tiquetes baratos</li>
              <li className="c-footer__li">Tiquetes baratos</li>
              <li className="c-footer__li">Contenidos Aviatur</li>
              <li className="c-footer__li">Revista Horizontes</li>
            </ul>
        </div>

        <div className="c-footer__section">
          <h2 className="c-footer__title">Otros Servicios</h2>
            <ul className="c-footer__ul">
              <li className="c-footer__li">Avia Tecnologia</li>
              <li className="c-footer__li">Avia Legal</li>
              <li className="c-footer__li">Avia Seguros</li>
              <li className="c-footer__li">Avia Soluciones Hoteleras</li>
              <li className="c-footer__li">Carga y logistica</li>
              <li className="c-footer__li">Contratos de transporte aerolineas</li>
              <li className="c-footer__li">Canal de contenidos RSS</li>
              <li className="c-footer__li">Blog Aviatur</li>
              <li className="c-footer__li">Sitemas de credito</li>
              <li className="c-footer__li">Informacion aerolineas</li>
            </ul>
        </div>
      </div>

      <div className="c-footer__container2">
      <div className="c-footer__section2">
        <div className="c-footer__section2-text-container">
          <p className="c-footer__text">Derechos del pasajero y/o deberes del transportador - SIC - www.rues.org.co -
             Aerocivil - Contra la pornografía infantil - Denuncie situaciones que afectan a menores de 18 años</p>
              <br/>
             <p className="c-footer__text">AVIATUR apoya el trabajo de UNICEF comprometiéndose con la protección de los 
            derechos de las niñas, niños y adolescentes en Colombia y el mundo. Necesitamos también su compromiso. 
            Invierta en el poder de los niños, el valor más rentable de Colombia.</p>
            <br/>
            <p className="c-footer__text">Términos y condiciones del sitio - Política de privacidad y tratamiento de los datos 
            personales - Formulario de reversión de pagos - Todos los derechos reservados
            Derecho de retracto y desistimiento, según Resolución 1209 del 5/25/2015 de la UAEAC.</p>
            <br/>
            <p className="c-footer__text">Aviatur.com 2016</p>
            <br/>
            <p className="c-footer__text">Aviatur INC. - 6316 NW AVE DORAL, FL 33178 - 01 8000 911 555</p>
         </div>
        </div>

        <div className="c-footer__section2">
          <ul className="c-footer__ul2">
              <li className="c-footer__li2"><Icon icon="akar-icons:location" className="c-footer__icon"/>Avenida 19 No. 4 - 62 Bogota, Colombia</li>
              <li className="c-footer__li2"> <p><span className="c-icon c-icon--email c-footer__icon"></span></p>Cliente.com@aviatur.com.co</li>
              <li className="c-footer__li2"><p><span className="c-icon c-icon--call c-footer__icon"></span></p>Bogota 3821616 - 587640</li>
              <li className="c-footer__li2"><p><span className="c-icon c-icon--whatsapp c-footer__icon"></span></p>+5713821616</li>
              <li className="c-footer__li2"><Icon icon="wpf:ask-question" className="c-footer__icon"/>018000911555</li>
              <li className="c-footer__li2"><p><span className="c-icon c-icon--description c-footer__icon"></span></p>NIT: 860.000.018-2.</li>
              <li className="c-footer__li2"><p><span className="c-icon c-icon--corporate c-footer__icon"></span></p>Agencia de viajes Aviatur SAS</li>
              <li className="c-footer__li2"><p><span className="c-icon c-icon--verified c-footer__icon"></span></p>Registro NAcional de Turismo</li>
            </ul>
        </div>

        <div className="c-footer__section2">
          <div className="c-footer__logo-container">
            <img src={lata} alt="" className="c-footer__logo-image"/>
            <img src={anato} alt="" className="c-footer__logo-image"/>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer