import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Availability = () => {
  // Optional: receive query params or state from router
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const checkIn = params.get('checkIn') || '';
  const checkOut = params.get('checkOut') || '';
  const adults = params.get('adults') || '';
  const children = params.get('children') || '';

  // For demo, just show the passed data or a form to re-check availability
  const [message, setMessage] = useState('');

  const handleCheckAgain = (e) => {
    e.preventDefault();
    setMessage('Checking availability... (replace this with real API call)');
    // You can add API call here
  };

  return (
    <section className="py-12 bg-white dark:bg-gray-900 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-md w-full bg-gray-100 dark:bg-gray-800 rounded-xl p-8 shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Availability Details
        </h2>

        {checkIn && checkOut ? (
          <>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Showing availability for <strong>{adults}</strong> adult(s) and{' '}
              <strong>{children}</strong> child(ren) from{' '}
              <strong>{checkIn}</strong> to <strong>{checkOut}</strong>.
            </p>

            <button
              onClick={handleCheckAgain}
              className="mt-4 px-6 py-3 bg-accent hover:bg-accent-hover text-white rounded-full font-semibold transition"
            >
              Check Again
            </button>

            {message && (
              <p className="mt-4 text-green-600 dark:text-green-400 font-medium">{message}</p>
            )}
          </>
        ) : (
          <p className="text-gray-700 dark:text-gray-300">
            No availability data found. Please return to the reservation page.
          </p>
        )}
      </div>
    </section>
  );
};

export default Availability;
