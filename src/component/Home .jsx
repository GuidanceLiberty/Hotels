<main className="pt-24">
      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-hero bg-cover bg-center min-h-screen flex flex-col justify-center items-center text-center text-white px-4"
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Welcome to New Guidance
          </h1>
          <p className="text-xl md:text-2xl mb-6 italic drop-shadow-md">
            Luxury redefined. Comfort reimagined.
          </p>
          <button
            className="bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-full text-lg flex items-center mx-auto transition"
            onClick={() => {
              const bookingSection = document.getElementById('room-booking');
              bookingSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <RiPhoneFill className="mr-2" /> Book Now
          </button>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="container mx-auto px-6 py-20 text-center max-w-4xl"
      >
        <h2 className="text-4xl font-bold mb-6 text-primary dark:text-white">
          About New Guidance
        </h2>
        <p className="text-secondary dark:text-gray-300 text-lg leading-relaxed">
          At New Guidance Hotels, we believe in offering unparalleled luxury and comfort to our guests. Our mission is to redefine your travel experience with exceptional service, elegant accommodations, and personalized touches.
        </p>
      </section>

      {/* Services Sections */}
      <section id="services" className="bg-white dark:bg-primary py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-primary dark:text-white text-center">
            Our Services
          </h2>

          {/* Room Booking */}
          <section id="room-booking" className="mb-16 px-4">
            <h3 className="text-3xl font-semibold mb-4 text-primary dark:text-white">
              Room Booking
            </h3>
            <p className="text-secondary dark:text-gray-300 mb-4 max-w-3xl mx-auto text-center">
              Book your dream room with luxury comfort and style. Choose from deluxe suites, family rooms, and more.
            </p>
            {/* You can add images or cards here */}
          </section>

          {/* Spa & Wellness */}
          <section id="spa-wellness" className="mb-16 px-4">
            <h3 className="text-3xl font-semibold mb-4 text-primary dark:text-white">
              Spa & Wellness
            </h3>
            <p className="text-secondary dark:text-gray-300 mb-4 max-w-3xl mx-auto text-center">
              Relax your body and mind with our full-service spa, massage, and wellness packages.
            </p>
          </section>

          {/* Dining */}
          <section id="dining" className="mb-16 px-4">
            <h3 className="text-3xl font-semibold mb-4 text-primary dark:text-white">
              Fine Dining
            </h3>
            <p className="text-secondary dark:text-gray-300 mb-4 max-w-3xl mx-auto text-center">
              Enjoy world-class cuisine crafted by top chefs in a luxurious dining environment.
            </p>
          </section>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-accent/10 dark:bg-primary/10 py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-12 text-primary dark:text-white">
            What Our Guests Say
          </h2>
          <blockquote className="italic text-secondary dark:text-gray-300">
            "The best hotel experience I've ever had! Exceptional service and beautiful rooms. I can't wait to come back."
          </blockquote>
          <p className="mt-4 font-semibold text-primary dark:text-white">- Jane Doe</p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="container mx-auto px-6 py-20 max-w-4xl text-center"
      >
        <h2 className="text-4xl font-bold mb-6 text-primary dark:text-white">
          Get in Touch
        </h2>
        <p className="text-secondary dark:text-gray-300 mb-8">
          Have questions or want to book a stay? Call us or send us a message!
        </p>
        <button className="bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-full flex items-center mx-auto transition">
          <RiPhoneFill className="mr-2" /> Book Now
        </button>
      </section>
    </main>