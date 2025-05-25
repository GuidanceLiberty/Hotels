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
import Services from "./component/Services";
import Contact from "./component/Contact";
import Testimonial from "./component/Testimonial";
import 'swiper/css';


function App() {
  return (
    <div className="bg-white dark:bg-primary text-black dark:text-white transition-colors duration-300 min-h-screen">
      <main className="max-w-[1920px] mx-auto overflow-hidden">
        <Navbar />
        <Hero />
        <Services />
        <Projects />
        <Reservation />
        <SpecialOffers />
        <Accomodation />
        <Testimonial />
        <Facilities />
        <AboutUs />
        <Updates />
        <Theme />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
