import React from 'react';
import update_1 from '../assets/hero/update-1.jpg';
import update_2 from '../assets/hero/update-4.jpg';
import update_3 from '../assets/hero/update-5.jpg';

const updates = [
  {
    image: update_1,
    title: 'Transforming Common Spaces in Modern Hotels',
    description:
      'With style and grace, hotels redefine. Shared spaces that feel warm, not just fine. From lobbies to lounges, modern and bright, where comfort and community both unite.',
  },
  {
    image: update_2,
    title: 'Innovative Marketing Strategies for Boutique Hotels',
    description:
      'Crafting stories that guests adore. Beyond the stay, they offer more. With charm and voice that truly sells, boutique hotels weave magic well.',
  },
  {
    image: update_3,
    title: 'Hotels are Adapting to Modern Traveler Preferences',
    description:
      'From smart tech rooms to eco flair, hotels now show they truly care. Personal touches, flexible stays, shaping journeys in thoughtful ways.',
  },
];

const Updates = () => {
  return (
    <section className="bg-white dark:bg-primary py-20 px-4 lg:px-16 transition-colors duration-300">
      <div className="text-center mb-12">
        <h1 className="text-sm text-accent font-bold tracking-widest">STAY UPDATED</h1>
        <h2 className="text-4xl font-semibold text-gray-800 dark:text-white mt-2">Latest News</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {updates.map((update, index) => (
          <div
            key={index}
            className="bg-white dark:bg-primary rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
          >
            <img
              src={update.image}
              alt={update.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                {update.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{update.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Updates;
