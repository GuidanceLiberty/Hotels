import React from 'react'
import img_1 from '../assets/hero/img-8.jpg'
import img_2 from '../assets/hero/img-7.jpg'
import img_3 from '../assets/hero/img-6.jpg'
import img_4 from '../assets/hero/hotel-7.jpg'

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
]

const SpecialOffers = () => {
  return (
    <section className="bg-accent py-20 px-4 lg:px-16">
      <div className="text-center text-white mb-12">
        <h1 className="font-bold text-sm tracking-widest">GRAB IT NOW</h1>
        <h2 className="text-4xl font-semibold mt-2">Special Offers</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="relative h-[450px] rounded-2xl overflow-hidden shadow-lg group transition-transform duration-300 hover:scale-[1.02]"
          >
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-full object-cover group-hover:brightness-75 transition duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 text-white">
              <h3 className="text-2xl font-bold text-center mb-3">{offer.title}</h3>
              <p className="text-center text-sm mb-4">{offer.description}</p>
              <div className="flex justify-center">
                <button className="bg-white text-accent font-medium px-5 py-2 rounded-full text-sm hover:bg-gray-200 transition">
                  VIEW DETAILS
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SpecialOffers
