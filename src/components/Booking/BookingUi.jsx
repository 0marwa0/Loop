import { useState, useEffect, useRef, useLayoutEffect } from "react";
import DateInput from "./costomizedDateInput";
import PackageItem from "./packageItem";
import dropDownIcon from "../../assets/icons/dropdown-icon.svg";
import PassengersModal from "./passengersModal";
import arrowIcon from "../../assets/icons/arrow-btn.svg";
import Dropdown from "react-bootstrap/Dropdown";

import Slider from "@mui/material/Slider";

import React from "react";
const Packages = [
  { title: "FULL DAY", text: "Starts From 9.999 AED / day", id: "day" },
  { title: "FULL WEEK", text: "Starts From 8,999 per day", id: "week" },
  {
    title: "FULL MONTH",
    text: "Starts From 7,999 AED per day",
    id: "month",
  },
];

function BookingUI() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const initialValue = parseInt(localStorage.getItem("sliderValue"), 10) || 0;
  const [value, setValue] = useState(initialValue);
  const [thumbPosition, setThumbPosition] = useState({
    left: parseInt(localStorage.getItem("sliderPos")) || 0,
  });
  const sliderRef = useRef(null);

  const calculateThumbPosition = () => {
    const thumb = sliderRef.current?.querySelector('[role="slider"]');
    if (thumb) {
      const rect = thumb.getBoundingClientRect();

      setThumbPosition({ left: rect.left });
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    localStorage.setItem("sliderValue", newValue.toString());

    // Get the clientX position from the event
    const clientX = event.clientX;

    // Calculate the left position of the tooltip based on the clientX
    const sliderRect = sliderRef.current?.getBoundingClientRect();
    const left = clientX - sliderRect.left;
    localStorage.setItem("sliderPos", left);
    console.log(left, "real vaue");
    setThumbPosition({ left });
  };

  useEffect(() => {
    const handleResize = () => {
      calculateThumbPosition();
    };

    calculateThumbPosition(); // Initial position

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [value]); // Recalculate on value change
  console.log(thumbPosition, "saved value");
  return (
    <div className="container-layout">
      <div class="hearo-booking">
        <div class="booking-head">
          {Packages.map((item) => (
            <PackageItem title={item.title} text={item.text} id={item.id} />
          ))}
        </div>
        <div class="booking-values">
          <section className="booking-value-padding">
            <div class="date-text">Start Date</div>
            <DateInput />
          </section>

          <section className="booking-value-padding">
            <div class="date-text">Start Date</div>
            <DateInput />
          </section>
          <section>
            <Dropdown>
              <Dropdown.Toggle
                className="dropdwon-style"
                variant="success"
                id="dropdown-basic"
              >
                <div class="font-18"> Passengers</div>
                <div class="gray-color text-padding font-18 d-flex justify-content-between font-20">
                  <div className="value-text">{value} Passengers</div>
                  <img src={dropDownIcon} className="drop-down-icon" />
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdwon-menu">
                <Dropdown.Item className="no-styles">
                  <div
                  // style={{ position: "relative" }}
                  >
                    <Slider
                      ref={sliderRef}
                      value={value}
                      onChange={handleChange}
                      // valueLabelDisplay="auto"
                      valueLabelFormat={(value) => `${value}%`}
                      min={0}
                      style={{ height: "12px" }}
                      color="success"
                      componentsProps={{
                        thumb: {
                          style: {
                            height: 27,
                            width: 27,
                          },
                        },
                      }}
                      max={10}
                    />
                    <div
                      style={{
                        left: `${thumbPosition.left}px`,
                      }}
                      className="lable"
                    >
                      {value} Passengers
                    </div>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </section>
          <button class=" text-white green-bg book-btn ">
            <div>BOOK NOW</div>

            <img src={arrowIcon} className="arrow-icon-lg" />
          </button>
        </div>
      </div>
      <PassengersModal show={show} handleClose={handleClose} />
    </div>
  );
}

export default BookingUI;
