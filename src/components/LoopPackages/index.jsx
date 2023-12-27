import React from "react";
import "./index.css";
import { useState, useEffect } from "react";
import arrowIcon from "../../assets/icons/arrow-btn.svg";

function LoopPackages() {
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
    <div>
      <div className="loop-packages">
        <div className="container-layout">
          <div className="loop-packages-content">
            <div className="loop-packages-title">loop packages</div>
            <div className="loop-packages-text">
              Embark on a luxurious maritime escape with LOOP's curated yacht
              <span className="font-wight-500"> packages</span> in{" "}
              <span className="font-wight-500"> Dubai</span> and{" "}
              <span className="font-wight-500"> Abu Dhabi.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-layout">
        <div className="packages-cards-container">
          <div
            className={`package-card day-card day-card-move ${scrollDirection}`}
          >
            {/* <div className="empty-div"> </div> */}
            <div>
              <div className="card-title">FULL DAY</div>

              <div className="card-text">Starts From 9.999 AED / day</div>
            </div>
            <button
              className="loop-packages-btn btn 
            pramary-btn text-white dark_bg white-border "
            >
              BOOK NOW
              <img src={arrowIcon} alt="" className="arrow-icon-ms" />
            </button>
          </div>

          <div
            className={`package-card week-card week-card-move ${scrollDirection}`}
          >
            {/* <div className="empty-div"> </div> */}
            <div>
              <div className="card-title">FULL WEEK</div>
              <div className="card-text">Starts From 8,999 AED / week</div>
            </div>
            <button
              className="loop-packages-btn btn 
            pramary-btn text-white dark_bg white-border"
            >
              BOOK NOW
              <img src={arrowIcon} alt="" className="arrow-icon-ms" />
            </button>
          </div>
          <div
            className={`package-card month-card month-card-move ${scrollDirection}`}
          >
            {/* <div className="empty-div"> </div> */}
            <div>
              <div className="card-title">FULL MONTH</div>

              <div className="card-text">Starts From 7,999 AED / month</div>
            </div>
            <button
              className="loop-packages-btn btn 
            pramary-btn text-white dark_bg white-border "
            >
              BOOK NOW
              <img src={arrowIcon} alt="" className="arrow-icon-ms" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoopPackages;
