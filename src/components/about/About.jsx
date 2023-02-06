import React from 'react'
import './about.css'
import Me from '../../assets/me-about.jpg'

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
                    <p>
                    Soy Maxi, de la patagonia Argentina, adepto a la tecnología, el fútbol, la buena música, el mate, el asado 
                    y pasar el tiempor con familia y amigos! Mi sueño es poder viajar por todo el mundo y recorrer cada rincón del mismo.

                    Desarrollador, especializandome en front end, en busca de mi primera oportunidad en el mundo it.
                    Soy una persona que aprende rápido, enfocado y capaz de adaptarme a entornos
                    cambiantes. Busco aplicar mis conocimientos en el ámbito profesional para contribuir en
                    su empresa, Siempre destaco por mi compañerismo y compromiso con el trabajo y los grupos.
                    </p>
                    <a href="#contact" className='btn'>Contact me</a>
                </div>
            </div>
        </section>
    )
}
export default About