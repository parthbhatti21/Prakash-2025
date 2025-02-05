
// import styled from 'styled-components';
// import Sidd from '../assets/Sidd.jpeg';
// import { useState } from 'react';
// const TeamSection = () => {
//   const [activeTeam, setActiveTeam] = useState('core'); // State to track active team

//   // Core Team Data
//   const coreTeam = [
//     { name: "Siddharth Panchal", image: Sidd, category: "Core Team" },
//     { name: "Dhaval Patel", image: "https://via.placeholder.com/150", category: "Core Team" },
//     { name: "Malak", image: "https://via.placeholder.com/150", category: "Core Team" },
//   ];

//   // Developer Team Data
//   const developerTeam = [
//     { name: "Alex Cipher", image: "https://via.placeholder.com/150", category: "Developer" },
//     { name: "Maya Binary", image: "https://via.placeholder.com/150", category: "Developer" },
//     { name: "Zack Matrix", image: "https://via.placeholder.com/150", category: "Developer" },
//   ];

//   // Determine which team to display
//   const people = activeTeam === 'core' ? coreTeam : developerTeam;

//   return (
//     <StyledWrapper>
//       {/* Buttons */}
//       <div className="button-group ">
//         <div className='btn-grp'>
//           <button
//             className={`coreteam team-button ${activeTeam === 'core' ? 'active' : ''}`}
//             onClick={() => setActiveTeam('core')}
//           >
//             Core Team
//           </button>
//           <button
//             className={`team-button ${activeTeam === 'developer' ? 'active' : ''}`}
//             onClick={() => setActiveTeam('developer')}
//           >
//             Developer Team
//           </button>
//         </div>
//       </div>
//       {people.map((person, index) => (
//         <div className="container2 noselect card-container2" key={index}>
//           <div className="canvas">
//             <div className="tracker tr-1" />
//             <div className="tracker tr-2" />
//             <div className="tracker tr-3" />
//             <div className="tracker tr-4" />
//             <div className="tracker tr-5" />
//             <div className="tracker tr-6" />
//             <div className="tracker tr-7" />
//             <div className="tracker tr-8" />
//             <div className="tracker tr-9" />
//             <div id="card">
//               <div className="card-content">
//                 <div className="card-glare" />
//                 <div className="cyber-lines">
//                   <span /><span /><span /><span />
//                 </div>
//                 <div className='PersonDetail'>
//                   <img src={person.image} alt={person.name} width={80} /> {/* Adjust width and height as needed */}
//                   <p id="prompt">{person.name}</p>
//                 </div>
//                 <div className="title">{person.catogeory}</div>
//                 <div className="glowing-elements">
//                   <div className="glow-1" />
//                   <div className="glow-2" />
//                   <div className="glow-3" />
//                 </div>
//                 <div className="subtitle">
//                   <span>INTERACTIVE</span>
//                   <span className="highlight">3D EFFECT</span>
//                 </div>
//                 <div className="card-particles">
//                   <span /><span /><span /> <span /><span /><span />
//                 </div>
//                 <div className="corner-elements">
//                   <span /><span /><span /><span />
//                 </div>
//                 <div className="scan-line" />
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </StyledWrapper>
//   );
// }


// const StyledWrapper = styled.div`
//  .button-group {
//  margin-top: 20px;
//  position: relative;
//  z-index: 100;
 
//   width:100%;
//     display: flex;
//     justify-content: center;
//     gap: 10px;
//     margin-bottom: 20px;
//   }

//   .team-button {
//     padding: 10px 20px;
//     border: none;
//     border-radius: 5px;
//     background-color: #333;
//     color: #fff;
//     cursor: pointer;
//     transition: background-color 0.3s ease;

//     &:hover {
//       background-color: #555;
//     }

//     &.active {
//       background-color: #00ffaa;
//       color: #000;
//     }
//   }

//   .card-container2 {
//     display: flex;
//     flex-wrap: wrap;
//     gap: 20px;
//   }

//   .card {
//     border: 1px solid #ccc;
//     border-radius: 10px;
//     padding: 20px;
//     text-align: center;
//     width: 150px;
//   }

//   .card img {
//     width: 100%;
//     border-radius: 50%;
//   }
//  display: flex;
//   flex-wrap: wrap; /* Allow cards to wrap to the next line */
//   justify-content: center; /* Center cards horizontally */
//   align-items: center; /* Center cards vertically */
//   gap: 20px; /* Space between cards */
//   padding: 20px; /* Padding around the container */
//   min-height: 10vh; /* Ensure the wrapper takes up the full height of the page */
// /* Optional: Add a background color */
// .PersonDetail {
//   position: absolute;
//   top: 50%; /* Center vertically */
//   left: 50%; /* Center horizontally */
//   transform: translate(-50%, -50%); /* Adjust for exact centering */
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 10px; /* Space between image and name */
//   z-index: 10;
//   text-align: center; /* Ensure text is centered */
// }

// .PersonDetail img {
//   border-radius: 50%; /* Makes the image circular */
//   border: 2px solid rgba(255, 255, 255, 0.2); /* Optional: Adds a border */
//   box-shadow: 0 0 10px rgba(0, 255, 170, 0.3); /* Optional: Adds a glow effect */
//   width: 80px; /* Fixed width */
//   height: 80px; /* Fixed height */
//   object-fit: cover; /* Ensures the image covers the area without distortion */
// }

// #prompt {
//   font-size: 16px;
//   font-weight: 600;
//   letter-spacing: 1px;
//   color: rgba(255, 255, 255, 0.9);
//   text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
//   margin: 0; /* Remove default margin */
// }
//   .container2 {
//       position: relative;
//     width: 190px;
//     height: 254px;
//     transition: 200ms;
//   }

//   .container:active {
//     width: 180px;
//     height: 245px;
//   }

//   #card {
//     position: absolute;
//     inset: 0;
//     z-index: 0;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border-radius: 20px;
//     transition: 700ms;
//     background: linear-gradient(45deg, #1a1a1a, #262626);
//     border: 2px solid rgba(255, 255, 255, 0.1);
//     overflow: hidden;
//     box-shadow:
//       0 0 20px rgba(0, 0, 0, 0.3),
//       inset 0 0 20px rgba(0, 0, 0, 0.2);
//   }

//   .card-content {
//     position: relative;
//     width: 100%;
//     height: 100%;
//   }

//   #prompt {
//     bottom: 100px;
//     left: 50%;
//     transform: translateX(-50%);
//     z-index: 20;
//     font-size: 16px;
//     font-weight: 600;
//     letter-spacing: 2px;
//     transition: 300ms ease-in-out;
//     position: absolute;
//     text-align: center;
//     color: rgba(255, 255, 255, 0.7);
//     text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
//   }

//   .title {
//     opacity: 0;
//     transition: 300ms ease-in-out;
//     position: absolute;
//     font-size: 28px;
//     font-weight: 800;
//     letter-spacing: 4px;
//     text-align: center;
//     width: 100%;
//     padding-top: 20px;
//     background: linear-gradient(45deg, #00ffaa, #00a2ff);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     filter: drop-shadow(0 0 15px rgba(0, 255, 170, 0.3));
//     text-shadow:
//       0 0 10px rgba(92, 103, 255, 0.5),
//       0 0 20px rgba(92, 103, 255, 0.3);
//   }

//   .subtitle {
//     position: absolute;
//     bottom: 40px;
//     width: 100%;
//     text-align: center;
//     font-size: 12px;
//     letter-spacing: 2px;
//     transform: translateY(30px);
//     color: rgba(255, 255, 255, 0.6);
//   }

//   .highlight {
//     color: #00ffaa;
//     margin-left: 5px;
//     background: linear-gradient(90deg, #5c67ff, #ad51ff);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     font-weight: bold;
//   }

//   .glowing-elements {
//     position: absolute;
//     inset: 0;
//     pointer-events: none;
//   }

//   .glow-1,
//   .glow-2,
//   .glow-3 {
//     position: absolute;
//     width: 100px;
//     height: 100px;
//     border-radius: 50%;
//     background: radial-gradient(
//       circle at center,
//       rgba(0, 255, 170, 0.3) 0%,
//       rgba(0, 255, 170, 0) 70%
//     );
//     filter: blur(15px);
//     opacity: 0;
//     transition: opacity 0.3s ease;
//   }

//   .glow-1 {
//     top: -20px;
//     left: -20px;
//   }
//   .glow-2 {
//     top: 50%;
//     right: -30px;
//     transform: translateY(-50%);
//   }
//   .glow-3 {
//     bottom: -20px;
//     left: 30%;
//   }

//   .card-particles span {
//     position: absolute;
//     width: 3px;
//     height: 3px;
//     background: #00ffaa;
//     border-radius: 50%;
//     opacity: 0;
//     transition: opacity 0.3s ease;
//   }

//   /* Hover effects */
//   .tracker:hover ~ #card .title {
//     opacity: 1;
//     transform: translateY(-10px);
//   }

//   .tracker:hover ~ #card .glowing-elements div {
//     opacity: 1;
//   }

//   .tracker:hover ~ #card .card-particles span {
//     animation: particleFloat 2s infinite;
//   }

//   @keyframes particleFloat {
//     0% {
//       transform: translate(0, 0);
//       opacity: 0;
//     }
//     50% {
//       opacity: 1;
//     }
//     100% {
//       transform: translate(calc(var(--x, 0) * 30px), calc(var(--y, 0) * 30px));
//       opacity: 0;
//     }
//   }

//   /* Particle positions */
//   .card-particles span:nth-child(1) {
//     --x: 1;
//     --y: -1;
//     top: 40%;
//     left: 20%;
//   }
//   .card-particles span:nth-child(2) {
//     --x: -1;
//     --y: -1;
//     top: 60%;
//     right: 20%;
//   }
//   .card-particles span:nth-child(3) {
//     --x: 0.5;
//     --y: 1;
//     top: 20%;
//     left: 40%;
//   }
//   .card-particles span:nth-child(4) {
//     --x: -0.5;
//     --y: 1;
//     top: 80%;
//     right: 40%;
//   }
//   .card-particles span:nth-child(5) {
//     --x: 1;
//     --y: 0.5;
//     top: 30%;
//     left: 60%;
//   }
//   .card-particles span:nth-child(6) {
//     --x: -1;
//     --y: 0.5;
//     top: 70%;
//     right: 60%;
//   }

//   #card::before {
//     content: "";
//     background: radial-gradient(
//       circle at center,
//       rgba(0, 255, 170, 0.1) 0%,
//       rgba(0, 162, 255, 0.05) 50%,
//       transparent 100%
//     );
//     filter: blur(20px);
//     opacity: 0;
//     width: 150%;
//     height: 150%;
//     position: absolute;
//     left: 50%;
//     top: 50%;
//     transform: translate(-50%, -50%);
//     transition: opacity 0.3s ease;
//   }

//   .tracker:hover ~ #card::before {
//     opacity: 1;
//   }

//   .tracker {
//     position: absolute;
//     z-index: 200;
//     width: 100%;
//     height: 100%;
//   }

//   .tracker:hover {
//     cursor: pointer;
//   }

//   .tracker:hover ~ #card #prompt {
//     opacity: 0;
//   }

//   .tracker:hover ~ #card {
//     transition: 300ms;
//     filter: brightness(1.1);
//   }

//   .container:hover #card::before {
//     transition: 200ms;
//     content: "";
//     opacity: 80%;
//   }

//   .canvas {
//     perspective: 800px;
//     inset: 0;
//     z-index: 200;
//     position: absolute;
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
//     grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
//     gap: 0px 0px;
//     grid-template-areas:
//       "tr-1 tr-2 tr-3 tr-4 tr-5"
//       "tr-6 tr-7 tr-8 tr-9 tr-10"
//       "tr-11 tr-12 tr-13 tr-14 tr-15"
//       "tr-16 tr-17 tr-18 tr-19 tr-20"
//       "tr-21 tr-22 tr-23 tr-24 tr-25";
//   }

//   .tr-1 {
//     grid-area: tr-1;
//   }

//   .tr-2 {
//     grid-area: tr-2;
//   }

//   .tr-3 {
//     grid-area: tr-3;
//   }

//   .tr-4 {
//     grid-area: tr-4;
//   }

//   .tr-5 {
//     grid-area: tr-5;
//   }

//   .tr-6 {
//     grid-area: tr-6;
//   }

//   .tr-7 {
//     grid-area: tr-7;
//   }

//   .tr-8 {
//     grid-area: tr-8;
//   }

//   .tr-9 {
//     grid-area: tr-9;
//   }

//   .tr-10 {
//     grid-area: tr-10;
//   }

//   .tr-11 {
//     grid-area: tr-11;
//   }

//   .tr-12 {
//     grid-area: tr-12;
//   }

//   .tr-13 {
//     grid-area: tr-13;
//   }

//   .tr-14 {
//     grid-area: tr-14;
//   }

//   .tr-15 {
//     grid-area: tr-15;
//   }

//   .tr-16 {
//     grid-area: tr-16;
//   }

//   .tr-17 {
//     grid-area: tr-17;
//   }

//   .tr-18 {
//     grid-area: tr-18;
//   }

//   .tr-19 {
//     grid-area: tr-19;
//   }

//   .tr-20 {
//     grid-area: tr-20;
//   }

//   .tr-21 {
//     grid-area: tr-21;
//   }

//   .tr-22 {
//     grid-area: tr-22;
//   }

//   .tr-23 {
//     grid-area: tr-23;
//   }

//   .tr-24 {
//     grid-area: tr-24;
//   }

//   .tr-25 {
//     grid-area: tr-25;
//   }

//   .tr-1:hover ~ #card {
//     transition: 125ms ease-in-out;
//     transform: rotateX(20deg) rotateY(-10deg) rotateZ(0deg);
//   }

//   .tr-2:hover ~ #card {
//     transition: 125ms ease-in-out;
//     transform: rotateX(20deg) rotateY(-5deg) rotateZ(0deg);
//   }

//   .tr-3:hover ~ #card {
//     transition: 125ms ease-in-out;
//     transform: rotateX(20deg) rotateY(0deg) rotateZ(0deg);
//   }

//   .tr-4:hover ~ #card {
//     transition: 125ms ease-in-out;
//     transform: rotateX(20deg) rotateY(5deg) rotateZ(0deg);
//   }

//   .tr-5:hover ~ #card {
//     transition: 125ms ease-in-out;
//     transform: rotateX(20deg) rotateY(10deg) rotateZ(0deg);
//   }

//   .tr-6:hover ~ #card {
//     transition: 125ms ease-in-out;
//     transform: rotateX(10deg) rotateY(-10deg) rotateZ(0deg);
//   }

//   .tr-7:hover ~ #card {
//     transition: 125ms ease-in-out;
//     transform: rotateX(10deg) rotateY(-5deg) rotateZ(0deg);
//   }

//   .tr-8:hover ~ #card {
//     transition: 125ms ease-in-out;
//     transform: rotateX(10deg) rotateY(0deg) rotateZ(0deg);
//   }

//   .tr-9:hover ~ #card {
//     transition: 125ms ease-in-out;
//     transform: rotateX(10deg) rotateY(5deg) rotateZ(0deg);
//   }

//   .tr-10:hover ~ #card {
//     transition: 125ms ease-in-out;
//     transform: rotateX(10deg) rotateY(10deg) rotateZ(0deg);
//   }

//   .tr-11:hover ~ #card {
//     transition: 125ms ease-in-out;
//     transform: rotateX(0deg) rotateY(-10deg) rotateZ(0deg);
//   }

//   .tr-12:hover ~ #card {
//     transition: 125ms ease-in-out;
//     transform: rotateX(0deg) rotateY(-5deg) rotateZ(0deg);
//   }

//   .tr-13:hover ~ #card {
//     transition: 125ms ease-in-out;
//     transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
//   }

//   .tr-14:hover ~ #card {
//     transition: 125ms ease-in-out;
//     transform: rotateX(0deg) rotateY(5deg) rotateZ(0deg);
//   }

//   .tr-15:hover ~ #card {
//     transition: 125ms ease-in-out;
//     transform: rotateX(0deg) rotateY(10deg) rotateZ(0deg);
//   }

//   .tr-16:hover ~ #card {
//     transition: 125ms ease-in-out;
//     transform: rotateX(-10deg) rotateY(-10deg) rotateZ(0deg);
//   }

//   .tr-17:hover ~ #card {
//     transition: 125ms ease-in-out;
//     transform: rotateX(-10deg) rotateY(-5deg) rotateZ(0deg);
//   }

//   .tr-18:hover ~ #card {
//     transition: 125ms ease-in-out;
//     transform: rotateX(-10deg) rotateY(0deg) rotateZ(0deg);
//   }

//   .tr-19:hover ~ #card {
//     transition: 125ms ease-in-out;
//     transform: rotateX(-10deg) rotateY(5deg) rotateZ(0deg);
//   }

//   .tr-20:hover ~ #card {
//     transition: 125ms ease-in-out;
//     transform: rotateX(-10deg) rotateY(10deg) rotateZ(0deg);
//   }

//   .tr-21:hover ~ #card {
//     transition: 125ms ease-in-out;
//     transform: rotateX(-20deg) rotateY(-10deg) rotateZ(0deg);
//   }

//   .tr-22:hover ~ #card {
//     transition: 125ms ease-in-out;
//     transform: rotateX(-20deg) rotateY(-5deg) rotateZ(0deg);
//   }

//   .tr-23:hover ~ #card {
//     transition: 125ms ease-in-out;
//     transform: rotateX(-20deg) rotateY(0deg) rotateZ(0deg);
//   }

//   .tr-24:hover ~ #card {
//     transition: 125ms ease-in-out;
//     transform: rotateX(-20deg) rotateY(5deg) rotateZ(0deg);
//   }

//   .tr-25:hover ~ #card {
//     transition: 125ms ease-in-out;
//     transform: rotateX(-20deg) rotateY(10deg) rotateZ(0deg);
//   }

//   .noselect {
//     -webkit-touch-callout: none;
//     /* iOS Safari */
//     -webkit-user-select: none;
//     /* Safari */
//     /* Konqueror HTML */
//     -moz-user-select: none;
//     /* Old versions of Firefox */
//     -ms-user-select: none;
//     /* Internet Explorer/Edge */
//     user-select: none;
//     /* Non-prefixed version, currently
//   									supported by Chrome, Edge, Opera and Firefox */
//   }

//   .card-glare {
//     position: absolute;
//     inset: 0;
//     background: linear-gradient(
//       125deg,
//       rgba(255, 255, 255, 0) 0%,
//       rgba(255, 255, 255, 0.05) 45%,
//       rgba(255, 255, 255, 0.1) 50%,
//       rgba(255, 255, 255, 0.05) 55%,
//       rgba(255, 255, 255, 0) 100%
//     );
//     opacity: 0;
//     transition: opacity 300ms;
//   }

//   .cyber-lines span {
//     position: absolute;
//     background: linear-gradient(
//       90deg,
//       transparent,
//       rgba(92, 103, 255, 0.2),
//       transparent
//     );
//   }

//   .cyber-lines span:nth-child(1) {
//     top: 20%;
//     left: 0;
//     width: 100%;
//     height: 1px;
//     transform: scaleX(0);
//     transform-origin: left;
//     animation: lineGrow 3s linear infinite;
//   }

//   .cyber-lines span:nth-child(2) {
//     top: 40%;
//     right: 0;
//     width: 100%;
//     height: 1px;
//     transform: scaleX(0);
//     transform-origin: right;
//     animation: lineGrow 3s linear infinite 1s;
//   }

//   .cyber-lines span:nth-child(3) {
//     top: 60%;
//     left: 0;
//     width: 100%;
//     height: 1px;
//     transform: scaleX(0);
//     transform-origin: left;
//     animation: lineGrow 3s linear infinite 2s;
//   }

//   .cyber-lines span:nth-child(4) {
//     top: 80%;
//     right: 0;
//     width: 100%;
//     height: 1px;
//     transform: scaleX(0);
//     transform-origin: right;
//     animation: lineGrow 3s linear infinite 1.5s;
//   }

//   .corner-elements span {
//     position: absolute;
//     width: 15px;
//     height: 15px;
//     border: 2px solid rgba(92, 103, 255, 0.3);
//   }

//   .corner-elements span:nth-child(1) {
//     top: 10px;
//     left: 10px;
//     border-right: 0;
//     border-bottom: 0;
//   }

//   .corner-elements span:nth-child(2) {
//     top: 10px;
//     right: 10px;
//     border-left: 0;
//     border-bottom: 0;
//   }

//   .corner-elements span:nth-child(3) {
//     bottom: 10px;
//     left: 10px;
//     border-right: 0;
//     border-top: 0;
//   }

//   .corner-elements span:nth-child(4) {
//     bottom: 10px;
//     right: 10px;
//     border-left: 0;
//     border-top: 0;
//   }

//   .scan-line {
//     position: absolute;
//     inset: 0;
//     background: linear-gradient(
//       to bottom,
//       transparent,
//       rgba(92, 103, 255, 0.1),
//       transparent
//     );
//     transform: translateY(-100%);
//     animation: scanMove 2s linear infinite;
//   }

//   @keyframes lineGrow {
//     0% {
//       transform: scaleX(0);
//       opacity: 0;
//     }
//     50% {
//       transform: scaleX(1);
//       opacity: 1;
//     }
//     100% {
//       transform: scaleX(0);
//       opacity: 0;
//     }
//   }

//   @keyframes scanMove {
//     0% {
//       transform: translateY(-100%);
//     }
//     100% {
//       transform: translateY(100%);
//     }
//   }

//   /* Modyfikacja istniejących styli */
//   #card:hover .card-glare {
//     opacity: 1;
//   }

//   .corner-elements span {
//     transition: all 0.3s ease;
//   }

//   #card:hover .corner-elements span {
//     border-color: rgba(92, 103, 255, 0.8);
//     box-shadow: 0 0 10px rgba(92, 103, 255, 0.5);
//   }`;

// export default TeamSection;
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const TeamSection = () => {
  const [activeTeam, setActiveTeam] = useState('core');
  const [currentSlide, setCurrentSlide] = useState(0);

  const coreTeam = [
    { name: "SamipyaSinh Rajput", image: "https://via.placeholder.com/150", designation: "ISTE Chief Coordinator", linkedin: "https://linkedin.com" },
    { name: "Jenish Patel", image: "https://via.placeholder.com/150", designation: "Joint ISTE Chief Coordinator", linkedin: "https://linkedin.com" },
    { name: "Krutagna Patel", image: "https://via.placeholder.com/150", designation: "Joint ISTE Chief Coordinator", linkedin: "https://linkedin.com" },
    { name: "Piyush Sharma", image: "https://via.placeholder.com/150", designation: "ISTE Finance Coordinator", linkedin: "https://linkedin.com" },
    { name: "Yash Shah", image: "https://via.placeholder.com/150", designation: "Joint ISTE Finance Coordinator", linkedin: "https://linkedin.com" },
    { name: "Vinit Shah", image: "https://via.placeholder.com/150", designation: "Joint ISTE Finance Coordinator", linkedin: "https://linkedin.com" },
    { name: "Tarang Motwani", image: "https://via.placeholder.com/150", designation: "ISTE Website Coordinator", linkedin: "https://linkedin.com" },
    { name: "Arya Panchal", image: "https://via.placeholder.com/150", designation: "Joint ISTE Website Coordinator", linkedin: "https://linkedin.com" },
    { name: "Nisarg Patel", image: "https://via.placeholder.com/150", designation: "Joint ISTE Website Coordinator", linkedin: "https://linkedin.com" },
    { name: "Manan Shah", image: "https://via.placeholder.com/150", designation: "ISTE Social Media Marketing", linkedin: "https://linkedin.com" },
    { name: "Srujal Shah", image: "https://via.placeholder.com/150", designation: "Joint ISTE Social Media Marketing", linkedin: "https://linkedin.com" },
    { name: "Harshilsinh Rana", image: "https://via.placeholder.com/150", designation: "Joint ISTE Social Media Marketing", linkedin: "https://linkedin.com" },
    { name: "Kashyap Contractor", image: "https://via.placeholder.com/150", designation: "ISTE Administrative Coordinator", linkedin: "https://linkedin.com" },
    { name: "Darshan Panchal", image: "https://via.placeholder.com/150", designation: "Joint ISTE Administrative Coordinator", linkedin: "https://linkedin.com" },
    { name: "Masoom Patel", image: "https://via.placeholder.com/150", designation: "Joint ISTE Administrative Coordinator", linkedin: "https://linkedin.com" },
    { name: "Yash Shah", image: "https://via.placeholder.com/150", designation: "ISTE Sponsorship Coordinator", linkedin: "https://linkedin.com" },
    { name: "Pruth Shah", image: "https://via.placeholder.com/150", designation: "Joint ISTE Sponsorship Coordinator", linkedin: "https://linkedin.com" },
    { name: "Sonu Chaudhary", image: "https://via.placeholder.com/150", designation: "ISTE Promotion Coordinator", linkedin: "https://linkedin.com" },
    { name: "Vaishnavi Parmar", image: "https://via.placeholder.com/150", designation: "Joint ISTE Promotion Coordinator", linkedin: "https://linkedin.com" },
    { name: "Dax Patel", image: "https://via.placeholder.com/150", designation: "Joint ISTE Promotion Coordinator", linkedin: "https://linkedin.com" },
    { name: "Nishita Shahani", image: "https://via.placeholder.com/150", designation: "ISTE Technical Coordinator", linkedin: "https://linkedin.com" },
    { name: "Jaineel Dalwadi", image: "https://via.placeholder.com/150", designation: "Joint ISTE Technical Coordinator", linkedin: "https://linkedin.com" },
    { name: "Arya Panchal", image: "https://via.placeholder.com/150", designation: "Joint ISTE Technical Coordinator", linkedin: "https://linkedin.com" },
    { name: "Nachiket Brahmbhatt", image: "https://via.placeholder.com/150", designation: "ISTE Non-Technical Coordinator", linkedin: "https://linkedin.com" },
    { name: "Dhyey Patel", image: "https://via.placeholder.com/150", designation: "Joint ISTE Non-Technical Coordinator", linkedin: "https://linkedin.com" },
    { name: "Mitul Shimpi", image: "https://via.placeholder.com/150", designation: "Joint ISTE Non-Technical Coordinator", linkedin: "https://linkedin.com" },
    { name: "Purvesha Prajapati", image: "https://via.placeholder.com/150", designation: "ISTE Graphics Coordinator", linkedin: "https://linkedin.com" },
    { name: "Shivang Parmar", image: "https://via.placeholder.com/150", designation: "Joint ISTE Graphics Coordinator", linkedin: "https://linkedin.com" },
    { name: "Riddhi Trevadiya", image: "https://via.placeholder.com/150", designation: "Joint ISTE Graphics Coordinator", linkedin: "https://linkedin.com" },
    { name: "Dhruva Desai", image: "https://via.placeholder.com/150", designation: "ISTE Decoration Coordinator", linkedin: "https://linkedin.com" },
    { name: "Kairavi Parikh", image: "https://via.placeholder.com/150", designation: "Joint ISTE Decoration Coordinator", linkedin: "https://linkedin.com" },
  ];

  const developerTeam = [
    { name: "Tarang Motiyani", image: "https://via.placeholder.com/150", designation: "ISTE Website Coordinator and Full Stack Developer", github: "https://github.com/Tarang52" },
    { name: "Arya Panchal", image: "https://via.placeholder.com/150", designation: "Joint ISTE Website Coordinator", github: "https://github.com/Arya664" },
    { name: "Nisarg Patel", image: "https://via.placeholder.com/150", designation: "Joint ISTE Website Coordinator", github: "https://github.com/nisargpatel7042lva" },
    { name: "Siddharth Panchal", image: "https://via.placeholder.com/150", designation: "Fullstack Developer", github: "https://github.com/siddharth-09" },
    { name: "Dhaval Patel", image: "https://via.placeholder.com/150", designation: "Frontend Developer", github: "https://github.com/DhavalPhooski" },
    { name: "Nidhi Agrawal", image: "https://via.placeholder.com/150", designation: "UI/UX Designerr", github: "https://github.com/NidhiAgrawal7574" },
    { name: "Malak Bhadgaonkar", image: "https://via.placeholder.com/150", designation: "Frontend Developer", github: "https://github.com/mal4k3009" },
    { name: "Parth Bhatti", image: "https://via.placeholder.com/150", designation: "Backend Developer", github: "https://github.com/parthbhatti21" },
    { name: "Yash Mehta", image: "https://via.placeholder.com/150", designation: "Backend Developer", github: "https://github.com/yashm13114" }
  ];

  const handleSocialClick = (url) => {
 // Prevent event from bubbling up
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % Math.ceil(coreTeam.length / 5));
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, []);

  const getDisplayedTeamMembers = () => {
    const startIndex = currentSlide * 5;
    return coreTeam.slice(startIndex, startIndex + 5);
  };

  const goLeft = () => {
    setCurrentSlide(prev => (prev === 0 ? Math.ceil(coreTeam.length / 5) - 1 : prev - 1));
  };

  const goRight = () => {
    setCurrentSlide(prev => (prev + 1) % Math.ceil(coreTeam.length / 5));
  };

  return (
    <StyledWrapper>
      <div className="button-group">
        <button
          className={`team-button ${activeTeam === 'core' ? 'active' : ''}`}
          onClick={() => setActiveTeam('core')} // Set active team to 'core'
        >
          Core Team
        </button>
        <button
          className={`team-button ${activeTeam === 'developer' ? 'active' : ''}`}
          onClick={() => setActiveTeam('developer')} // Set active team to 'developer'
        >
          Developer Team
        </button>
      </div>

      {/* Conditionally render core team cards */}
      {activeTeam === 'core' && (
        <div className="card-container2">
          <button className="left-arrow" onClick={goLeft}>{"<"}</button>
          {coreTeam.map((person, index) => (
            <div className="container2 noselect" key={index}>
              <div className="canvas" onClick={(e) => {e.stopPropagation();handleSocialClick(person.linkedin)}}>
                <div className="tracker tr-1" />
                <div className="tracker tr-2" />
                <div className="tracker tr-3" />
                <div className="tracker tr-4" />
                <div className="tracker tr-5" />
                <div className="tracker tr-6" />
                <div className="tracker tr-7" />
                <div className="tracker tr-8" />
                <div className="tracker tr-9" />
                <div id="card">
                  <div className="card-content">
                    <div className="card-glare" />
                    <div className="cyber-lines">
                      <span /><span /><span /><span />
                    </div>
                    <div className="social-button" >
                      <FaLinkedin />
                    </div>
                    <div className='PersonDetail'>
                      <img src={person.image} alt={person.name} width={80} />
                      <p id="prompt">{person.name}</p>
                    </div>
                    <div className="glowing-elements">
                      <div className="glow-1" />
                      <div className="glow-2" />
                      <div className="glow-3" />
                    </div>
                    <div className="subtitle">
                      <span>{person.designation}</span>
                    </div>
                    <div className="card-particles">
                      <span /><span /><span /><span /><span /><span />
                    </div>
                    <div className="corner-elements">
                      <span /><span /><span /><span />
                    </div>
                    {/* <div className="scan-line" /> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button className="right-arrow" onClick={goRight}>{">"}</button>
        </div>
      )}

      {/* Conditionally render developer team cards */}
      {activeTeam === 'developer' && (
        <div className="card-container2">
          <button className="left-arrow" onClick={goLeft}>{"<"}</button>
          {developerTeam.map((person, index) => (
            <div className="container2 noselect" key={index}>
              <div className="canvas" onClick={() => handleSocialClick(person.github)}>
                <div className="tracker tr-1" />
                <div className="tracker tr-2" />
                <div className="tracker tr-3" />
                <div className="tracker tr-4" />
                <div className="tracker tr-5" />
                <div className="tracker tr-6" />
                <div className="tracker tr-7" />
                <div className="tracker tr-8" />
                <div className="tracker tr-9" />
                <div id="card">
                  <div className="card-content">
                    <div className="card-glare" />
                    <div className="cyber-lines">
                      <span /><span /><span /><span />
                    </div>
                    <div className="social-button" >
                      <FaGithub />
                    </div>
                    <div className='PersonDetail'>
                      <img src={person.image} alt={person.name} width={80} />
                      <p id="prompt">{person.name}</p>
                    </div>
                    <div className="glowing-elements">
                      <div className="glow-1" />
                      <div className="glow-2" />
                      <div className="glow-3" />
                    </div>
                    <div className="subtitle">
                      <span>{person.designation}</span>
                    </div>
                    <div className="card-particles">
                      <span /><span /><span /><span /><span /><span />
                    </div>
                    <div className="corner-elements">
                      <span /><span /><span /><span />
                    </div>
                    <div className="scan-line" />
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* <button className="right-arrow" onClick={goRight}>{">"}</button> */}
        </div>
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button-group {
    width: 100%;
    display: flex;
    gap: 10px;
    position:relative;
    z-index:10;
  }

  .team-button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #333;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #555;
    }

    &.active {
      background-color: #00ffaa;
      color: #000;
    }
  }

  .social-button {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 100;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 8px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    color: #fff;

    svg {
      width: 20px;
      height: 20px;
      color: #fff;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateX(-50%) scale(1.1);
    }
  }

  .container2:hover .social-button {
    opacity: 1;
  }

  .subtitle {
    position: absolute;
    bottom: 40px;
    width: 100%;
    text-align: center;
    font-size: 14px;
    letter-spacing: 1px;
    color: rgba(4, 234, 255, 0.9);
    text-transform: uppercase;
    font-weight: 500;
  }

  .card-container2 {
    display: flex;
    flex-wrap: nowrap;
    gap: 20px;
    overflow-x: auto;
    padding: 10px;
    position: relative;
  }
.card-container2::-webkit-scrollbar {
    height: 8px;
  }
    .card-container2::-webkit-scrollbar-thumb {
    background-color: rgba(0, 255, 170, 0.3);
    border-radius: 10px;
  }


  .card-container2::-webkit-scrollbar-track {
    background-color: transparent;
  }

  .card-container2 .container2 {
    min-width: 250px;
    max-width: 300px;
  }

  .left-arrow, .right-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    padding: 10px;
    border: none;
    cursor: pointer;
    z-index: 10;
    font-size: 24px;
  }

  .left-arrow {
    left: 10px;
  }

  .right-arrow {
    right: 10px;
  }

  /* Mobile responsive */
  @media (max-width: 768px) {
    .card-container2 .container2 {
      min-width: 100%;
      max-width: 100%;
    }
      .card-container2::-webkit-scrollbar {
    height :0;
}
  }
  .card {
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    width: 150px;
  }

  .card img {
    width: 100%;
    border-radius: 50%;
  }

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  min-height: 10vh;

  .PersonDetail {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    z-index: 10;
    text-align: center;
  }

  .PersonDetail img {
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 10px rgba(0, 255, 170, 0.3);
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  #prompt {
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
    margin: 0;
  }

  .container2 {
    position: relative;
    width: 190px;
    height: 254px;
    transition: 200ms;
  }

  .container:active {
    width: 180px;
    height: 245px;
  }

  #card {
    position: absolute;
    inset: 0;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    transition: 700ms;
    background: linear-gradient(45deg, #1a1a1a, #262626);
    border: 2px solid rgba(255, 255, 255, 0.1);
    overflow: hidden;
    box-shadow:
      0 0 20px rgba(0, 0, 0, 0.3),
      inset 0 0 20px rgba(0, 0, 0, 0.2);
  }

  .card-content {
    position: relative;
    width: 100%;
    height: 100%;
  }

  #prompt {
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 20;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 2px;
    transition: 300ms ease-in-out;
    position: absolute;
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  }

  .title {
    opacity: 0;
    transition: 300ms ease-in-out;
    position: absolute;
    font-size: 28px;
    font-weight: 800;
    letter-spacing: 4px;
    text-align: center;
    width: 100%;
    padding-top: 20px;
    background: linear-gradient(45deg, #00ffaa, #00a2ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 0 15px rgba(0, 255, 170, 0.3));
    text-shadow:
      0 0 10px rgba(92, 103, 255, 0.5),
      0 0 20px rgba(92, 103, 255, 0.3);
  }

  .subtitle {
    position: absolute;
    bottom: 40px;
    width: 100%;
    text-align: center;
    font-size: 12px;
    letter-spacing: 2px;
    transform: translateY(30px);
     background: linear-gradient(45deg, #00ffaa, #00a2ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 0 15px rgba(0, 255, 170, 0.3));
    text-shadow:
      0 0 10px rgba(92, 103, 255, 0.5),
      0 0 20px rgba(92, 103, 255, 0.3);
     font-weight: 800;
  }

  .highlight {
    color: #00ffaa;
    margin-left: 5px;
    background: linear-gradient(90deg, #5c67ff, #ad51ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
  }

  .glowing-elements {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .glow-1,
  .glow-2,
  .glow-3 {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: radial-gradient(
      circle at center,
      rgba(0, 255, 170, 0.3) 0%,
      rgba(0, 255, 170, 0) 70%
    );
    filter: blur(15px);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .glow-1 {
    top: -20px;
    left: -20px;
  }
  .glow-2 {
    top: 50%;
    right: -30px;
    transform: translateY(-50%);
  }
  .glow-3 {
    bottom: -20px;
    left: 30%;
  }

  .card-particles span {
    position: absolute;
    width: 3px;
    height: 3px;
    background: #00ffaa;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  /* Hover effects */
  .tracker:hover ~ #card .title {
    opacity: 1;
    transform: translateY(-10px);
  }

  .tracker:hover ~ #card .glowing-elements div {
    opacity: 1;
  }

  .tracker:hover ~ #card .card-particles span {
    animation: particleFloat 2s infinite;
  }

  @keyframes particleFloat {
    0% {
      transform: translate(0, 0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translate(calc(var(--x, 0) * 30px), calc(var(--y, 0) * 30px));
      opacity: 0;
    }
  }

  /* Particle positions */
  .card-particles span:nth-child(1) {
    --x: 1;
    --y: -1;
    top: 40%;
    left: 20%;
  }
  .card-particles span:nth-child(2) {
    --x: -1;
    --y: -1;
    top: 60%;
    right: 20%;
  }
  .card-particles span:nth-child(3) {
    --x: 0.5;
    --y: 1;
    top: 20%;
    left: 40%;
  }
  .card-particles span:nth-child(4) {
    --x: -0.5;
    --y: 1;
    top: 80%;
    right: 40%;
  }
  .card-particles span:nth-child(5) {
    --x: 1;
    --y: 0.5;
    top: 30%;
    left: 60%;
  }
  .card-particles span:nth-child(6) {
    --x: -1;
    --y: 0.5;
    top: 70%;
    right: 60%;
  }

  #card::before {
    content: "";
    background: radial-gradient(
      circle at center,
      rgba(0, 255, 170, 0.1) 0%,
      rgba(0, 162, 255, 0.05) 50%,
      transparent 100%
    );
    filter: blur(20px);
    opacity: 0;
    width: 150%;
    height: 150%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s ease;
  }

  .tracker:hover ~ #card::before {
    opacity: 1;
  }

  .tracker {
    position: absolute;
    z-index: 200;
    width: 100%;
    height: 100%;
  }

  .tracker:hover {
    cursor: pointer;
  }

  .tracker:hover ~ #card #prompt {
    opacity: 0;
  }

  .tracker:hover ~ #card {
    transition: 300ms;
    filter: brightness(1.1);
  }

  .container:hover #card::before {
    transition: 200ms;
    content: "";
    opacity: 80%;
  }

  .canvas {
    perspective: 800px;
    inset: 0;
    z-index: 200;
    position: absolute;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      "tr-1 tr-2 tr-3 tr-4 tr-5"
      "tr-6 tr-7 tr-8 tr-9 tr-10"
      "tr-11 tr-12 tr-13 tr-14 tr-15"
      "tr-16 tr-17 tr-18 tr-19 tr-20"
      "tr-21 tr-22 tr-23 tr-24 tr-25";
  }

  .tr-1 {
    grid-area: tr-1;
  }

  .tr-2 {
    grid-area: tr-2;
  }

  .tr-3 {
    grid-area: tr-3;
  }

  .tr-4 {
    grid-area: tr-4;
  }

  .tr-5 {
    grid-area: tr-5;
  }

  .tr-6 {
    grid-area: tr-6;
  }

  .tr-7 {
    grid-area: tr-7;
  }

  .tr-8 {
    grid-area: tr-8;
  }

  .tr-9 {
    grid-area: tr-9;
  }

  .tr-10 {
    grid-area: tr-10;
  }

  .tr-11 {
    grid-area: tr-11;
  }

  .tr-12 {
    grid-area: tr-12;
  }

  .tr-13 {
    grid-area: tr-13;
  }

  .tr-14 {
    grid-area: tr-14;
  }

  .tr-15 {
    grid-area: tr-15;
  }

  .tr-16 {
    grid-area: tr-16;
  }

  .tr-17 {
    grid-area: tr-17;
  }

  .tr-18 {
    grid-area: tr-18;
  }

  .tr-19 {
    grid-area: tr-19;
  }

  .tr-20 {
    grid-area: tr-20;
  }

  .tr-21 {
    grid-area: tr-21;
  }

  .tr-22 {
    grid-area: tr-22;
  }

  .tr-23 {
    grid-area: tr-23;
  }

  .tr-24 {
    grid-area: tr-24;
  }

  .tr-25 {
    grid-area: tr-25;
  }

  .tr-1:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(20deg) rotateY(-10deg) rotateZ(0deg);
  }

  .tr-2:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(20deg) rotateY(-5deg) rotateZ(0deg);
  }

  .tr-3:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(20deg) rotateY(0deg) rotateZ(0deg);
  }

  .tr-4:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(20deg) rotateY(5deg) rotateZ(0deg);
  }

  .tr-5:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(20deg) rotateY(10deg) rotateZ(0deg);
  }

  .tr-6:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(-10deg) rotateZ(0deg);
  }

  .tr-7:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(-5deg) rotateZ(0deg);
  }

  .tr-8:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(0deg) rotateZ(0deg);
  }

  .tr-9:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(5deg) rotateZ(0deg);
  }

  .tr-10:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(10deg) rotateZ(0deg);
  }

  .tr-11:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(-10deg) rotateZ(0deg);
  }

  .tr-12:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(-5deg) rotateZ(0deg);
  }

  .tr-13:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }

  .tr-14:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(5deg) rotateZ(0deg);
  }

  .tr-15:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(10deg) rotateZ(0deg);
  }

  .tr-16:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(-10deg) rotateZ(0deg);
  }

  .tr-17:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(-5deg) rotateZ(0deg);
  }

  .tr-18:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(0deg) rotateZ(0deg);
  }

  .tr-19:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(5deg) rotateZ(0deg);
  }

  .tr-20:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(10deg) rotateZ(0deg);
  }

  .tr-21:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(-10deg) rotateZ(0deg);
  }

  .tr-22:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(-5deg) rotateZ(0deg);
  }

  .tr-23:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(0deg) rotateZ(0deg);
  }

  .tr-24:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(5deg) rotateZ(0deg);
  }

  .tr-25:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(10deg) rotateZ(0deg);
  }

  .noselect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  `;

export default TeamSection;
