import { useState } from "react";
import "./index.css";
import arrowIcon from "../../assets/icons/arrow-btn.svg";

function Explore(props) {
  return (
    <div style={{ overflow: "hidden" }}>
      <div
        class={`explore-boat explore-boats-section-move  ${props.scrollDirection}`}
      >
        <div className="container-layout">
          <div class="book-loop-title">
            Explore our exclusive yacht services
          </div>
          <div class="book-loop-text">
            Ready for a new level of sea luxury? Explore our exclusive yacht
            services and set sail on a tailored journey.
          </div>
          <div>
            <button class="btn pramary-btn justify-content-center align-items-center text-white book-loop-btn">
              Book loop now
              <img src={arrowIcon} alt="" className="arrow-icon-lg " />
            </button>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
