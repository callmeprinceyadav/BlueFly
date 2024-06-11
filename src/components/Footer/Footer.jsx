import React from "react";
import "./Footer.css"; //
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer_links">
          <div className="footer_links_container">
            <h2>About Us</h2>
            <div className="footer_links_container_item">Contact us</div>
            <div className="footer_links_container_item">
              Frequently Asked Questions
            </div>
            <div className="footer_links_container_item">
              Shipping & Returns
            </div>
            <div className="footer_links_container_item">Pre-Owned Guide</div>
            <div className="footer_links_container_item">Sell on Bluefly</div>
          </div>
        </div>
        <div className="footer_section">
          <div className="footer_links_container_item"><h2>Privacy Policy</h2></div>
          <div className="footer_links_container_item">Terms & Conditions</div>
          <div className="footer_links_container_item">
            Do not sell my personal information
          </div>
          <div className="footer_links_container_item">
            Shop Pay Installments
          </div>
        </div>
        <div className="footer_fill">
          <h2>SIGN UP AND SAVE</h2>
          <div>Subscribe to get exclusive offers on designer brands</div>
          <div>
            <input type="text" id="name" name="name"></input>
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;