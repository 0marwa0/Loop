import { useState, useEffect, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import logo from "../assets/icons/logo.svg";
import menu from "../assets/icons/menu.svg";

import "./navBar.css";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const windowOnClick = (event) => {
    if (modalRef.current === event.target) {
      toggleModal();
    }
  };

  useEffect(() => {
    window.addEventListener("click", windowOnClick);
    return () => {
      window.removeEventListener("click", windowOnClick);
    };
  }, []);

  return (
    <>
      <div class="d-flex justify-content-between gap-2 navbar-v2">
        <img src={logo} className="logo-icon" />
        <div class="d-flex gap-2 align-items-center">
          <div className="text-18 pointer" onClick={toggleModal}>
            MENU
          </div>
          <img src={menu} className="pointer" />
        </div>
      </div>
      {isOpen ? (
        <div className="popup">
          <div className="popup_inner container-layout">
            <a href=""> Home</a>
            <a href=""> The Loop Yacht</a>
            <a href=""> Meet The Crew</a>
            <a href=""> Locate Loop in Dubai</a>
            <button className="nav-btn">BOOK NOW</button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Navbar;
