import React, { useState } from "react";
import './style.css';

const MarqueeComponent = () => {
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [showButton, setShowButton] = useState(false);

  // Handle mousemove to track cursor position and show the button
  const handleMouseMove = (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    setButtonPosition({ x: mouseX, y: mouseY });
    setShowButton(true);
  };

  // Hide button when the mouse leaves the container
  const handleMouseLeave = () => {
    setShowButton(false);
  };

  return (
    <div className="marquee-container" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="marquee-text">
        ⚡💥 Hurry! Flash Sale - 70% OFF for 24 Hours! 💥
      </div>
      {showButton && (
        <button
          className="buy-now-button"
          style={{
            transform: `translate(${buttonPosition.x}px, ${buttonPosition.y}px)`,
          }}
        >
          Buy Now
        </button>
      )}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <MarqueeComponent />
    </div>
  );
}

export default MarqueeComponent;
