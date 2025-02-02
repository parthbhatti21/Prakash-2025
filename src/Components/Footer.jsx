import React from "react";
import "./styles/footer.css";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa6";
import { LuMails } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa";
import svitLogo from "../assets/svitlogo.png"; // Import the logo image

const Footer = () => {
  return (
    <footer className="footer">
      {/* Marquee Section */}
      <div className="space-marquee">
        <div className="marquee-content">
          🚀 HURRY AND GRAB YOUR TICKETS NOW! JOIN US ON AN EPIC SPACE ADVENTURE! LIMITED SPOTS AVAILABLE! 🌟
        </div>
        <div className="hover-box">
          <button className="hover-box-button">Book Now</button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="footer-container">
        <div className="footer-grid">
          {/* Contact Us */}
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>contact@spaceteam.com</p>
            <p>+1 (123) 456-7890</p>
          </div>

          {/* Follow Us */}
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <i className="bi bi-twitter"><FaInstagram/></i>
              <i className="bi bi-instagram"><BsTwitterX/></i>
              <i className="bi bi-facebook"><FaFacebook /></i>
              <i className="bi bi-lumails"><LuMails /></i>
              <i className="bi bi-youtube"><FaYoutube /></i>
            </div>
          </div>

          {/* Event Location */}
          <div className="footer-section">
            <h3>Event Location</h3>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.478001580213!2d72.48618287621378!3d23.010695116944795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9bb90c5bb399%3A0x6c04c63b8891ecbb!2sJOSHI-KOTAK%20Institute%20of%20Management%20Studies%20and%20Research%20(JKIMSR)!5e0!3m2!1sen!2sin!4v1706633708794!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="map"
              ></iframe>
              <a
                href="https://maps.app.goo.gl/bGC9fdt6QLYzKWvk6"
                target="_blank"
                rel="noopener noreferrer"
                className="map-overlay"
                aria-label="Open in Google Maps"
              ></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <img src={svitLogo} alt="SVIT Logo" className="footer-logo" /> {/* Use the imported image */}
          <p className="footer-text">Sardar Vallabhbhai Patel Institute of Technology</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
