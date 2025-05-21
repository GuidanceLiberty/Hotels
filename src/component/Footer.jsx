import React from 'react';
import {
  RiFacebookFill,
  RiTwitterFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiMailSendLine,
  RiArrowUpLine,
} from '@remixicon/react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About */}
          <div className="space-y-6">
            <h3 className="text-4xl font-extrabold text-accent tracking-tight">NewGuidance Hotel</h3>
            <p className="text-gray-400 text-lg">
              Experience the ultimate blend of luxury, comfort, and service. Relax. Refresh. Recharge. Discover a world of
              elegance at NewGuidance.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-accent text-gray-400 transition">
                <RiFacebookFill size={24} />
              </a>
              <a href="#" className="hover:text-accent text-gray-400 transition">
                <RiTwitterFill size={24} />
              </a>
              <a href="#" className="hover:text-accent text-gray-400 transition">
                <RiInstagramFill size={24} />
              </a>
              <a href="#" className="hover:text-accent text-gray-400 transition">
                <RiLinkedinFill size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-2xl font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-accent transition text-lg">About Us</a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-accent transition text-lg">Rooms & Rates</a>
              </li>
              <li>
                <a href="#offers" className="hover:text-accent transition text-lg">Special Offers</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition text-lg">Contact</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div className="space-y-6">
            <h4 className="text-2xl font-semibold">Subscribe</h4>
            <p className="text-gray-400 text-lg">
              Stay updated with our latest news, exclusive offers, and upcoming events. Subscribe now!
            </p>
            <form className="flex items-center space-x-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-6 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="flex items-center bg-accent text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition"
              >
                <RiMailSendLine size={20} className="mr-2" />
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} NewGuidance Hotel. All rights reserved.</p>
          <p>Crafted with ❤️ and passion for hospitality.</p>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="absolute bottom-6 right-6 bg-accent hover:bg-accent-hover text-white p-4 rounded-full shadow-xl transition"
        >
          <RiArrowUpLine size={28} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
