import React from 'react'
import Room_A from '../assets/images/img-11.jpg'
import { RiStarFill } from '@remixicon/react'

const AboutUs = () => {
  return (
    <section>
        <div className="w-full h-[600] relative overflow-hidden rounded-none shadow-lg  ">
            <img src={Room_A} alt="holiday escape" className='w-full h-full object-cover' />
                            
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col text-white justify-center ">
                
                    <p className='flex justify-center items-center size-32 text-accent mx-auto mt-28'>
                        <RiStarFill/>
                        <RiStarFill/>
                        <RiStarFill/>
                        <RiStarFill/>
                        <RiStarFill/>
                    </p>
                
                    <h1 className='max-w-2xl lg:text-3xl flex justify-center items-center mx-auto font-bold pl-8 '>Experience unparalled luxury and personalized service at New-Guidance Hotel, where every stay is a journey into sophistication, comfort and unforgatable memories
                    </h1>

                    <h2 className='flex justify-center text-sm mb-4 mt-4'>Rahel Drake</h2>            
            </div>
        </div>
      
    </section>
  )
}

export default AboutUs
