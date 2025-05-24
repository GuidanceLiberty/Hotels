import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Thanks, ${formData.name}! Your booking request has been received.`);
    navigate('/'); // Redirect back to Reservation page
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-accent">Booking</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-primary p-6 rounded shadow">
        <div>
          <label className="block mb-1 font-semibold" htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold" htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold" htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold" htmlFor="checkIn">Check-In Date</label>
          <input
            id="checkIn"
            name="checkIn"
            type="date"
            required
            value={formData.checkIn}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold" htmlFor="checkOut">Check-Out Date</label>
          <input
            id="checkOut"
            name="checkOut"
            type="date"
            required
            value={formData.checkOut}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="bg-accent text-white px-6 py-2 rounded hover:bg-accent-hover"
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
};

export default Booking;
