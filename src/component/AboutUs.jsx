import React from 'react';
import Room_A from '../assets/hero/img-11.jpg';

const AboutUs = () => {
  return (
    <section className="bg-white dark:bg-primary text-black dark:text-white">
      <div className="relative w-full h-[600px] overflow-hidden shadow-lg">
        <img
          src={Room_A}
          alt="Holiday escape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 dark:bg-opacity-60 flex flex-col justify-center px-4 sm:px-8">
          <h1 className="max-w-3xl mx-auto text-center text-xl sm:text-2xl lg:text-3xl font-bold text-white">
            Experience unparalleled luxury and personalized service at
            <span className="text-accent"> New-Guidance Hotel</span>, where
            every stay is a journey into sophistication, comfort, and
            unforgettable memories.
          </h1>
          <h2 className="text-center text-sm mt-6 text-white">
            Rahel Drake
          </h2>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
