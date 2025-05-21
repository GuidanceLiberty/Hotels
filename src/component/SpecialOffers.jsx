import React from 'react'
import img_1 from '../assets/images/img-8.jpg'
import img_2 from '../assets/images/img-7.jpg'
import img_3 from '../assets/images/img-6.jpg'
import img_4 from '../assets/images/img-10.jpg'
import { motion } from 'framer-motion'


const SpecialOffers = () => {
  return (
    <section className='bg-accent'>
        <div className="pt-32 text-white">
            <h1 className=' flex items-center justify-center font-bold text-sm'>GRAB IT NOW</h1>
            <h2 className=' flex items-center justify-center font-semibold text-4xl '>Special Offers</h2>
        </div>

            <div className="project__grid grid grid-cols-1 lg:grid-cols-2 gap-2">
                <div className="w-full h-[600] relative overflow-hidden rounded-none lg:rounded-2xl shadow-lg mt-8 ">
                    <img src={img_1} alt="holiday escape" className='w-full h-full object-cover' />
                    
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-8 text-white">
                        <h2 className='text-3xl font-semibold mb-3 flex items-center justify-center'>Holiday Escape</h2>
                        <p className=' mb-5 max-w-2xl flex items-center justify-center mx-auto text-2xl'>
                            Treat yourself to a holiday retreat before the year ends. Enjoy festive discounts and cozy accommodations for the perfect winter getaway.
                        </p>

                        <button className=''>VIEW DETAILS</button>
                    </div>
                </div>


                <div className="w-full h-[600] relative overflow-hidden rounded-none lg:rounded-2xl shadow-lg mt-8">
                    <img src={img_2} alt="holiday escape" className='w-full h-full object-cover' />
                    
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-8 text-white">
                        <h2 className='text-3xl font-semibold mb-3 flex items-center justify-center'>Year-End Special</h2>
                        <p className=' mb-5 max-w-2xl flex items-center justify-center mx-auto text-2xl'>
                            End the year on a high note with unbeatable savings. Book your year-end escape and enjoy extra discounts, free upgrades, and more!
                        </p>

                        <button className=''>VIEW DETAILS</button>
                    </div>
                </div>


            <div className="w-full h-[600] relative overflow-hidden rounded-none lg:rounded-2xl shadow-lg mt-8 mb-8">
            <img src={img_3} alt="holiday escape" className='w-full h-full object-cover' />
            
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-8 text-white">
                <h2 className='text-3xl font-semibold mb-3 flex items-center justify-center'>New Year Special</h2>
                <p className=' mb-5 max-w-2xl flex items-center justify-center mx-auto text-2xl'>
                    Start the year with a fresh getaway! Enjoy exclusive discounts and special perks on all bookings made for january. New year, new memories
                </p>

                 <button className=''>VIEW DETAILS</button>
                </div>
            </div>


            <div className="w-full h-[600] relative overflow-hidden rounded-none lg:rounded-2xl shadow-lg mt-8 mb-8">
            <img src={img_4} alt="holiday escape" className='w-full h-full object-cover' />
            
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-8 text-white">
                <h2 className='text-3xl font-semibold mb-3 flex items-center justify-center'>Special Memories</h2>
                <p className=' mb-5 max-w-2xl flex items-center justify-center mx-auto text-2xl'>
                    Start creating New memories with love ones. Enjoy exclusive discounts and special perks on all bookings made just for you. Cheers to a better comfort here.
                </p>

                <button className=''>VIEW DETAILS</button>
                </div>
            </div>
      </div>
    </section>
  )
}

export default SpecialOffers

