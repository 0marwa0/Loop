import { useState } from "react";
import "./index.css";
import compossIcon from "../../assets/icons/compass.svg";
import princessYachtImage from "../../assets/images/princessYacht.png";

function PrincessYacht() {
  return (
    <div className="princessYacht-container">
      <div>
        <img src={compossIcon} />
        <div>Our Yacht</div>
        <div className="Yacht-name">Princess F56 FLY</div>
      </div>
      <div>
        <section className="Yacht-doc">
          Meet the PRINCESS F56 FLY – the pinnacle of sea luxury. With sleek
          design and top-notch amenities, this yacht offers an unparalleled
          experience in opulence. Elevate your journey on the seas with the
          epitome of yachting sophistication.
        </section>
        <img src={princessYachtImage} className="Yacht-img" />
      </div>
    </div>
  );
}

export default PrincessYacht;
