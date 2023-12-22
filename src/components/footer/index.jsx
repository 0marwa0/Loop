import { useState } from "react";
import "./index.css";
import facebookIcon from "../../assets/icons/facebook-icon.svg";
import linkedinIcon from "../../assets/icons/linkedin-icon.svg";
import twiterIcon from "../../assets/icons/twiter-icon.svg";
import youtypeIcon from "../../assets/icons/youtype-icon.svg";
import instgramIcon from "../../assets/icons/instgram-icon.svg";
function Footer() {
  return (
    <>
      <section id="footer">
        <div className="container footer-layout">
          <div class="footer-icons">
            <a href="#">
              <img src={facebookIcon} className="footer-icon" />
            </a>

            <a href="#">
              {" "}
              <img src={twiterIcon} className="footer-icon" />
            </a>
            <a href="#">
              <img src={instgramIcon} className="footer-icon" />
            </a>
            <a href="#">
              <img src={youtypeIcon} className="footer-icon" />
            </a>
            <a href="#">
              <img src={linkedinIcon} className="footer-icon" />
            </a>
          </div>
          <div className="text-center">
            <a href="#">© LOOP 2023</a>
          </div>
          <div className="terms-porlicy">
            <div className="text-center">
              <a href="#"> Terms Of Use</a>
            </div>
            <div className="text-center">
              <a href="#"> Privacy Policy</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
