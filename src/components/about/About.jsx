import React from 'react'
import './about.css'
import Me from '../../assets/me-about.svg'

const About = () =>{
    return(
        <section id="about">
            <h5>get to know</h5>
            <h2>About me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={Me} alt="about image" />
                    </div>
                </div>
                <div className="about__me text">
                    <p>Hola soy Maxi, adepto a la tecnología, el fútbol, el mate, el asado y pasar el tiempo con mi familia y mis amigos! </p>
                    <p>Mi meta es poder trabajar de lo que me gusta para entre otras cosas cumplir el sueño de poder viajar por el mundo. </p>
                    <p>Soy desarrollador web, en busca de mi primera oportunidad en el mundo it. Me considero una persona autodidacta, que aprende rápido, enfocado y capaz de adaptarme a entornos cambiantes. Busco aplicar mis conocimientos en el ámbito profesional para contribuir en la industria.</p> 
                    <a href="#contact" className='btn'>Contact me</a>
                </div>
            </div>
        </section>
    )
}
export default About