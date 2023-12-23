import { useState } from "react";
import "./index.css";
import arrowIcon from "../../assets/icons/arrow-btn.svg";

import Navbar from "../navBar";

function Booking() {
  return (
    <>
      <div class="hearo-area">
        <div class="container-layout">
          <Navbar />
          <div class="hearo-text">
            LUXURY YACHTING IN DUBAI & ABU Dhabi WITH LOOP.
          </div>
          <button class="hearo-btn">
            EXPLORE OUR PACKAGES
            <img src={arrowIcon} className="arrow-icon-lg" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Booking;
