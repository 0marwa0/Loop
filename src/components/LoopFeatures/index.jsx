import React from "react";
import "./index.css";
import arrowIcon from "../../assets/icons/arrow-btn.svg";
import test from "../../assets/images/loop-featuers.png";
import features from "./text";
function LoopFeatures() {
  return (
    <div>
      <div className="loop-featuers">
        <div className="container-layout">
          <div className="loop-features-title ">Why Choose LOOP</div>
          <div className="loop-features-text d-flex gap-3">
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
          </div>
        </div>
        <img src={test} className="bg-loop-feature" />
        <div className=" features-container container-layout">
          {features.map((feature) => (
            <div className="feature-card">
              <div className="feature-title">{feature.title}</div>
              <div className="feature-text">{feature.text}</div>
            </div>
          ))}
        </div>{" "}
      </div>
    </div>
  );
}

export default LoopFeatures;
