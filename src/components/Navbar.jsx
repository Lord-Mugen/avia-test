import React from 'react'
import logo from '../assets/logo.png'
import { Icon } from '@iconify/react';

const Navbar = () => {
  return (
    <div>
        <nav className="c-navbar">
          <div className="c-navbar__logo">
            <img src={logo} alt='logo'/>
          </div>
          <div className="c-navbar__icons-container">
            <p><span className="c-icon c-icon--search c-navbar__icon"></span></p>
            <p><Icon icon="bx:user" className="c-icon c-icon--search c-navbar__icon"/></p> 
          </div>
        </nav>
    </div>
  )
}

export default Navbar