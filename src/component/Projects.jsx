import React from 'react'
import image_1 from '../assets/images/img-1.jpg'
import image_2 from '../assets/images/img-2.jpg'
import image_3 from '../assets/images/img-3.jpg'
import image_4 from '../assets/images/img-4.jpg'
const Projects = () => {
  return (
    <section className='projects mt-[80] lg:mt-[200px] z-20 '>
      <div className="project__grid grid grid-cols-1 lg:grid-cols-2 gap-[105px]">
        <div className="w-full max-w-[550px] h-full mx-auto">
          <img src={image_2} alt="Project 1" />
        </div>

        <div className="w-full max-w-[550px] h-full mx-auto">
          <img src={image_3} alt="Project 1" />
        </div>

        <div className="w-full max-w-[550px] h-full mx-auto">
          <img src={image_1} alt="Project 1" />
        </div>

        <div className="w-full max-w-[550px] h-full mx-auto">
          <img src={image_4} alt="Project 1" />
        </div>
      </div>

      
      
    </section>
  )
}

export default Projects
