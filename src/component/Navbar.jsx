import { useState, useEffect } from 'react';
import {
  RiCloseLine,
  RiMenuLine,
  RiStarFill,
  RiPhoneFill,
  RiSunLine,
  RiMoonLine,
} from '@remixicon/react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Initialize dark mode from localStorage
  useEffect(() => {
    const storedDark = localStorage.getItem('darkMode');
    if (storedDark === 'true') {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const html = document.documentElement;
    const newMode = !darkMode;

    html.classList.toggle('dark', newMode);
    localStorage.setItem('darkMode', newMode.toString());
    setDarkMode(newMode);
  };

  return (
    <header className="bg-white dark:bg-primary text-black dark:text-white shadow-md fixed top-0 w-full z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand */}
        <div className="group transition-all duration-300">
          <h1 className="text-3xl font-extrabold tracking-wide text-accent dark:text-accent drop-shadow-lg uppercase">
            <span className="text-primary dark:text-white">New</span>
            <span className="ml-1 text-accent">Guidance</span>
          </h1>

          <p className="text-sm text-gray-600 dark:text-gray-300 italic mt-1 group-hover:text-accent transition">
            Luxury redefined. Comfort reimagined.
          </p>

          <div className="flex justify-start text-accent mt-2 animate-pulse">
            {[...Array(5)].map((_, i) => (
              <RiStarFill key={i} className="text-lg" />
            ))}
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          {['home', 'about', 'services', 'blog', 'testimonials', 'contact'].map((item) => (
            <ScrollLink
              key={item}
              to={item}
              smooth
              duration={500}
              className="cursor-pointer capitalize hover:text-accent transition"
            >
              {item}
            </ScrollLink>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 rounded-full bg-accent text-white hover:bg-accent-hover transition"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <RiSunLine /> : <RiMoonLine />}
          </button>

          {/* Book Now Button */}
          <button className="ml-4 bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded flex items-center transition">
            <RiPhoneFill className="mr-2" />
            Book Now
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl text-accent"
          onClick={() => setOpenMenu(!openMenu)}
          aria-label="Toggle menu"
        >
          {openMenu ? <RiCloseLine /> : <RiMenuLine />}
        </button>
      </div>

      {/* Mobile Menu */}
      {openMenu && (
        <div className="md:hidden bg-white dark:bg-primary text-black dark:text-white px-6 pb-6 transition-colors duration-300">
          <div className="flex flex-col space-y-4">
            {['home', 'about', 'services', 'blog', 'testimonials', 'contact'].map((item) => (
              <ScrollLink
                key={item}
                to={item}
                smooth
                duration={500}
                onClick={() => setOpenMenu(false)}
                className="cursor-pointer capitalize hover:text-accent transition"
              >
                {item}
              </ScrollLink>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="bg-accent text-white px-4 py-2 rounded transition"
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>

            {/* Book Now Button */}
            <button className="bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded flex items-center transition">
              <RiPhoneFill className="mr-2" />
              Book Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

