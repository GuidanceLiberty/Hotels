import React from 'react';
import {
  RiMailLine,
  RiPhoneLine,
  RiMapPinLine,
  RiWhatsappLine,
} from '@remixicon/react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 bg-gray-100 dark:bg-primary text-black dark:text-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-accent">Get In Touch</h2>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          We’re here to make your stay as comfortable and enjoyable as possible.
          Feel free to reach out to us with any questions or special requests.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <RiMailLine className="text-3xl text-accent mt-1" />
              <p className="text-lg text-gray-800 dark:text-gray-200">
                <a
                  href="mailto:newguidancehotel@gmail.com"
                  className="hover:text-accent transition"
                >
                  newguidancehotel@gmail.com
                </a>
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <RiPhoneLine className="text-3xl text-accent mt-1" />
              <p className="text-lg text-gray-800 dark:text-gray-200">
                <a href="tel:09112524812" className="hover:text-accent transition">
                  09112524812
                </a>
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <RiWhatsappLine className="text-3xl text-accent mt-1" />
              <p className="text-lg text-gray-800 dark:text-gray-200">
                <a
                  href="https://wa.me/+2349112524812"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition"
                >
                  Chat with us on WhatsApp
                </a>
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <RiMapPinLine className="text-3xl text-accent mt-1" />
              <p className="text-lg text-gray-800 dark:text-gray-200">
                We are located in a serene and luxurious environment, always ready to welcome you.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6 bg-white dark:bg-secondary p-8 rounded-lg shadow-lg">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-transparent text-black dark:text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-transparent text-black dark:text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-transparent text-black dark:text-white"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-accent hover:bg-accent-hover text-white font-semibold py-2 px-6 rounded transition w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
