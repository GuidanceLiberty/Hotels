import React, { useState } from 'react';

const Reservation = () => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [message, setMessage] = useState(null);

  const increment = (setter, value) => setter(value + 1);
  const decrement = (setter, value) => {
    if (value > 0) setter(value - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!checkIn || !checkOut) {
      setMessage({ type: 'error', text: 'Please select both check-in and check-out dates.' });
      return;
    }

    if (new Date(checkOut) <= new Date(checkIn)) {
      setMessage({ type: 'error', text: 'Check-out date must be after check-in date.' });
      return;
    }

    if (adults + children <= 0) {
      setMessage({ type: 'error', text: 'Please select at least one guest.' });
      return;
    }

    // This is where you can call an API or logic to check availability
    setMessage({ type: 'success', text: `Availability checked for ${adults} adult(s) and ${children} child(ren) from ${checkIn} to ${checkOut}.` });
  };

  return (
    <section className="py-12 bg-accent-secondary dark:bg-primary transition-colors duration-300">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 text-center transition-colors duration-300">
        <h3 className="text-2xl font-bold mb-8 text-black dark:text-white">Make a Reservation</h3>

        <div className="grid grid-cols-2 gap-6 mb-8">
          <div>
            <label htmlFor="checkin" className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">Check In</label>
            <input
              id="checkin"
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent transition"
              min={new Date().toISOString().split('T')[0]}
              required
            />
          </div>

          <div>
            <label htmlFor="checkout" className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">Check Out</label>
            <input
              id="checkout"
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent transition"
              min={checkIn || new Date().toISOString().split('T')[0]}
              required
            />
          </div>
        </div>

        {/* Adults */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2 text-black dark:text-white">Adults</h4>
          <div className="inline-flex items-center space-x-6">
            <button
              type="button"
              onClick={() => decrement(setAdults, adults)}
              className="w-12 h-12 bg-accent rounded-full text-white text-2xl font-bold hover:bg-accent-hover transition-shadow shadow-md"
              aria-label="Decrease adults"
            >
              −
            </button>
            <span className="text-xl font-medium text-black dark:text-white">{adults}</span>
            <button
              type="button"
              onClick={() => increment(setAdults, adults)}
              className="w-12 h-12 bg-accent rounded-full text-white text-2xl font-bold hover:bg-accent-hover transition-shadow shadow-md"
              aria-label="Increase adults"
            >
              +
            </button>
          </div>
        </div>

        {/* Children */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold mb-2 text-black dark:text-white">Children</h4>
          <div className="inline-flex items-center space-x-6">
            <button
              type="button"
              onClick={() => decrement(setChildren, children)}
              className="w-12 h-12 bg-accent rounded-full text-white text-2xl font-bold hover:bg-accent-hover transition-shadow shadow-md"
              aria-label="Decrease children"
            >
              −
            </button>
            <span className="text-xl font-medium text-black dark:text-white">{children}</span>
            <button
              type="button"
              onClick={() => increment(setChildren, children)}
              className="w-12 h-12 bg-accent rounded-full text-white text-2xl font-bold hover:bg-accent-hover transition-shadow shadow-md"
              aria-label="Increase children"
            >
              +
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="bg-accent hover:bg-accent-hover text-white font-semibold px-10 py-3 rounded-full shadow-lg transition transform hover:scale-105 duration-300"
        >
          CHECK AVAILABILITY
        </button>

        {message && (
          <p
            className={`mt-6 text-center font-semibold ${
              message.type === 'error' ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'
            }`}
          >
            {message.text}
          </p>
        )}
      </form>
    </section>
  );
};

export default Reservation;
