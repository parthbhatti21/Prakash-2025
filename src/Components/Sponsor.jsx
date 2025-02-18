import React from "react";
import "./styles/sponsor.css";
import pmc from "../assets/sponsors/pmc.png";
import IMS from "../assets/sponsors/ims.png";
import RadhikaJewellers from "../assets/sponsors/RadhikaBen.png";
import SparkToday from "../assets/sponsors/SparkBhai.png";
import GamerzRig from "../assets/sponsors/GamerzRig.svg";
import AtlantaLogo from "../assets/sponsors/AtlantaBhai.png";
import Gamerzclan from "../assets/sponsors/Gamerzclan.svg";
import SwoldierFitness from "../assets/sponsors/SwoldierFitness.jpeg";
import Venturi from "../assets/sponsors/Venturi.png";
import ngo from "../assets/sponsors/ngo.png";
import FootBall from "../assets/sponsors/FootBall.jpeg";
import PBall from "../assets/sponsors/PickleBall.jpeg";


const Sponsor = () => {
  // Define sponsor links
  // const sponsorLinks = {
  //   pmc: "https://www.instagram.com/pmccommerce?igsh=MWF2aG84dzZoZDVmMA==",
  //   radhikaJewellers: "https://radhikajewellers.in/",
  //   sparkToday: "https://www.facebook.com/SparkTodayNews/",
  //   gamerzRig: "https://www.youtube.com/@gamerzrigvadodara5901",
  //   gamerzclan: "https://www.youtube.com/@gamerzclanindia",
  //   atlanta: "https://aetrafo.com/",
  //   ims: "https://www.imsindia.com/",
  //   swoldierFitness: "https://www.swoldierfitness.com/"
  // };
  const sponsorLinks = {
    fcArena: "https://www.instagram.com/fcarena_360?igsh=dnoxcDJraWpsdXkw",
    fcSmash: "https://www.instagram.com/fcsmash_vadodara?igsh=MXBiMGFseDd0dWhpaA==",
    radhikaJewellers: "https://www.instagram.com/radhikajewellersvadodara?igsh=MWQzOG8yYzVvMm5ubA==",
    swoldierFitnessGym: "https://www.instagram.com/swoldierfitnessindia?igsh=eWh4ejg5cHlwaWtt",
    sparkToday: "https://www.instagram.com/sparktodaynews?igsh=dDZvbDN2aWZnaDl5",
    imsVenturi: "https://www.instagram.com/imsventuri.gujarat?igsh=MTc3b3lqbWk0OTVjdQ==",
    gamerzRig: "https://www.youtube.com/@gamerzrigvadodara5901",
    gamerzclan: "https://www.youtube.com/@gamerzclanindia",
    atlanta: "https://www.instagram.com/atlantaelectricals?igsh=Z2pnZnVqN3M0Nmg3",
    ims: "https://www.instagram.com/ims_vadodara?igsh=c3pnc3RqbW1oeXpx",
    pmcClub: "https://www.instagram.com/thepmc.club?igsh=MWYxNzdyZm8zc2RjZA==",
    pmcCommerce: "https://pmccommerce.com/",
    fcPark: "https://www.instagram.com/fc_arenapark_vadodara?igsh=MXBwcXBuZGUwejVtcA==",
    ngo:"https://maps.app.goo.gl/XYzHRsSCwqsmVYXm8?g_st=aw",
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
        className="mainSponsorImg"
          src={pmc} 
          alt="Main Sponsor" 
          onClick={() => handleSponsorClick(sponsorLinks.pmcCommerce)}
          style={{ cursor: 'pointer' }}
        />
      </div>

      {/* Sub Sponsors */}
      <div className="sub-sponsors">
        <div className="sponsor-box1">
          
          <h3>Associate Sponsor</h3>
            <img 
              src={AtlantaLogo} 
              alt="Atlanta Logo Sponsor"
              onClick={() => handleSponsorClick(sponsorLinks.atlanta)}
              style={{ cursor: 'pointer' }}
            />
        </div>
        
        <div className="sponsor-box2">
          
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
        
        <div className="sponsor-box3">
          <h3>Supporting Sponsor</h3><br />
          <img 
            src={Venturi} 
            alt="Venturi" 
            className="img1"
            onClick={() => handleSponsorClick(sponsorLinks.imsVenturi)}
            style={{ cursor: 'pointer' }}
          />
          
        </div>

        <div className="sponsor-box4">
          <div className="sponsor-content">
          
          <h3>Media partner</h3>
          <img 
            src={SparkToday} 
            alt="Spark Today Sponsor"
            onClick={() => handleSponsorClick(sponsorLinks.sparkToday)}
            style={{ cursor: 'pointer' }}
          />
          </div>
        </div>
        
        <div className="sponsor-box5">
          <div className="sponsor-content">
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
        </div>
        
        <div className="sponsor-box6">
        <div className="sponsor-content">
        <h3>Sports partner</h3><br />
          <img 
            src={PBall} 
            alt="FC Smash Sponsor" 
            className="img1"
            onClick={() => handleSponsorClick(sponsorLinks.fcSmash)}
            style={{ cursor: 'pointer' }}
          />
          <img 
            src={FootBall} 
            alt="FC Arena Sponsor" 
            className="img2"
            onClick={() => handleSponsorClick(sponsorLinks.fcArena)}
            style={{ cursor: 'pointer' }}
          />
          </div>
        </div>
        <div className="sponsor-box7">
          <div className="sponsor-content">
          <h3>Jewellery Partner</h3>
          <img 
            className="radhika-jewellers" 
            src={RadhikaJewellers} 
            alt="Radhika Jewellers Sponsor"
            onClick={() => handleSponsorClick(sponsorLinks.radhikaJewellers)}
            style={{ cursor: 'pointer' }}
          />
          </div>
        </div>
        <div className="sponsor-box8">
        <div className="sponsor-content">
            <h3>Fitness Partner</h3>
            <img 
              src={SwoldierFitness} 
              alt="Swoldier Fitness Sponsor"
              onClick={() => handleSponsorClick(sponsorLinks.swoldierFitnessGym)}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
        <div className="sponsor-box9">
        <div className="sponsor-content">
            <h3>NGO partner</h3>
            <img 
              src={ngo} 
              alt="NGO"
              onClick={() => handleSponsorClick(sponsorLinks.ngo)}
              style={{ cursor: 'pointer' }}
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Sponsor;