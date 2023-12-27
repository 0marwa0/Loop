import { useState, useEffect } from "react";
import "./index.css";
import playIcon from "../../assets/icons/play-icon.svg";

function PrimeLocation() {
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
  return (
    <div className="location-section">
      <div className="container-layout">
        <section
          className={`primeLocation-move d-flex  location-content ${scrollDirection}`}
        >
          <div className="play-icon-container">
            <img src={playIcon} className="play-icon" />
          </div>
          <div>
            <div className="section-title">PRIME LOCATIONS</div>
            <div
              className="section-text 
          white-color"
            >
              <span className="font-wight-500"> Dubai</span> And
              <span className="font-wight-500"> Abu Dhabi</span> offer some of
              the world's most iconic and breathtaking maritime landscapes.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PrimeLocation;
