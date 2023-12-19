import { useState, useEffect } from "react";
import "./index.css";
import React from "react";
import Modal from "react-bootstrap/Modal";

import Slider from "@mui/material/Slider";

function PassengersModal({ show, handleClose }) {
  function valuetext(value) {
    return `${value}i`;
  }
  return (
    <div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="passenger-modal-title">
            Passengers Number
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          0
          <Slider
            aria-label="Temperature"
            defaultValue={30}
            style={{ height: "18px" }}
            getAriaValueText={valuetext}
            color="success"
          />
          {valuetext}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default PassengersModal;
