import React from 'react'
import theme_1 from '../assets/images/theme-1.jpeg'
import theme_2 from '../assets/images/theme-2.jpeg'
import theme_3 from '../assets/images/theme-3.jpeg'
import theme_4 from '../assets/images/theme-4.jpeg'
import theme_5 from '../assets/images/theme-5.jpeg'
import theme_6 from '../assets/images/theme-6.jpeg'
import theme_7 from '../assets/images/theme-7.jpeg'
import theme_8 from '../assets/images/theme-8.jpeg'


const Theme = () => {
  return (
    <section className='bg-accent'>
        <div className="pt-32 text-white">
       
            <h2 className=' flex items-center justify-center font-bold lg:text-4xl '>@newguidance_hotel_theme</h2>
        </div>

        <div className="project__grid grid grid-cols-1 lg:grid-cols-2 lg:gap-2">
                <div  className="w-full h-[600] relative overflow-hidden rounded-none lg:rounded-2xl shadow-lg mt-8 ">
                    <img src={theme_1} alt="holiday escape" className='w-full h-full object-cover' />
                    
                </div>

                <div  className="w-full h-[600] relative overflow-hidden rounded-none lg:rounded-2xl shadow-lg lg:mt-8 ">
                    <img src={theme_2} alt="holiday escape" className='w-full h-full object-cover' />
                    
                </div>

                <div  className="w-full h-[600] relative overflow-hidden rounded-none lg:rounded-2xl shadow-lg">
                    <img src={theme_3} alt="holiday escape" className='w-full h-full object-cover' />
                    
                </div>
                

                <div  className="w-full h-[600] relative overflow-hidden rounded-none lg:rounded-2xl shadow-lg ">
                    <img src={theme_4} alt="holiday escape" className='w-full h-full object-cover' />
                    
                </div>

                <div  className="w-full h-[600] relative overflow-hidden rounded-none lg:rounded-2xl shadow-lg  ">
                    <img src={theme_5} alt="holiday escape" className='w-full h-full object-cover' />
                    
                </div>

                <div  className="w-full h-[600] relative overflow-hidden rounded-none lg:rounded-2xl shadow-lg  ">
                    <img src={theme_6} alt="holiday escape" className='w-full h-full object-cover' />
                    
                </div>

                <div  className="w-full h-[600] relative overflow-hidden rounded-none lg:rounded-2xl shadow-lg ">
                    <img src={theme_7} alt="holiday escape" className='w-full h-full object-cover' />
                    
                </div>

                <div  className="w-full h-[600] relative overflow-hidden rounded-none lg:rounded-2xl shadow-lg sm:pt-0">
                    <img src={theme_8} alt="holiday escape" className='w-full h-full object-cover' />
                    
                </div>
                
      </div>
    </section>
  )
}

export default Theme
