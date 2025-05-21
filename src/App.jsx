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
  return (
    <main className="max-w-[1920px] mx-auto bg-white overflow-hidden">
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
  )
}
export default App