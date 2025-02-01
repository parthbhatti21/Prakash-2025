// import { useState } from "react";
// import "./style.css"; // Import your CSS file
// import MarqueeComponent from "./MarqueeComponent";

// export default function Navbar() {
//   const [isSidebarVisible, setSidebarVisible] = useState(false);

//   return (
//     <nav>
//       {/* Sidebar */}
//       <MarqueeComponent />
//       <ul className={`sidebar ${isSidebarVisible ? "show" : "hide"}`}>
//         <li onClick={() => setSidebarVisible(false)}>
//           <a href="#">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               height="26"
//               viewBox="0 96 960 960"
//               width="26"
//             >
//               <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
//             </svg>
//           </a>
//         </li>
//         <li className="ledFont">
//           <a href="#" className="textcolor">Home</a>
//         </li>
//         <li className="ledFont">
//           <a href="#" className="textcolor">About Us</a>
//         </li>
//         <li className="ledFont">
//           <a href="#" className="textcolor">Events</a>
//         </li>
//         <li className="ledFont">
//           <a href="#" className="textcolor">Team</a>
//         </li>
//         <li className="ledFont">
//           <a href="#" className="textcolor">History</a>
//         </li>
//       </ul>

//       {/* Navbar */}
//       <ul>
//         <li>
//           <a href="#">XXXLogoMukoXXX</a>
//         </li>
//         <li className="hideOnMobile">
//           <a href="#">Home</a>
//         </li>
//         <li className="hideOnMobile">
//           <a href="#">About Us</a>
//         </li>
//         <li className="hideOnMobile">
//           <a href="#">Events</a>
//         </li>
//         <li className="hideOnMobile">
//           <a href="#">History</a>
//         </li>
//         <li className="hideOnMobile">
//           <a href="#">Team</a>
//         </li>
//         <li className="menu-button" onClick={() => setSidebarVisible(true)}>
//           <a href="#">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               height="26"
//               viewBox="0 96 960 960"
//               width="26"
//             >
//               <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
//             </svg>
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// }

import React, { useState, useEffect } from "react";
import "./styles/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Function to update isMobile state based on window size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(false); // Close sidebar when switching to desktop
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <header className="navbar">
      <h1 className="logo">PRAKARSH</h1>

      {/* Desktop Navbar */}
      <nav className="nav-links">
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>EVENTS</li>
          <li>HISTORY</li>
          <li>OPEN R</li>
          <li>TEAM</li>
        </ul>
      </nav>

      {/* Hamburger Menu (Mobile Only) */}
      {isMobile && (
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      )}

      {/* Sidebar Menu (Mobile Only) */}
      {isMobile && (
        <div className={`sidebar ${isOpen ? "show" : ""}`}>
          <div className="close-btn" onClick={toggleMenu}>✖</div>
          <ul>
            <li onClick={toggleMenu}>HOME</li>
            <li onClick={toggleMenu}>ABOUT</li>
            <li onClick={toggleMenu}>EVENTS</li>
            <li onClick={toggleMenu}>HISTORY</li>
            <li onClick={toggleMenu}>OPEN R</li>
            <li onClick={toggleMenu}>TEAM</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;

