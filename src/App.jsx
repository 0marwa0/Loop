import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Booking from "./components/Booking";
import CommitmentSection from "./components/commitment";
import PrimeLocation from "./components/primeLocation";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";
import Explore from "./components/explore";
import MultiCarousel from "./components/slider";
import LoopPackages from "./components/LoopPackages";
import LoopFeatures from "./components/LoopFeatures";
import PrincessYacht from "./components/princessYacht";
// fix the rsponsivens of the second section
// use awl carsual
// code the last part
// fix reponsivens of pagkes
// add movment to the second part
// add class for bold words in all the site
// border of booking eare is not the same
// fix loop featuers in 1376px
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Booking />
      <CommitmentSection />
      <PrimeLocation />
      <LoopPackages />
      <LoopFeatures />
      {/* <PrincessYacht /> */}
      {/* <MultiCarousel /> */}
      <Testimonials />
      <Explore />
      <Footer />
    </>
  );
}

export default App;
