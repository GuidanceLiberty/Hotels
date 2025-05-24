import React from 'react'
import Room_1 from '../assets/hero/hotel-1.jpeg'
import Room_2 from '../assets/hero/hotel-2.jpeg'
import Room_3 from '../assets/hero/hotel-3.jpg'
import Room_4 from '../assets/hero/hotel-4.jpg'
import Room_5 from '../assets/hero/hotel-5.jpg'
import Room_6 from '../assets/hero/hotel-6.jpg'

const rooms = [
  { image: Room_1, title: 'Deluxe Room' },
  { image: Room_2, title: 'Family Suite' },
  { image: Room_3, title: 'Alpine Retreat' },
  { image: Room_4, title: 'Summit Suite' },
  { image: Room_5, title: 'Timber Heaven' },
  { image: Room_6, title: 'Cliffside Chalet' },
]

const Accomodation = () => {
  return (
    <section className="bg-white dark:bg-primary text-black dark:text-white transition-colors duration-300 mt-8 px-4 lg:px-16 py-12">
      <div className="text-center mb-12">
        <h1 className="text-accent font-bold text-sm tracking-widest">OUR ROOMS</h1>
        <h2 className="text-4xl font-semibold text-gray-800 dark:text-white mt-2">Accommodation</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg group transform transition-transform duration-300 hover:scale-[1.02]"
          >
            <img
              src={room.image}
              alt={room.title}
              className="w-full h-full object-cover group-hover:brightness-75 transition duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 dark:bg-opacity-60 flex flex-col justify-end p-6 text-white">
              <h3 className="text-2xl font-bold text-center">{room.title}</h3>
              <div className="flex justify-center gap-4 mt-2 text-sm text-gray-200">
                <span>2 Guests</span>
                <span>35 ft²</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Accomodation
