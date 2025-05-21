import React from 'react'
import heroImg from '../assets/hero/hero-2.jpg'





const Hero = () => {
  return (
    <section className='hero h-[640px] bg-center bg-no-repeat bg-fixed relative z-20 mt-7 mb-10'
    style={{backgroundImage: `url(${heroImg})`, }}>
      <div className="container mx-auto h-full flex items-center justify-center">
        <div className="hero__text">
          <h1 className='text-[2.3rem] md:text-[3.5rem] sm:text-[2.3rem] font-b text-center'>Holiday Bliss Await You</h1>

          <p className='mb-8 text-[1.1rem] text-center mt-8 text-gray-800 font-bold'>
            immerse yourself in the epitome of luxury at New-Guidance, your premier destination in Lagos.
            Our hotel redefines elegance and comfort, offering an equisite escap for discerning travels.
          </p>

          <button className='btn btn-primary mx-auto lg-mx-0 bg-accent text-white ml-4'>
            BOOK YOUR STAY
          </button>
        </div>
      </div>

      

    </section>
  )
}

export default Hero
