import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import hero_3 from '../assets/hero/hero-3.jpg';
import Room_1 from '../assets/hero/hotel-1.jpeg';
import Room_2 from '../assets/hero/hotel-2.jpeg';
import Room_3 from '../assets/hero/hotel-3.jpg';
import Room_4 from '../assets/hero/hotel-4.jpg';
import Room_5 from '../assets/hero/hotel-5.jpg';
import Room_6 from '../assets/hero/hotel-6.jpg';

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
];

const Hero = () => {
  return (
    <section className="relative z-20 bg-white dark:bg-primary transition-colors duration-300">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent dark:from-black/90 dark:via-black/60 dark:to-transparent transition-all duration-500"></div>

              <div className="relative z-10 max-w-4xl text-center px-6 sm:px-12">
                <h1 className="text-4xl sm:text-6xl font-extrabold text-white drop-shadow-lg mb-6 animate-fade-in-up">
                  {slide.title}
                </h1>
                {slide.text && (
                  <p className="text-lg sm:text-2xl text-white font-semibold drop-shadow-md mb-10 max-w-3xl mx-auto animate-fade-in-up delay-200">
                    {slide.text}
                  </p>
                )}
                {/* Use ScrollLink here */}
                <ScrollLink
                  to="accommodation"
                  smooth={true}
                  duration={800}
                  offset={-80} // optional: adjust for fixed header height if any
                  className="inline-block bg-accent hover:bg-accent-hover text-white px-10 py-4 rounded-full shadow-lg transition-transform transform hover:scale-110 duration-300 font-semibold animate-fade-in-up delay-400 cursor-pointer"
                  aria-label="Book your stay"
                >
                  BOOK YOUR STAY
                </ScrollLink>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease forwards;
        }
        .animate-fade-in-up.delay-200 {
          animation-delay: 0.2s;
        }
        .animate-fade-in-up.delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
