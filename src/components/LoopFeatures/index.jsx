import React from "react";
import "./index.css";
import arrowIcon from "../../assets/icons/arrow-btn.svg";
import features from "./text";
function LoopFeatures() {
  return (
    <div class="loop-featuers">
      <div className="container">
        <div class="loop-features-title">Why Choose LOOP</div>
        <div class="loop-features-text">
          LOOP redefines yachting with unmatched services. Discover why
          travelers choose us.
        </div>
        <div>
          <button
            class="btn pramary-btn justify-content-center
             green-bg align-items-center text-white 
            loop-features-btn"
          >
            BOOK LOOP NOW
            <img src={arrowIcon} alt="" className="arrow-icon-sm" />
          </button>
          {/* <div></div> */}
        </div>
      </div>
      <div className="features-container container">
        {features.map((feature) => (
          <div>
            <div className="feature-title">{feature.title}</div>
            <div className="feature-text">{feature.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LoopFeatures;
