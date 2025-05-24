import React, { useEffect } from 'react';
import theme_1 from '../assets/hero/theme-1.jpeg';
import theme_2 from '../assets/hero/theme-2.jpeg';
import theme_3 from '../assets/hero/theme-3.jpeg';
import theme_4 from '../assets/hero/theme-4.jpeg';
import theme_5 from '../assets/hero/theme-5.jpeg';
import theme_6 from '../assets/hero/theme-6.jpeg';
import theme_7 from '../assets/hero/theme-7.jpeg';
import theme_8 from '../assets/hero/update-1.jpg';
import theme_9 from '../assets/hero/update-4.jpg';

import 'aos/dist/aos.css';
import AOS from 'aos';

const Theme = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="bg-accent dark:bg-primary mb-0 pb-0 transition-colors duration-300">
      <div className="pt-32 text-center text-white dark:text-white">
        <h2 className="font-bold text-2xl sm:text-4xl lg:text-5xl mb-8">@newguidance_hotel_theme</h2>
      </div>

      <div className="project__grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 p-4 lg:p-8">
        {[theme_1, theme_2, theme_3, theme_4, theme_5, theme_6, theme_7, theme_8, theme_9].map((img, i) => (
          <div
            key={i}
            data-aos={['zoom-in', 'zoom-out', 'flip-right', 'slide-left', 'fade-up'][i % 5]}
            className="w-full h-[350px] lg:h-[400px] relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
          >
            <img
              src={img}
              alt={`Theme ${i + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Theme;
