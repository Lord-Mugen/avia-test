import React from 'react'
import Navbar from './Navbar'
import Tabs from './Tabs'

const Header = () => {
  return (
    <header className ="c-hero">
      <Navbar />
      <h1 className="c-hero__text">Descubre nuevos destinos.</h1>
      <Tabs />
    </header>
  )
}

export default Header