
// import React, { useState, useEffect } from "react";
// import "./styles/navbar.css";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   // Function to update isMobile state based on window size
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//       if (window.innerWidth > 768) {
//         setIsOpen(false); // Close sidebar when switching to desktop
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const toggleMenu = () => {
//     if (isMobile) {
//       setIsOpen(!isOpen);
//     }
//   };

//   return (
//     <header className="navbar">
//       <h1 className="logo">PRAKARSH</h1>

//       {/* Desktop Navbar */}
//       <nav className="nav-links">
//         <ul>
//           <li>HOME</li>
//           <li>ABOUT</li>
//           <li>EVENTS</li>
//           <li>HISTORY</li>
//           <li>OPEN R</li>
//           <li>TEAM</li>
//         </ul>
//       </nav>

//       {/* Hamburger Menu (Mobile Only) */}
//       {isMobile && (
//         <div className="hamburger" onClick={toggleMenu}>
//           <div className="bar"></div>
//           <div className="bar"></div>
//           <div className="bar"></div>
//         </div>
//       )}

//       {/* Sidebar Menu (Mobile Only) */}
//       {isMobile && (
//         <div className={`sidebar ${isOpen ? "show" : ""}`}>
//           <div className="close-btn" onClick={toggleMenu}>✖</div>
//           <ul>
//             <li onClick={toggleMenu}>HOME</li>
//             <li onClick={toggleMenu}>ABOUT</li>
//             <li onClick={toggleMenu}>EVENTS</li>
//             <li onClick={toggleMenu}>HISTORY</li>
//             <li onClick={toggleMenu}>OPEN R</li>
//             <li onClick={toggleMenu}>TEAM</li>
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;

import  { useState, useEffect } from "react";
import "./styles/navbar.css";
import logoImage from "../assets/logo1.png"; // Adjust the path to your image

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
      {/* Replace the text logo with an image */}
      <img src={logoImage} alt="PRAKARSH Logo" className="logo" />

      {/* Desktop Navbar */}
      <nav className="nav-links">
        <ul>
          <li className="nav-item">HOME</li>
          <li className="nav-item">ABOUT</li>
          <li className="nav-item">EVENTS</li>
          <li className="nav-item">HISTORY</li>
          <li className="nav-item">OPEN R</li>
          <li className="nav-item">TEAM</li>
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
            <li className="nav-item" onClick={toggleMenu}>HOME</li>
            <li className="nav-item" onClick={toggleMenu}>ABOUT</li>
            <li className="nav-item" onClick={toggleMenu}>EVENTS</li>
            <li className="nav-item" onClick={toggleMenu}>HISTORY</li>
            <li className="nav-item" onClick={toggleMenu}>OPEN R</li>
            <li className="nav-item" onClick={toggleMenu}>TEAM</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;