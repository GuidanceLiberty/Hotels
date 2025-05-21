import React, { useState } from 'react'

const Reservation = () => {
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)

  const increment = (setter, value) => setter(value + 1)
  const decrement = (setter, value) => {
    if (value > 0) setter(value - 1)
  }

  return (
    <section className='py-10 text-center shadow-lg bg-accent-secondary'>
      <div className="shadow-lg bg-white max-w-md mx-auto px-6 py-8 rounded-lg">
        <h3 className='font-semibold text-xl'>Reservation</h3>

        <div className="py-4">
          <p className='text-sm'>Check In</p>
          <p>2025-05-10</p>
          <p className='text-sm mt-4'>Check Out</p>
          <p>2025-05-11</p>
        </div>

        {/* Adults */}
        <h4 className='pt-6 font-semibold'>Adults</h4>
        <div className='flex items-center justify-center space-x-4 text-white mt-2'>
          <button
            onClick={() => decrement(setAdults, adults)}
            className='w-10 h-10 bg-accent rounded-full text-xl font-bold'
          >
            −
          </button>
          <span className="text-black font-medium text-lg">{adults}</span>
          <button
            onClick={() => increment(setAdults, adults)}
            className='w-10 h-10 bg-accent rounded-full text-xl font-bold'
          >
            +
          </button>
        </div>

        {/* Children */}
        <h4 className='pt-6 font-semibold'>Children</h4>
        <div className='flex items-center justify-center space-x-4 text-white mt-2'>
          <button
            onClick={() => decrement(setChildren, children)}
            className='w-10 h-10 bg-accent rounded-full text-xl font-bold'
          >
            −
          </button>
          <span className="text-black font-medium text-lg">{children}</span>
          <button
            onClick={() => increment(setChildren, children)}
            className='w-10 h-10 bg-accent rounded-full text-xl font-bold'
          >
            +
          </button>
        </div>

        <button className='bg-accent text-white mt-6 px-6 py-2 rounded-md hover:bg-accent-dark transition'>
          CHECK AVAILABILITY
        </button>
      </div>
    </section>
  )
}

export default Reservation
