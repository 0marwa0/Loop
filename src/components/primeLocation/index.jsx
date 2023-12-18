import { useState } from "react";
import "./index.css";
import playIcon from "../../assets/icons/play-icon.svg";

function PrimeLocation() {
  return (
    <div className="location-section">
      <div className="container">
        <section className="d-flex gap-4 location-content">
          <div className="play-icon-container">
            <img src={playIcon} className="play-icon" />
          </div>
          <div>
            <div className="section-title">PRIME LOCATIONS</div>
            <div
              className="section-text 
          white-color"
            >
              <strong>Dubai</strong> and<strong>Abu Dhabi</strong> offer some of
              the world's most iconic and breathtaking maritime landscapes.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PrimeLocation;
