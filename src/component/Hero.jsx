import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import hero_3 from '../assets/hero/hero-3.jpg'
import Room_1 from '../assets/hero/hotel-1.jpeg'
import Room_2 from '../assets/hero/hotel-2.jpeg'
import Room_3 from '../assets/hero/hotel-3.jpg'
import Room_4 from '../assets/hero/hotel-4.jpg'
import Room_5 from '../assets/hero/hotel-5.jpg'
import Room_6 from '../assets/hero/hotel-6.jpg'

const slides = [
  {
    id: 0,
    image: hero_3,
    title: 'Holiday Bliss Awaits You!',
    text: 'Discover the ultimate luxury in our beachfront suites and spa experiences.',
  },
  { id: 1, image: Room_1, title: 'Deluxe Room', text: '' },
  { id: 2, image: Room_2, title: 'Family Suite', text: '' },
  { id: 3, image: Room_3, title: 'Alpine Retreat', text: '' },
  { id: 4, image: Room_4, title: 'Summit Suite', text: '' },
  { id: 5, image: Room_5, title: 'Timber Heaven', text: '' },
  { id: 6, image: Room_6, title: 'Cliffside Chalet', text: '' }
]

const Hero = () => {
  return (
    <section className='relative z-20'>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="w-full h-screen"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-center bg-cover flex items-center justify-center bg-fixed"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="text-center px-6 sm:px-12 max-w-3xl relative z-10">
                <h1 className="text-3xl sm:text-5xl font-extrabold text-white drop-shadow-lg mb-4">
                  {slide.title}
                </h1>
                {slide.text && (
                  <p className="text-lg sm:text-xl text-white font-semibold drop-shadow-md mb-8 max-w-xl mx-auto">
                    {slide.text}
                  </p>
                )}
                <button className="btn bg-accent text-white px-8 py-4 rounded-md shadow-xl transition-transform transform hover:scale-105 duration-300">
                  BOOK YOUR STAY
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation and Pagination dots - optional styling */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between px-6 z-30">
        <button className="bg-white text-black p-2 rounded-full shadow-lg opacity-80 hover:opacity-100 transition">
          &#x2190;
        </button>
        <button className="bg-white text-black p-2 rounded-full shadow-lg opacity-80 hover:opacity-100 transition">
          &#x2192;
        </button>
      </div>
    </section>
  )
}

export default Hero
