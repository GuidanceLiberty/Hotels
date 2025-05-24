import React from 'react';
import Room_A from '../assets/hero/img-11.jpg';
import { RiStarFill } from '@remixicon/react';

const AboutUs = () => {
  return (
    <section className="bg-white dark:bg-primary text-black dark:text-white transition-colors duration-300">
      <div className="w-full h-[600px] relative overflow-hidden shadow-lg">
        {/* Background Image */}
        <img
          src={Room_A}
          alt="Holiday escape"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 dark:bg-opacity-60 flex flex-col justify-center px-4 sm:px-8 transition-all duration-300">
          {/* Stars */}
          <div className="flex justify-center items-center text-accent mb-6">
            {[...Array(5)].map((_, i) => (
              <RiStarFill key={i} />
            ))}
          </div>

          {/* Heading */}
          <h1 className="max-w-3xl mx-auto text-center text-xl sm:text-2xl lg:text-3xl font-bold text-white dark:text-white">
            Experience unparalleled luxury and personalized service at
            <span className="text-accent"> New-Guidance Hotel</span>, where
            every stay is a journey into sophistication, comfort, and
            unforgettable memories.
          </h1>

          {/* Name */}
          <h2 className="text-center text-sm mt-6 text-white dark:text-gray-300">
            Rahel Drake
          </h2>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
