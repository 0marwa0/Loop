import { useState } from "react";
import "./index.css";
import arrowDown from "../../assets/icons/arrow-down-light.svg";
import princessYachtImage from "../../assets/images/princessYacht.png";

function PrincessYacht() {
  return (
    <div className="princessYacht-container ">
      <div className="container">
        <div className="Yacht-layout">
          <div
            className="Yacht-title"
            // style={{
            //   border: "2px solid red",
            //   height: "auto",
            // }}
          >
            <div>
              <img src={arrowDown} />
            </div>
            <div className="Yact-text">Our Yacht</div>
            <div className="Yacht-name">Princess F56 FLY</div>
          </div>
          <div style={{ height: "auto" }}>
            <section className="Yacht-doc">
              Meet the PRINCESS F56 FLY – the pinnacle of sea luxury. With sleek
              design and top-notch amenities, this yacht offers an unparalleled
              experience in opulence. Elevate your journey on the seas with the
              epitome of yachting sophistication.
            </section>
            <div>
              <img
                src={princessYachtImage}
                style={{
                  width: "100%",
                  height: "100%",
                  zIndex: 2,
                  left: "40px",
                }}
                className="Yacht-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrincessYacht;
