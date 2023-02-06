import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.facebook.com/maxi.lozon/" target={'_blank'}><BsFacebook/></a>
        <a href='https://www.linkedin.com/in/maximiliano-lozon/' target={'_blank'}><BsLinkedin/></a>
        <a href="https://github.com/MaximilianoLozon" target={'_blank'}><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials