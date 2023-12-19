import { useState } from "react";

import logo from "../assets/icons/logo.svg";
import menu from "../assets/icons/menu.svg";
function Navbar() {
  return (
    <>
      <div class="d-flex justify-content-between gap-2 navbar-v2">
        <img src={logo} className="logo-icon" />
        <div class="d-flex gap-2 align-items-center">
          <div className="text-18">MENU</div>
          <img src={menu} />
        </div>
      </div>
    </>
  );
}

export default Navbar;
