import React from 'react';
import img_1 from '../assets/hero/img-8.jpg';
import img_2 from '../assets/hero/img-7.jpg';
import img_3 from '../assets/hero/img-6.jpg';
import img_4 from '../assets/hero/hotel-7.jpg';

const offers = [
  {
    image: img_1,
    title: 'Holiday Escape',
    description:
      'Treat yourself to a holiday retreat before the year ends. Enjoy festive discounts and cozy accommodations for the perfect winter getaway.',
  },
  {
    image: img_2,
    title: 'Year-End Special',
    description:
      'End the year on a high note with unbeatable savings. Book your year-end escape and enjoy extra discounts, free upgrades, and more!',
  },
  {
    image: img_3,
    title: 'New Year Special',
    description:
      'Start the year with a fresh getaway! Enjoy exclusive discounts and special perks on all bookings made for January. New year, new memories.',
  },
  {
    image: img_4,
    title: 'Special Memories',
    description:
      'Start creating new memories with loved ones. Enjoy exclusive discounts and perks on all bookings made just for you. Cheers to comfort!',
  },
];

const SpecialOffers = () => {
  return (
    <section className="bg-accent dark:bg-primary py-20 px-6 lg:px-20 transition-colors duration-300">
      <div className="text-center text-white mb-16 max-w-4xl mx-auto">
        <h1 className="font-bold text-sm tracking-widest uppercase">Grab it Now</h1>
        <h2 className="text-5xl font-extrabold mt-3 tracking-tight leading-tight">
          Special <span className="text-yellow-400">Offers</span>
        </h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto text-yellow-100 font-medium">
          Exclusive deals crafted for your perfect stay. Don't miss out!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-full object-cover object-center group-hover:brightness-75 transition duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300" />

            <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col items-center">
              <h3 className="text-3xl font-extrabold mb-2 drop-shadow-lg text-center">{offer.title}</h3>
              <p className="text-center text-sm mb-6 px-3 leading-relaxed drop-shadow-md">{offer.description}</p>
              <button
                className="bg-yellow-400 text-primary font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-yellow-300 transition"
                aria-label={`View details for ${offer.title}`}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffers;
