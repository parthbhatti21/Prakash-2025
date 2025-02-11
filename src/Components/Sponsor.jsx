import React from "react";
import "./styles/sponsor.css";
import pmc from "../assets/sponsors/pmc.svg";
import IMS from "../assets/sponsors/IMS.svg";
import RadhikaJewellers from "../assets/sponsors/RadhikaJewellers.svg";
import SparkToday from "../assets/sponsors/SparkToday.svg";
import GamerzRig from "../assets/sponsors/GamerzRig.svg";
import AtlantaLogo from "../assets/sponsors/AtlantaLogo.svg";
import Gamerzclan from "../assets/sponsors/Gamerzclan.svg";
import SwoldierFitness from "../assets/sponsors/SwoldierFitness.svg";

const Sponsor = () => {
  // Define sponsor links
  const sponsorLinks = {
    pmc: "https://pmccommerce.com/",
    radhikaJewellers: "https://radhikajewellers.in/",
    sparkToday: "https://www.facebook.com/SparkTodayNews/",
    gamerzRig: "https://www.youtube.com/@gamerzrigvadodara5901",
    gamerzclan: "https://www.youtube.com/@gamerzclanindia",
    atlanta: "https://aetrafo.com/",
    ims: "https://www.imsindia.com/",
    swoldierFitness: "https://www.swoldierfitness.com/"
  };

  // Function to handle sponsor clicks
  const handleSponsorClick = (url) => {
    window.open(url, '_blank', 'noopener noreferrer');
  };

  return (
    <div className="sponsor-container">
      {/* Main Sponsor */}
      <div className="main-sponsor">
        <h3>Co-powered by</h3>
        <img 
          src={pmc} 
          alt="Main Sponsor" 
          onClick={() => handleSponsorClick(sponsorLinks.pmc)}
          style={{ cursor: 'pointer' }}
        />
      </div>

      {/* Sub Sponsors */}
      <div className="sub-sponsors">
        <div className="sponsor-box1">
          <h3>Jewellery Partner</h3>
          <img 
            className="radhika-jewellers" 
            src={RadhikaJewellers} 
            alt="Radhika Jewellers Sponsor"
            onClick={() => handleSponsorClick(sponsorLinks.radhikaJewellers)}
            style={{ cursor: 'pointer' }}
          />
        </div>
        
        <div className="sponsor-box2">
          <h3>Media partner</h3>
          <img 
            src={SparkToday} 
            alt="Spark Today Sponsor"
            onClick={() => handleSponsorClick(sponsorLinks.sparkToday)}
            style={{ cursor: 'pointer' }}
          />
        </div>
        
        <div className="sponsor-box3">
          <h3>eSports partner</h3><br />
          <img 
            src={GamerzRig} 
            alt="GamerzRig Sponsor" 
            className="img1"
            onClick={() => handleSponsorClick(sponsorLinks.gamerzRig)}
            style={{ cursor: 'pointer' }}
          />
          <img 
            src={Gamerzclan} 
            alt="Gamerz Clan Sponsor" 
            className="img2"
            onClick={() => handleSponsorClick(sponsorLinks.gamerzclan)}
            style={{ cursor: 'pointer' }}
          />
        </div>

        <div className="sponsor-box4">
          <div className="sponsor-content">
            <h3>Associate Sponsor</h3>
            <img 
              src={AtlantaLogo} 
              alt="Atlanta Logo Sponsor"
              onClick={() => handleSponsorClick(sponsorLinks.atlanta)}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
        
        <div className="sponsor-box5">
          <div className="sponsor-content">
            <h3>CAT partner</h3>
            <img 
              src={IMS} 
              alt="IMS Sponsor"
              onClick={() => handleSponsorClick(sponsorLinks.ims)}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
        
        <div className="sponsor-box6">
          <div className="sponsor-content">
            <h3>Fitness Partner</h3>
            <img 
              src={SwoldierFitness} 
              alt="Swoldier Fitness Sponsor"
              onClick={() => handleSponsorClick(sponsorLinks.swoldierFitness)}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;