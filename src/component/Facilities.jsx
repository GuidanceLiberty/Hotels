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
    icon: <RiRestaurantFill size={70} className="text-5xl text-white spinXY" />,
    description:
      'Savor delicious moments at our Restaurant, your go-to spot for fresh, flavorful dishes all day long. Dine in or order to your room.',
  },
  {
    title: 'Swimming Pool',
    icon: <RiLifebuoyLine size={70} className="text-5xl text-white spinZ" />,
    description:
      'Dive into relaxation at our sparkling swimming pool — perfect for a refreshing dip, sun-soaked lounging, or just soaking up the good vibes!',
  },
  {
    title: 'Fitness Center',
    icon: <RiRunLine size={70} className="text-5xl text-white spinX" />,
    description:
      'Stay on track while you travel! Our fully equipped fitness center is open daily — perfect for a quick workout, a full session, or just getting your heart pumping.',
  },
  {
    title: 'Spa & Massage',
    icon: <RiFlowerLine size={70} className="text-5xl text-white spinZ" />,
    description:
      'Unwind, relax, and recharge at our spa — with calming massages and rejuvenating treatments designed to melt your stress away.',
  },
  {
    title: 'Meeting Room',
    icon: <RiPresentationLine size={70} className="text-5xl text-white spinX" />,
    description:
      'Host with confidence in our fully equipped meeting room — perfect for business gatherings, presentations, and private events.',
  },
  {
    title: 'Laundry Service',
    icon: <RiShirtLine size={70} className="text-5xl text-white spinXY" />,
    description:
      'Need fresh clothes in a hurry? Our laundry service is fast, reliable, and ready to keep you looking your best during your stay!',
  },
];

const Facilities = () => {
  return (
    <section className="steps mt-10 relative z-20 bg-white text-black dark:bg-primary dark:text-white transition-colors duration-300">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-28">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="step_step text-center text-secondary dark:text-gray-300"
            >
              <div className="flex justify-center mb-4">
                <button className="btn_item bg-accent hover:bg-accent-hover transition mx-auto p-4 rounded-full">
                  {facility.icon}
                </button>
              </div>
              <h2 className="text-3xl mb-5 font-bold text-black dark:text-white">
                {facility.title}
              </h2>
              <p className="mb-5 max-w-md mx-auto text-[1.1rem]">
                {facility.description}
              </p>
              <a
                href="#"
                className="font-medium text-[1rem] flex justify-center gap-x-2 hover:text-accent transition"
              >
                Read more
                <RiArrowRightLine size={15} className="text-accent" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
