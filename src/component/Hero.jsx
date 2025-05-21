import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import hero_3 from '../assets/hero/hero-3.jpg'
import Room_1 from '../assets/images/room-10.jpg'
import Room_2 from '../assets/images/room-11.jpg'
import Room_3 from '../assets/images/room-12.jpg'
import Room_4 from '../assets/images/room-13.jpg'
import Room_5 from '../assets/images/room-9.jpg'
import Room_6 from '../assets/images/room-14.jpg'

const slides = [
  {
    id: 0,
    image: hero_3,
    title: 'Holiday Bliss Await You!',
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
    <section className='hero relative z-20 mt-0 mb-0'>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="w-full h-screen"
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
            <div
              className='w-full bg-center bg-cover flex items-center justify-center h-[650px] bg-fixed z-20 mt-12'
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="text-center px-4 max-w-2xl">
                <h1 className='text-[2.3rem] md:text-[3.5rem] font-b text-white drop-shadow-md'>
                  {slide.title}
                </h1>
                <p className='mb-8 text-[1.1rem] mt-8 text-white font-bold drop-shadow-md'>
                  {slide.text}
                </p>
                <button className='btn btn-primary bg-accent text-white'>
                  BOOK YOUR STAY
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Optional: You can style or customize navigation icons with Tailwind or custom CSS */}
    </section>
  )
}

export default Hero
