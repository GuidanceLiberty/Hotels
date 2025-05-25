import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { RiStarFill } from '@remixicon/react';
import 'swiper/css';

const testimonials = [
  {
    name: 'Sophia Adewale',
    image: 'https://i.pravatar.cc/100?img=32',
    quote:
      'New Guidance Hotel made my vacation unforgettable. The staff were incredibly friendly, and the rooms were so luxurious. Highly recommended!',
  },
  {
    name: 'James Okoro',
    image: 'https://i.pravatar.cc/100?img=56',
    quote:
      'Everything was perfect. The food, the spa, the view—this hotel redefines hospitality. I will definitely come back!',
  },
  {
    name: 'Fatima Yusuf',
    image: 'https://i.pravatar.cc/100?img=12',
    quote:
      'From the moment I arrived, I felt like royalty. Their attention to detail is outstanding. Five stars is not enough!',
  },
];

const Testimonial = () => {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-primary text-black dark:text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-6 text-accent">What Our Guests Say</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Our guests' satisfaction means the world to us. Here's what some of them had to say about their stay.
        </p>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-50 dark:bg-secondary p-6 rounded-lg shadow-lg transition hover:shadow-xl h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-accent"
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-primary dark:text-white">{testimonial.name}</h4>
                    <div className="flex text-accent">
                      {[...Array(5)].map((_, i) => (
                        <RiStarFill key={i} className="text-sm" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-200 italic flex-grow">&ldquo;{testimonial.quote}&rdquo;</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
