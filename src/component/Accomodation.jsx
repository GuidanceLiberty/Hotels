import React, { useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';

import Room_1 from '../assets/hero/hotel-1.jpeg';
import Room_2 from '../assets/hero/hotel-2.jpeg';
import Room_3 from '../assets/hero/hotel-3.jpg';
import Room_4 from '../assets/hero/hotel-4.jpg';
import Room_5 from '../assets/hero/hotel-5.jpg';
import Room_6 from '../assets/hero/hotel-6.jpg';

// Set app element once for accessibility
Modal.setAppElement('#root');

const rooms = [
  {
    image: Room_1,
    title: 'Deluxe Room',
    description: `A luxurious room with a king-sized bed and ocean view. 
Features include a flat-screen TV, minibar, high-speed Wi-Fi, and an ensuite bathroom with a Jacuzzi.`,
    price: 200,
  },
  {
    image: Room_2,
    title: 'Family Suite',
    description: `Spacious suite with two bedrooms and a living area.
Includes two bathrooms, a kitchenette, kids’ play area, and complimentary breakfast for the family.`,
    price: 300,
  },
  {
    image: Room_3,
    title: 'Alpine Retreat',
    description: `Cozy room with mountain views and a fireplace.
Equipped with a queen bed, seating area, balcony, and rustic decor for a warm ambiance.`,
    price: 180,
  },
  {
    image: Room_4,
    title: 'Summit Suite',
    description: `Elegant suite with panoramic city views.
Features a king bed, private terrace, luxury bathroom, and workspace with ergonomic chair.`,
    price: 250,
  },
  {
    image: Room_5,
    title: 'Timber Heaven',
    description: `Rustic room surrounded by forest scenery.
Includes handcrafted furniture, a cozy fireplace, and nature-inspired decor.`,
    price: 170,
  },
  {
    image: Room_6,
    title: 'Cliffside Chalet',
    description: `Secluded chalet with breathtaking cliff views.
Offers a hot tub, outdoor deck, full kitchen, and spacious living area.`,
    price: 280,
  },
];

const Accommodation = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const navigate = useNavigate();

  const openModal = (room) => {
    setSelectedRoom(room);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedRoom(null);
  };

  const handleBookNow = () => {
    navigate('/booking');
  };

  return (
    <section
      id="accommodation"
      className="bg-white dark:bg-primary text-black dark:text-white transition-colors duration-300 px-4 lg:px-16 py-20"
    >
      <div className="text-center mb-12">
        <h3 className="text-sm text-accent font-bold tracking-widest uppercase">Our Rooms</h3>
        <h2 className="text-4xl font-bold text-primary dark:text-white mt-2">Accommodation</h2>
        <p className="text-sm text-gray-500 dark:text-gray-300 mt-2 max-w-xl mx-auto">
          Choose from our range of beautifully designed rooms and suites, crafted for your ultimate comfort and relaxation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-xl group transition-transform transform hover:scale-[1.02] duration-300"
          >
            <img
              src={room.image}
              alt={room.title}
              className="w-full h-80 object-cover group-hover:brightness-75 transition duration-300 cursor-pointer"
              onClick={() => openModal(room)}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 dark:bg-opacity-60 flex flex-col justify-end p-6 text-white">
              <h3 className="text-2xl font-semibold text-center">{room.title}</h3>
              <div className="flex justify-center gap-4 mt-2 text-sm text-gray-200">
                <span>2 Guests</span>
                <span>35 ft²</span>
              </div>
              <div className="text-center mt-1 font-semibold text-lg">${room.price}/night</div>
              <button
                onClick={handleBookNow}
                className="mt-4 w-full bg-accent hover:bg-accent-hover text-white py-2 rounded-lg font-semibold transition"
              >
                Book Your Stay
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedRoom && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Room Details"
          className="ReactModal__Content"
          overlayClassName="ReactModal__Overlay"
          closeTimeoutMS={300}
        >
          <h2 className="text-4xl font-semibold mb-4">{selectedRoom.title}</h2>
          <img
            src={selectedRoom.image}
            alt={selectedRoom.title}
            className="w-full h-96 object-cover rounded-lg mb-6"
          />
          <p className="text-lg mb-6 whitespace-pre-line">{selectedRoom.description}</p>
          <div className="flex justify-between items-center mb-6">
            <span className="text-2xl font-bold">Price: ${selectedRoom.price}/night</span>
            <button
              onClick={closeModal}
              className="bg-accent text-white px-6 py-2 rounded-full hover:bg-accent-hover transition"
            >
              Close
            </button>
          </div>
          <button
            onClick={handleBookNow}
            className="w-full bg-accent hover:bg-accent-hover text-white py-3 rounded-lg font-semibold transition"
          >
            Book Your Stay
          </button>
        </Modal>
      )}
    </section>
  );
};

export default Accommodation;
