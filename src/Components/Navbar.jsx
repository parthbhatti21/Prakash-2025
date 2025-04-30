import { useState, useEffect, useCallback } from "react";
import "./styles/navbar.css";
import logoImage from "../assets/logo1.png";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showNavbar, setShowNavbar] = useState(true);
  let lastScrollY = 0;

  // Debounced resize event
  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth <= 768);
    if (window.innerWidth > 768) {
      setIsOpen(false); // Close sidebar on desktop switch
    }
  }, []);

  useEffect(() => {
    const debounceResize = setTimeout(() => {
      handleResize();
    }, 150); // Debounce time for resize

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(debounceResize);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  // Handle scroll event for hiding and showing the navbar
  const handleScroll = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false); // Scroll Down
    } else {
      setShowNavbar(true); // Scroll Up
    }
    lastScrollY = window.scrollY;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const toggleMenu = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  const scrollToSection = useCallback((id) => {
    if (window.location.pathname !== "/") {
      navigate("/", { replace: true });
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Small delay to allow navigation to complete
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [navigate]);


  const EventSection = useCallback(() => {
    if (window.location.pathname === "/") {
      scrollToSection("events-section");
      localStorage.setItem("eventname","All");
    } else {
      navigate("events");
      localStorage.setItem("eventname","All");
    }
  }, [navigate, scrollToSection]);
  const TimeLineSection = useCallback(() => {
    if (window.location.pathname === "/") {
      scrollToSection("timeline");
      localStorage.setItem("eventname","All");
    }
  }, [navigate, scrollToSection]);

  return (
    <header className={`navbar ${showNavbar ? "show" : "hide"}`}>
      {/* 🔥 Made the logo clickable to navigate to home */}
      <img
        src={logoImage}
        alt="PRAKARSH Logo"
        className="logo"
        onClick={() => {
          navigate("/");
          window.scrollTo(0, 0);
        }}
        style={{ cursor: "pointer" }} // 🔥 Added pointer cursor for better UX
      />

      {/* Desktop Navbar */}
      <nav className="nav-links">
        <ul>
          <li
            className="nav-item"
            onClick={() => {
              navigate("/");
              window.scrollTo(0, 0);
            }}
          >
            HOME
          </li>
      <li className="nav-item" onClick={() => {navigate("/aboutus");localStorage.setItem("eventname","All");}}>
            ABOUT
          </li>
          <li className="nav-item" onClick={EventSection}>
            EVENTS
          </li>
          <li className="nav-item" onClick={() => {scrollToSection("timeline");localStorage.setItem("eventname","All");}}>
            TIMELINE
          </li>
          <li className="nav-item" onClick={() => {scrollToSection("team-section");localStorage.setItem("eventname","All");}}>
            TEAM
          </li>
          
            <NavLink to={"https://konfhub.com/svit" } className="nav-item"><li>REGISTER NOW</li></NavLink>
    

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
            <li
              className="nav-item"
              onClick={() => {
                toggleMenu();
                navigate("/");
                window.scrollTo(0, 0);
              }}
            >
              HOME
            </li>
            <li className="nav-item" onClick={() => { toggleMenu(); navigate("/aboutus"); localStorage.setItem("eventname","All");}}>
              ABOUT
            </li>
            <li className="nav-item" onClick={() => { EventSection(); toggleMenu();localStorage.setItem("eventname","All"); }}>
              EVENTS
            </li>
            <li className="nav-item" onClick={() => { toggleMenu(); scrollToSection(""); localStorage.setItem("eventname","All");}}>
              TIMELINE
            </li>
            <li className="nav-item" onClick={() => { toggleMenu(); scrollToSection("team-section");localStorage.setItem("eventname","All"); }}>
              TEAM
            </li>
            <NavLink to={"https://konfhub.com/svit" } className="nav-item"><li>REGISTER NOW</li></NavLink>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
