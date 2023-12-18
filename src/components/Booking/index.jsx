import { useState } from "react";
import "./index.css";
import logo from "../../assets/icons/logo.svg";
// import commitment_section from "../../assets/icons/commitment-area.svg";
import sricalIconEmpty from "../../assets/icons/booking-icon-empty.svg";
import sricalIconSold from "../../assets/icons/booking-icon-sold.svg";
import arrowIcon from "../../assets/icons/arrow-btn.svg";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dropDownIcon from "../../assets/icons/dropdown-icon.svg";
import DateIcon from "../../assets/icons/datePicker-icon";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PassengersModal from "./passengersModal";

const theme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          "&::placeholder": {
            color: "gray",
          },
        },
      },
    },
  },
});

function Booking() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div class="hearo-area">
        <div class="container">
          <div class="d-flex justify-content-between gap-2 navbar-v2">
            <img src={logo} className="logo-icon" />
            <div class="d-flex gap-2 align-items-center">
              <div className="text-18">MENU</div>
              <svg
                className="menu-icon"
                width="28"
                height="18"
                viewBox="0 0 28 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="#fff" d="M0 0h28v2H0zM0 8h24v2H0zM0 16h18v2H0z" />
              </svg>
            </div>
          </div>

          <div class="hearo-text">
            LUXURY YACHTING IN DUBAI & ABU Dhabi WITH LOOP.
          </div>
          <button class="btn pramary-btn d-flex gap-3 text-white green-bg reviews-btn">
            EXPLORE OUR PACKAGES
            <img src={arrowIcon} />
          </button>
        </div>
        <div className="container">
          <div class="hearo-booking">
            <div class="booking-head">
              <div>
                <div class="d-flex gap-2 justify-content-start align-items-start">
                  <img src={sricalIconSold} />
                  <div class="font-18 white-color">
                    FULL DAY
                    <div class="font-16 white-color">
                      Starts From 9.999 AED/day
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="d-flex gap-2 justify-content-start align-items-start">
                  <img src={sricalIconEmpty} />
                  <div class="font-18 white-color">
                    FULL WEEK
                    <div class="font-16 white-color">
                      Starts From 8.999 AED/day
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="d-flex gap-2 justify-content-start align-items-start">
                  <img src={sricalIconEmpty} />
                  <div class="font-18 white-color">
                    FULL MONTH
                    <div class="font-16 white-color">
                      Starts From 8.999 AED/day
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="booking-values">
              <section>
                <div class="date-text">Start Date</div>
                <div>
                  <ThemeProvider theme={theme}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        slots={{
                          openPickerIcon: DateIcon,
                        }}
                        leftArrowIcon={<img src={arrowIcon} alt="calendar" />}
                        format="DD MMMM YYYY"
                        views={["month", "year", "day"]}
                        slotProps={{
                          textField: {
                            InputProps: {
                              size: "medium",
                              readOnly: true,
                              color: " #131825",
                              sx: { fontSize: 20, maxWidth: 225 },
                              disableUnderline: true,
                            },
                            variant: "standard",
                          },
                        }}
                      />
                    </LocalizationProvider>
                  </ThemeProvider>
                </div>
              </section>

              <section>
                <div class="date-text">Start Date</div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    slots={{
                      openPickerIcon: DateIcon,
                    }}
                    leftArrowIcon={<img src={arrowIcon} alt="calendar" />}
                    format="DD MMMM YYYY"
                    views={["month", "year", "day"]}
                    slotProps={{
                      textField: {
                        InputProps: {
                          size: "medium",
                          readOnly: true,
                          color: " #131825",

                          sx: { fontSize: 20, maxWidth: 225 },
                          disableUnderline: true,
                        },
                        variant: "standard",
                      },
                    }}
                  />
                </LocalizationProvider>
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
        </div>
        <PassengersModal show={show} handleClose={handleClose} />
      </div>
    </>
  );
}

export default Booking;
