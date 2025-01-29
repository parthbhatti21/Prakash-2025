import { useState } from "react";
import "./style.css"; // Import your CSS file

export default function Navbar() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  return (
    <nav>
      {/* Sidebar */}
      <ul className={`sidebar ${isSidebarVisible ? "show" : "hide"}`}>
        <li onClick={() => setSidebarVisible(false)}>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="26"
              viewBox="0 96 960 960"
              width="26"
            >
              <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
            </svg>
          </a>
        </li>
        <li className="ledFont">
          <a href="#" className="textcolor">Home</a>
        </li>
        <li className="ledFont">
          <a href="#" className="textcolor">About Us</a>
        </li>
        <li className="ledFont">
          <a href="#" className="textcolor">Events</a>
        </li>
        <li className="ledFont">
          <a href="#" className="textcolor">Team</a>
        </li>
        <li className="ledFont">
          <a href="#" className="textcolor">History</a>
        </li>
      </ul>

      {/* Navbar */}
      <ul>
        <li>
          <a href="#">XXXLogoMukoXXX</a>
        </li>
        <li className="hideOnMobile">
          <a href="#">Home</a>
        </li>
        <li className="hideOnMobile">
          <a href="#">About Us</a>
        </li>
        <li className="hideOnMobile">
          <a href="#">Events</a>
        </li>
        <li className="hideOnMobile">
          <a href="#">History</a>
        </li>
        <li className="hideOnMobile">
          <a href="#">Team</a>
        </li>
        <li className="menu-button" onClick={() => setSidebarVisible(true)}>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="26"
              viewBox="0 96 960 960"
              width="26"
            >
              <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
}
