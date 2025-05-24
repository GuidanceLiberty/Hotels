import {
  RiArrowRightLine,
  RiRestaurantFill,
  RiLifebuoyLine,
  RiRunLine,
  RiFlowerLine,
  RiPresentationLine,
  RiShirtLine,
} from '@remixicon/react';
import React from 'react';

const facilities = [
  {
    title: 'Restaurant',
    icon: <RiRestaurantFill size={50} className="text-white group-hover:text-accent transition" />,
    description:
      'Savor delicious moments at our restaurant, your go-to spot for fresh, flavorful dishes. Dine in or order room service.',
  },
  {
    title: 'Swimming Pool',
    icon: <RiLifebuoyLine size={50} className="text-white group-hover:text-accent transition" />,
    description:
      'Dive into relaxation at our sparkling pool — perfect for refreshing dips or sun-soaked lounging.',
  },
  {
    title: 'Fitness Center',
    icon: <RiRunLine size={50} className="text-white group-hover:text-accent transition" />,
    description:
      'Stay active with our fully equipped gym — great for morning workouts or a power session any time.',
  },
  {
    title: 'Spa & Massage',
    icon: <RiFlowerLine size={50} className="text-white group-hover:text-accent transition" />,
    description:
      'Relax, unwind, and recharge with soothing massages and spa treatments tailored for your serenity.',
  },
  {
    title: 'Meeting Room',
    icon: <RiPresentationLine size={50} className="text-white group-hover:text-accent transition" />,
    description:
      'Host with ease in our tech-equipped meeting rooms — ideal for events, conferences, and private gatherings.',
  },
  {
    title: 'Laundry Service',
    icon: <RiShirtLine size={50} className="text-white group-hover:text-accent transition" />,
    description:
      'Enjoy convenient, fast laundry service to keep your wardrobe fresh throughout your stay.',
  },
];

const Facilities = () => {
  return (
    <section className="py-20 bg-accent-secondary dark:bg-[#1e1e1e] transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-sm tracking-widest font-semibold text-accent uppercase">Our Facilities</h3>
          <h2 className="text-4xl font-bold text-primary dark:text-white mt-2">Experience More Comfort</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-primary p-6 rounded-xl shadow-xl transition transform hover:scale-[1.02] hover:shadow-2xl"
            >
              <div className="flex justify-center items-center mb-6 w-16 h-16 mx-auto bg-accent rounded-full">
                {facility.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 text-primary dark:text-white">{facility.title}</h3>
              <p className="text-center text-secondary dark:text-gray-300 text-sm mb-4">{facility.description}</p>
              <div className="flex justify-center">
                <a
                  href="#"
                  className="flex items-center gap-2 text-accent hover:underline text-sm"
                >
                  Learn More <RiArrowRightLine size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
