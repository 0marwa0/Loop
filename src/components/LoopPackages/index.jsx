import React from "react";
import "./index.css";
import arrowIcon from "../../assets/icons/arrow-btn.svg";

function LoopPackages() {
  return (
    <div>
      <div className="loop-packages">
        <div className="container">
          <div className="loop-packages-content">
            <div className="loop-packages-title">loop packages</div>
            <div className="loop-packages-text">
              Embark on a luxurious maritime escape with LOOP's curated yacht
              packages in Dubai and Abu Dhabi.
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="packages-cards-container">
          <div className="package-card day-card">
            <div className="empty-div"> </div>
            <div>
              <div className="card-title">FULL DAY</div>

              <div className="card-text">Starts From 9.999 AED / day</div>
            </div>
            <button
              class="loop-packages-btn btn 
            pramary-btn text-white dark_bg white-border "
            >
              BOOK NOW
              <img src={arrowIcon} alt="" className="arrow-icon-ms" />
            </button>
          </div>
          <div className="package-card week-card">
            <div className="empty-div"> </div>
            <div>
              <div className="card-title">FULL WEEK</div>
              <div className="card-text">Starts From 9.999 AED / day</div>
            </div>
            <button
              class="loop-packages-btn btn 
            pramary-btn text-white green-bg"
            >
              BOOK NOW
              <img src={arrowIcon} alt="" className="arrow-icon-ms" />
            </button>
          </div>
          <div className="package-card month-card">
            <div className="empty-div"> </div>
            <div>
              <div className="card-title">FULL MONTH</div>

              <div className="card-text">Starts From 9.999 AED / day</div>
            </div>
            <button
              class="loop-packages-btn btn 
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
