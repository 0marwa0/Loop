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
      {/* <img src={wheelIcon} className="wheel-icon" /> */}
      {/* <section
        style={{ border: "1px solid teal" }}
        className="gap-3 commitment-text d-flex justify-content-center"
      >
        <img src={shipIcon} className="ship-icon" />
        <div>
          <div className="commitment-title">OUR COMMITMENT</div>
          Our commitment is to provide you with a
          <strong> yacht experience</strong> that transcends the ordinary.
        </div>
      </section>
      <div className={`yacht-side-icon `}>
        <img src={yachtSidIcon} />
      </div> */}

      {/* <img
        src={yachtSidIcon}
        className={`image-container yacht-side-icon ${scrollDirection}`}
      /> */}
    </div>
  );
}

export default CommitmentSection;
