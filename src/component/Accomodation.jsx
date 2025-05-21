import React from 'react'
import Room_1 from '../assets/images/room-10.jpg'
import Room_2 from '../assets/images/room-11.jpg'
import Room_3 from '../assets/images/room-12.jpg'
import Room_4 from '../assets/images/room-13.jpg'
import Room_5 from '../assets/images/room-9.jpg'
import Room_6 from '../assets/images/room-14.jpg'

const Accomodation = () => {
  return (
    <section className='bg-white mt-8'>
        <div className="">
            <h1 className=' flex items-center justify-center font-bold text-sm  text-accent'>OUR ROOMS</h1>
            <h2 className=' flex items-center justify-center font-semibold text-4xl'>Accomodation</h2>
        </div>

        <div className="project__grid grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 pt-10">

                <div className="w-full h-[600] relative overflow-hidden rounded-none lg:rounded-2xl shadow-lg  ">
                    <img src={Room_1} alt="holiday escape" className='w-full h-full object-cover ' />
                    
                    <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-end p-8 text-white">
                        <p className=''>
                            <h1 className='max-w-2xl flex items-center justify-center mx-auto text-3xl mt-8 font-bold'>Deluxe Room</h1>
                            <h2 className='flex justify-center gap-4 text-sm'>
                                <span>2 Guest</span>
                                <span>35 Feets Size</span>
                            </h2>
                        </p>
                        
                    </div>
                </div>


                <div className="w-full h-[600] relative overflow-hidden rounded-none lg:rounded-2xl shadow-lg">
                    <img src={Room_2} alt="holiday escape" className='w-full h-full object-cover' />
                    
                    <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-end p-8 text-white">
                        <p className=''>
                            <h1 className='max-w-2xl flex items-center justify-center mx-auto text-3xl mt-8 font-bold'>Family Suite</h1>
                            <h2 className='flex justify-center gap-4 text-sm'>
                                <span>2 Guest</span>
                                <span>35 Feets Size</span>
                            </h2>
                        </p>
                        
                    </div>
                </div>


                <div className="w-full h-[600] relative overflow-hidden rounded-none lg:rounded-2xl shadow-lg ">
                    <img src={Room_3} alt="holiday escape" className='w-full h-full object-cover' />
                    
                    <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-end p-8 text-white">
                        <p className=''>
                            <h1 className='max-w-2xl flex items-center justify-center mx-auto text-3xl mt-8 font-bold'>Alpine Retreat</h1>
                            <h2 className='flex justify-center gap-4 text-sm'>
                                <span>2 Guest</span>
                                <span>35 Feets Size</span>
                            </h2>
                        </p>
                        
                    </div>
                </div>


                 <div className="w-full h-[600] relative overflow-hidden rounded-none lg:rounded-2xl shadow-lg ">
                    <img src={Room_4} alt="holiday escape" className='w-full h-full object-cover' />
                    
                    <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-end p-8 text-white">
                        <p className=''>
                            <h1 className='max-w-2xl flex items-center justify-center mx-auto text-3xl mt-8 font-bold'>Summit Suite</h1>
                            <h2 className='flex justify-center gap-4 text-sm'>
                                <span>2 Guest</span>
                                <span>35 Feets Size</span>
                            </h2>
                        </p>
                        
                    </div>
                </div>


                 <div className="w-full h-[600] relative overflow-hidden rounded-none lg:rounded-2xl shadow-lg ">
                    <img src={Room_5} alt="holiday escape" className='w-full h-full object-cover' />
                    
                    <div className="absolute inset-0 bg-black  bg-opacity-40 flex flex-col justify-end p-8 text-white">
                        <p className=''>
                            <h1 className='max-w-2xl flex items-center justify-center mx-auto text-3xl mt-8 font-bold'>Timber Heaven</h1>
                            <h2 className='flex justify-center gap-4 text-sm'>
                                <span>2 Guest</span>
                                <span>35 Feets Size</span>
                            </h2>
                        </p>
                        
                    </div>
                </div>


                 <div className="w-full h-[600] relative overflow-hidden rounded-none lg:rounded-2xl shadow-lg">
                    <img src={Room_6} alt="holiday escape" className='w-full h-full object-cover' />
                    
                    <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-end p-8 text-white">
                        <p className=''>
                            <h1 className='max-w-2xl flex items-center justify-center mx-auto text-3xl mt-8 font-bold'>Cliffside Chalet</h1>
                            <h2 className='flex justify-center gap-4 text-sm'>
                                <span>2 Guest</span>
                                <span>35 Feets Size</span>
                            </h2>
                        </p>
                        
                    </div>
                </div>
     
      </div>
    </section>
  )
}

export default Accomodation
