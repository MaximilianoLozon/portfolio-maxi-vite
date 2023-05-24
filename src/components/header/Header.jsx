import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
      
        <div className='grid__content'>
          <h5>Hello i am</h5>
          <h1>Maximiliano Lozon</h1>
          <h5 className="tex-ligth">Developer</h5>
          <CTA/>
        </div>
        <HeaderSocials/>
      </div>
    </header>
  )
}

export default Header