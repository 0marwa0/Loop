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
            <img src={facebookIcon} className="footer-icon" />
            <img src={twiterIcon} className="footer-icon" />
            <img src={instgramIcon} className="footer-icon" />
            <img src={youtypeIcon} className="footer-icon" />
            <img src={linkedinIcon} className="footer-icon" />
          </div>
          <div className="text-center">© LOOP 2023</div>
          <div className="terms-porlicy">
            <div className="text-center">Terms Of Use</div>
            <div className="text-center">Privacy Policy</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
