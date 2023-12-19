import { useState } from "react";
import DateInput from "./costomizedDateInput";
import PackageItem from "./packageItem";
import dropDownIcon from "../../assets/icons/dropdown-icon.svg";
import PassengersModal from "./passengersModal";
import arrowIcon from "../../assets/icons/arrow-btn.svg";

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
  return (
    <div className="container-layout">
      <div class="hearo-booking">
        <div class="booking-head">
          {Packages.map((item) => (
            <PackageItem title={item.title} text={item.text} id={item.id} />
          ))}
        </div>
        <div class="booking-values">
          <section>
            <div class="date-text">Start Date</div>
            <DateInput />
          </section>

          <section>
            <div class="date-text">Start Date</div>
            <DateInput />
          </section>
          <section onClick={handleShow}>
            <div class="font-18"> Passengers</div>
            <div class="gray-color p-8 font-18 d-flex justify-content-between font-20">
              10 Passengers
              <img src={dropDownIcon} className="drop-down-icon" />
            </div>
          </section>
          <button class=" d-flex gap-3 text-white green-bg book-now ">
            BOOK NOW
            <img src={arrowIcon} className="arrow-icon-lg" />
          </button>
        </div>
      </div>
      <PassengersModal show={show} handleClose={handleClose} />
    </div>
  );
}

export default BookingUI;
