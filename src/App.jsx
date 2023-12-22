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
import BookingUI from "./components/Booking/BookingUi";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useEffect, useState, useRef } from "react";

// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
function App() {
  // const carouselRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;

      if (currentPosition > scrollPosition) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);
  // const splideRef = useRef(null);

  // useEffect(() => {
  //   const splide = splideRef.current.splide;

  //   const handlePrevClick = () => {
  //     const currentSlide = splide.index;
  //     if (currentSlide > 0) {
  //       splide.go(currentSlide - 1);
  //     }
  //   };

  //   const handleNextClick = () => {
  //     const currentSlide = splide.index;
  //     if (currentSlide < splide.length - 1) {
  //       splide.go(currentSlide + 1);
  //     }
  //   };

  //   document.getElementById("prev").addEventListener("click", handlePrevClick);
  //   document.getElementById("next").addEventListener("click", handleNextClick);

  //   return () => {
  //     document
  //       .getElementById("prev")
  //       .removeEventListener("click", handlePrevClick);
  //     document
  //       .getElementById("next")
  //       .removeEventListener("click", handleNextClick);
  //   };
  // }, []);
  return (
    <>
      <Booking />
      <CommitmentSection />
      <PrimeLocation />
      <LoopPackages />
      {/* <LoopFeatures /> */}
      <PrincessYacht />
      <MultiCarousel scrollDirection={scrollDirection} />
      <Testimonials scrollDirection={scrollDirection} />
      <Explore />
      <Footer />
    </>
  );
}

export default App;
