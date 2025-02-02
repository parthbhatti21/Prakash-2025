import React from "react";
import "./styles/sponsor.css"; // Import the CSS file

const Sponsor = () => {
  return (
    <div className="sponsor-container">
      {/* Main Sponsor */}
      <div className="main-sponsor">Sponsor 1</div>

      {/* Sub Sponsors */}
      <div className="sub-sponsors">
        <div className="sponsor-box">Sponsor 2</div>
        <div className="sponsor-box">Sponsor 3</div>
        <div className="sponsor-box">Sponsor 4</div>
      </div>
    </div>
  );
};

export default Sponsor;
