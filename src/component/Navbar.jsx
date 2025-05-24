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
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const storedDark = localStorage.getItem('darkMode');
    if (storedDark === 'true') {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    const newMode = !darkMode;

    html.classList.toggle('dark', newMode);
    localStorage.setItem('darkMode', newMode.toString());
    setDarkMode(newMode);
  };

  const menuItems = [
    { name: 'home' },
    { name: 'about' },
    {
      name: 'services',
      subItems: [
        { name: 'room booking', to: 'room-booking' },
        { name: 'spa & wellness', to: 'spa-wellness' },
        { name: 'dining', to: 'dining' },
      ],
    },
    { name: 'blog' },
    { name: 'testimonials' },
    { name: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-primary/90 shadow-md backdrop-blur-md'
          : 'bg-white dark:bg-primary'
      } text-black dark:text-white`}
    >
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
        <nav className="hidden md:flex space-x-6 items-center relative">
          {menuItems.map((item) =>
            item.subItems ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <span className="cursor-pointer capitalize hover:text-accent transition select-none">
                  {item.name}
                </span>
                {servicesDropdownOpen && (
                  <div className="absolute top-full mt-2 left-0 bg-white dark:bg-primary shadow-lg rounded-md py-2 min-w-[180px] z-50">
                    {item.subItems.map((subItem) => (
                      <ScrollLink
                        key={subItem.name}
                        to={subItem.to}
                        smooth
                        duration={500}
                        className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-accent hover:text-white cursor-pointer transition"
                      >
                        {subItem.name}
                      </ScrollLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <ScrollLink
                key={item.name}
                to={item.name}
                smooth
                duration={500}
                className="cursor-pointer capitalize hover:text-accent transition"
              >
                {item.name}
              </ScrollLink>
            )
          )}

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 rounded-full bg-accent text-white hover:bg-accent-hover transition"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <RiSunLine /> : <RiMoonLine />}
          </button>

          {/* Book Now Button */}
          <a
            href="/booking"
            className="ml-4 bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded flex items-center transition"
          >
            <RiPhoneFill className="mr-2" />
            Book Now
          </a>
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
            {menuItems.map((item) =>
              item.subItems ? (
                <div key={item.name}>
                  <button
                    className="capitalize font-semibold flex justify-between w-full"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  >
                    {item.name}
                    <span>{mobileServicesOpen ? '▲' : '▼'}</span>
                  </button>
                  {mobileServicesOpen && (
                    <div className="ml-4 flex flex-col space-y-2 mt-2">
                      {item.subItems.map((subItem) => (
                        <ScrollLink
                          key={subItem.name}
                          to={subItem.to}
                          smooth
                          duration={500}
                          onClick={() => setOpenMenu(false)}
                          className="cursor-pointer capitalize hover:text-accent transition"
                        >
                          {subItem.name}
                        </ScrollLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <ScrollLink
                  key={item.name}
                  to={item.name}
                  smooth
                  duration={500}
                  onClick={() => setOpenMenu(false)}
                  className="cursor-pointer capitalize hover:text-accent transition"
                >
                  {item.name}
                </ScrollLink>
              )
            )}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="bg-accent text-white px-4 py-2 rounded transition"
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>

            {/* Book Now Button (Mobile) */}
            <a
              href="/booking"
              onClick={() => setOpenMenu(false)}
              className="bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded flex items-center transition"
            >
              <RiPhoneFill className="mr-2" />
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
