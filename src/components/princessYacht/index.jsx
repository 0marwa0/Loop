import { useState } from "react";
import "./index.css";
import arrowDown from "../../assets/icons/arrow-down-light.svg";
import princessYachtImage from "../../assets/images/princessYacht.png";

function PrincessYacht() {
  return (
    <div className="princessYacht-container ">
      <div className="container-layout">
        <div className="Yacht-layout">
          <div className="Yacht-title">
            <div>
              <img src={arrowDown} className="Yacht-icon" />
            </div>
            <div className="Yacht-text">Our Yacht</div>

            <div className="Yacht-name">Princess F56 FLY</div>
          </div>
          <div className="Yacht-relative">
            <div className="Yacht-absolute">
              <section className="Yacht-doc">
                Meet the PRINCESS F56 FLY – the pinnacle of sea luxury. With
                sleek design and top-notch amenities, this yacht offers an
                unparalleled experience in opulence. Elevate your journey on the
                seas with the epitome of yachting sophistication.
              </section>
              <div className="Yacht-img-container">
                <img src={princessYachtImage} className="Yacht-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrincessYacht;
