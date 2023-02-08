import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
      
        <div className='grid__content'>
          <div className='izq'>
          <h5>Hello i am</h5>
          <h1>Maxi Lozon</h1>
          <h5 className="tex-ligth">Developer</h5>
          <CTA/>
          </div>
          <div className='der'>
            <div className="me">
              <img src={ME} alt="me" />
            </div>
          </div>
        </div>
        
        <HeaderSocials/>
      </div>
    </header>
  )
}

export default Header