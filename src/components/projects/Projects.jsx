import React from 'react'
import './projects.css'
import IMG1 from '../../assets/herramientas.jpg'
import IMG2 from '../../assets/habilidades.jpg'
import IMG3 from '../../assets/react.svg'

const data =[
  {
    id:1,
    imagen:IMG1,
    titulo:'VZ Online',
    github:"https://github.com/MaximilianoLozon/ProyectoVZOnline",
    demo:"https://maximilianolozon.github.io/ProyectoVZOnline/"
  },
  {
    id:2,
    imagen:IMG2,
    titulo:'My Self',
    github:"https://github.com/MaximilianoLozon/portfolio-maxi-vite",
    demo:"https://maximilianolozon.github.io/portfolio-maxi-vite/"
  },
  {
    id:3,
    imagen:IMG3,
    titulo:'Contador de clics',
    github:"https://github.com/MaximilianoLozon/contador-de-clics",
    demo:"https://maximilianolozon.github.io/contador-de-clics/"
  },
  {
    id:4,
    imagen:IMG3,
    titulo:'Calculadora',
    github:"https://github.com/MaximilianoLozon/calculadora",
    demo:"https://maximilianolozon.github.io/calculadora/"
  }
  
]

const Projects = () => {
  return (
    <section id="projects">
      <h5>my recent works</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {
          data.map(({id,imagen,titulo,github,demo}) =>{
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                 <img src={imagen} alt={titulo} />
                 </div>
                 <h3>{titulo}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target={'_blank'}>Github</a>
                <a href={demo} className='btn btn-primary' target={'_blank'}>Live Demo</a>
              </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects