import { useState, useEffect } from "react";
import AboutUs from "./component/AboutUs";
import Accomodation from "./component/Accomodation";
import Facilities from "./component/Facilities";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Projects from "./component/Projects";
import Reservation from "./component/Reservation";
import SpecialOffers from "./component/SpecialOffers";
import Theme from "./component/Theme";
import Updates from "./component/Updates";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleEnterSite = () => {
    setShowWelcome(false);
  };

  useEffect(() => {
    document.body.style.overflow = showWelcome ? "hidden" : "auto";
  }, [showWelcome]);

  return (
    <>
      {showWelcome && (
        <div className="fixed inset-0 z-50 bg-black/80 flex flex-col items-center justify-center text-white text-center animate-fade-in">
          {/* Background image layer */}
          <div className="absolute inset-0 bg-welcome bg-cover bg-center opacity-40"></div>

          {/* Content layer */}
          <div className="relative p-6 max-w-xl z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-primary leading-tight">
              Welcome to <br />
              <span className="text-accent">New Guidance Hotel</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 font-secondary">
              Where elegance meets comfort. We’re delighted to have you.
            </p>
            <button
              onClick={handleEnterSite}
              className="px-8 py-3 bg-accent text-white font-semibold rounded-full hover:bg-accent-hover transition-all duration-300"
            >
              Enter Site
            </button>
          </div>
        </div>
      )}

      {!showWelcome && (
        <div className="bg-white dark:bg-primary text-black dark:text-white transition-colors duration-300 min-h-screen">
          <main className="max-w-[1920px] mx-auto overflow-hidden">
            <Navbar />
            <Hero />
            <Projects />
            <Reservation />
            <SpecialOffers />
            <Accomodation />
            <Facilities />
            <AboutUs />
            <Updates />
            <Theme />
            <Footer />
          </main>
        </div>
      )}
    </>
  );
}

export default App;
