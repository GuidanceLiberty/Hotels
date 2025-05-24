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
        <div className="absolute inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 flex flex-col justify-center px-6 sm:px-12 max-w-4xl mx-auto text-center space-y-6 transition-all duration-500 opacity-0 animate-fade-in relative z-10 rounded-lg">
          {/* Stars */}
          <div className="flex justify-center items-center text-accent mb-4 space-x-1">
            {[...Array(5)].map((_, i) => (
              <RiStarFill key={i} className="text-2xl" />
            ))}
          </div>

          {/* Heading */}
          <h1 className="text-white text-3xl sm:text-4xl font-extrabold leading-snug drop-shadow-lg">
            Experience unparalleled luxury and personalized service at{' '}
            <span className="text-accent">New-Guidance Hotel</span>, where every stay is a journey into sophistication, comfort, and unforgettable memories.
          </h1>

          {/* Short description */}
          <p className="text-white/90 max-w-xl mx-auto text-base sm:text-lg font-light drop-shadow-md">
            From elegantly designed rooms to top-tier amenities, we ensure your stay is nothing short of exceptional. Discover the perfect blend of tranquility and elegance.
          </p>

          {/* Call to action */}
          <button className="mt-4 bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-transform transform hover:scale-105">
            Learn More
          </button>

          {/* Name / Testimonial */}
          <footer className="mt-8 italic text-white/70 text-sm">— Rahel Drake, Founder</footer>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
