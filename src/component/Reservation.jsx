import { RiArrowDownLine } from '@remixicon/react'
import React from 'react'





const Reservation = () => {
  return (
    <section className='py-10 text-center shadow-lg bg-accent-secondary'>
      <div className="shadow-lg bg-white ">
        <h3 className='font-semibold pt-4'>Reservation</h3>
        <p className='text-sm py-2'>Check In</p>
        <p>2025-05-10</p>
        <p className='text-sm py-2'>Check Out</p>
        <p>2025-05-11</p>

        <h4 className='pt-8'>Adult</h4>
        <div className='flex items-center justify-center space-x-6 text-white'>
            <button className='w-16 h-16 bg-accent px-4 py-2 rounded-full mt-2 text-2xl font-semibold'>-</button>
            <button className='w-16 h-16 bg-accent px-4 py-2 rounded-full mt-2 text-2xl font-semibold'>+</button>                     
        </div>

        <h4 className='pt-8'>Children</h4>
        <div className='flex items-center justify-center space-x-6 text-white'>
            <button className='w-16 h-16 bg-accent px-4 py-2 rounded-full mt-2 text-2xl font-semibold'>-</button>
            <button className='w-16 h-16 bg-accent px-4 py-2 rounded-full mt-2 text-2xl font-semibold'>+</button>                     
        </div>

        <button className='bg-accent text-white my-6 rounded-md'>CHECK AVAILABILITY</button>

      </div>
    </section>
  )
}

export default Reservation
