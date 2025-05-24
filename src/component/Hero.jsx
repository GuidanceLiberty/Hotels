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
    <section className="relative z-20 bg-white dark:bg-primary transition-colors duration-300">
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
              className="w-full h-full bg-center bg-cover flex items-center justify-center bg-fixed relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Dark mode overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 dark:bg-opacity-60 transition-all duration-300"></div>

              {/* Slide content */}
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
    </section>
  )
}

export default Hero
