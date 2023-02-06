import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/maxi.lozon/" target={'_blank'}><BsFacebook/></a>
        <a href='https://www.linkedin.com/in/maximiliano-lozon/' target={'_blank'}><BsLinkedin/></a>
        <a href="https://github.com/MaximilianoLozon" target={'_blank'}><BsGithub/></a>
      </div>

      <div className="footer__copyrigth">
        <small>&copy: Maxi Lozon Dev</small>
      </div>
    </footer>
  )
}

export default Footer