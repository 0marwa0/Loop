import { useState, useEffect } from "react";
import "./index.css";
import shipIcon from "../../assets/icons/ship-icon.svg";
import wheelIcon from "../../assets/icons/compass.svg";
import yachtSidIcon from "../../assets/images/yacht.png";
import { MotionAnimate } from "react-motion-animate";

function CommitmentSection() {
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
    <div className="commitment-section">
      <div className="compass-container">
        <img
          src={wheelIcon}
          className={`image-container wheel-icon compass ${scrollDirection}`}
        />
      </div>
      <section className=" commitment-text d-flex ">
        <img src={shipIcon} className="ship-icon" />
        <div>
          <div className="commitment-title">OUR COMMITMENT</div>
          <div>
            Our commitment is to provide you with a
            <strong> yacht experience</strong> that transcends the ordinary.
          </div>
        </div>
      </section>
      <div className={`image-container yacht-side-icon ${scrollDirection}`}>
        <img src={yachtSidIcon} />
      </div>
    </div>
  );
}

export default CommitmentSection;
