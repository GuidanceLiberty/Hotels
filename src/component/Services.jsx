import {
  RiHotelLine,
  RiRestaurantLine,
  RiWaterFlashLine,
  RiRunLine,
} from 'react-icons/ri';

const servicesData = [
  {
    icon: <RiHotelLine className="text-6xl text-accent mb-4 mx-auto" />,
    title: "Luxury Rooms",
    description: "Spacious and elegantly furnished rooms with breathtaking views.",
  },
  {
    icon: <RiRestaurantLine className="text-6xl text-accent mb-4 mx-auto" />,
    title: "Fine Dining",
    description: "World-class restaurants offering exquisite cuisine from around the globe.",
  },
  {
    icon: <RiWaterFlashLine className="text-6xl text-accent mb-4 mx-auto" />,
    title: "Swimming Pool",
    description: "Relax and unwind in our pristine outdoor swimming pool.",
  },
  {
    icon: <RiRunLine className="text-6xl text-accent mb-4 mx-auto" />,
    title: "Fitness Center",
    description: "State-of-the-art gym to keep up with your workout routine.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-primary dark:to-secondary transition-colors duration-500"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-primary dark:text-white tracking-wide">
          Our Exclusive Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {servicesData.map(({ icon, title, description }, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-primary dark:border dark:border-accent rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transform transition-transform duration-300 cursor-pointer"
            >
              {icon}
              <h3 className="text-2xl font-semibold mb-3 text-primary dark:text-accent">
                {title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
