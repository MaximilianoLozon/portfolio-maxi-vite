import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'


const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>maxi.lozon@gmail.com</h5>
            <a href="mailto:maxi.lozon@gmail.com" target={'_blank'}>Send a mail</a>
          </article>
          <article className='contact__option'>
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>text me</h5>
            <a href="https://api.whatsapp.com/send?phone=+5492364620580"target={'_blank'}>Send a text</a>
          </article>
          <article className='contact__option'>
            <AiFillFacebook className='contact__option-icon'/>
            <h4>Facebook</h4>
            <h5>by messenger</h5>
            <a href="https://m.me/maxi.lozon/"target={'_blank'}>Send a text</a>
          </article>
        </div>
        {/*end of the contact options*/}
        <form action="">
          <input type="text" name='name' placeholder='Your fullname' required />
          <input type="email" name="email" placeholder='Your email' required />
          <textarea name='message' rows="7" placeholder='Your message' required></textarea>
          <button type='submit'className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact