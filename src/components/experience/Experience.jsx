import React from 'react'
import './experience.css'
import {TfiCheckBox} from 'react-icons/tfi'

const Experience = () => {
  return (
    <section id="experience">
      <h5>what skills i have</h5>
      <h2>my experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend development</h3>
          <div className="experience__container">
            <article className='experience__details'>
             <TfiCheckBox/>
             <div>
              <h4>HTML</h4>
             <small className='text-ligth'>Experienced</small>
             </div>
            </article>
            <article className='experience__details'>
             <TfiCheckBox/>
             <div>
               <h4>CSS</h4>
              <small className='text-ligth'>Intermediate</small>
             </div>
            </article>
            <article className='experience__details'>
             <TfiCheckBox/>
             <div>
              <h4>Javascript</h4>
             <small className='text-ligth'>Experienced</small>
             </div>
            </article>
            <article className='experience__details'>
             <TfiCheckBox/>
             <div>
              <h4>React JS</h4>
             <small className='text-ligth'>Experienced</small>
             </div>
            </article>
            <article className='experience__details'>
             <TfiCheckBox/>
             <div>
              <h4>Bootstrap</h4>
             <small className='text-ligth'>Intermediate</small>
             </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend development</h3>
          <div className="experience__container">
            <article className='experience__details'>
             <TfiCheckBox/>
             <div>
              <h4>MySQL</h4>
             <small className='text-ligth'>Experienced</small>
             </div>
            </article>
            <article className='experience__details'>
             <TfiCheckBox/>
             <div>
               <h4>Node JS</h4>
             <small className='text-ligth'>Experienced</small>
             </div>
            </article>
          </div>
        </div>    
      </div>
    </section>
  )
}

export default Experience