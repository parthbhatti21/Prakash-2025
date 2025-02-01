// import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./styles/spaceteam.css";

// // Crew Members Data
// const crewMembers = [
//   {
//     name: "Sarah Connor",
//     role: "Mission Commander",
//     image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&w=300",
//   },
//   {
//     name: "John Phoenix",
//     role: "Navigation Officer",
//     image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&w=300",
//   },
//   {
//     name: "Elena Rodriguez",
//     role: "Systems Engineer",
//     image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&w=300",
//   },
// ];

// // Web Astronauts Data
// const webAstronauts = [
//   {
//     name: "Alex Cipher",
//     role: "Frontend Developer",
//     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&w=300",
//   },
//   {
//     name: "Maya Binary",
//     role: "Backend Developer",
//     image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&w=300",
//   },
//   {
//     name: "Zack Matrix",
//     role: "UI/UX Designer",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&w=300",
//   },
// ];

// // Card Component
// const PersonCard = ({ person }) => (
//   <div classNameName="card-container">
//     <div classNameName="card">
//       <img src={person.image} alt={person.name} classNameName="profile-img" />
//       <div classNameName="card-content">
//         <h3>{person.name}</h3>
//         <p>{person.role}</p>
//       </div>
//     </div>
//   </div>
// );

// export default function SpaceTeam() {
//   const [activeTeam, setActiveTeam] = useState("crew");

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     nextArrow: <CustomNextArrow />,
//     prevArrow: <CustomPrevArrow />,
//     responsive: [
//       {
//         breakpoint: 900,
//         settings: {
//           slidesToShow: 2,
//           arrows: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           arrows: false,
//           centerMode: true,
//           centerPadding: "20px",
//         },
//       },
//     ],
//   };

//   return (
//     <div classNameName="space-team-container">
//       <div classNameName="container-spaceteam">
//         <div classNameName="button-group">
//           <button
//             classNameName={`team-button ${activeTeam === "crew" ? "active" : ""}`}
//             onClick={() => setActiveTeam("crew")}
//           >
//             Crew Members
//           </button>
//           <button
//             classNameName={`team-button ${activeTeam === "astronauts" ? "active" : ""}`}
//             onClick={() => setActiveTeam("astronauts")}
//           >
//             Web Astronauts
//           </button>
//         </div>

//         <Slider {...settings} classNameName="team-slider">
//           {(activeTeam === "crew" ? crewMembers : webAstronauts).map((member, index) => (
//             <PersonCard key={index} person={member} />
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// }

// // Custom Next Arrow
// function CustomNextArrow({ onClick }) {
//   return <div classNameName="slick-arrow slick-next" onClick={onClick}>▶</div>;
// }

// // Custom Prev Arrow
// function CustomPrevArrow({ onClick }) {
//   return <div classNameName="slick-arrow slick-prev" onClick={onClick}>◀</div>;
// }
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/spaceteam.css";

// Crew Members Data
const crewMembers = [
  {
    name: "Sarah Connor",
    role: "Mission Commander",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&w=300",
  },
  {
    name: "John Phoenix",
    role: "Navigation Officer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&w=300",
  },
  {
    name: "Elena Rodriguez",
    role: "Systems Engineer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&w=300",
  },
];

// Web Astronauts Data
const webAstronauts = [
  {
    name: "Alex Cipher",
    role: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&w=300",
  },
  {
    name: "Maya Binary",
    role: "Backend Developer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&w=300",
  },
  {
    name: "Zack Matrix",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&w=300",
  },
];

// Person Card Component
const PersonCard = ({ person }) => (
  <div className="card">
    <div className="card-body">
      <div className="avatar">
        <img src={person.image} alt={person.name} className="profile-img" />
      </div>
      <div className="name">{person.name}</div>
      <div className="role">{person.role}</div>
    </div>
  </div>
);

export default function SpaceTeam() {
  const [activeTeam, setActiveTeam] = useState("crew");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
          centerMode: true,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <div className="space-team-container">
      <div className="container-team">
        {/* Toggle Buttons */}
        <div className="button-group">
          <button
            className={`team-button ${activeTeam === "crew" ? "active" : ""}`}
            onClick={() => setActiveTeam("crew")}
          >
            Crew Members
          </button>
          <button
            className={`team-button ${activeTeam === "astronauts" ? "active" : ""}`}
            onClick={() => setActiveTeam("astronauts")}
          >
            Web Astronauts
          </button>
        </div>

        {/* Card Slider */}
        <Slider {...settings} className="team-slider">
          {(activeTeam === "crew" ? crewMembers : webAstronauts).map((member, index) => (
            <PersonCard key={index} person={member} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

// Custom Next Arrow
function CustomNextArrow(props) {
  const { onClick } = props;
  return <div className="slick-arrow slick-next" onClick={onClick} />;
}

// Custom Prev Arrow
function CustomPrevArrow(props) {
  const { onClick } = props;
  return <div className="slick-arrow slick-prev" onClick={onClick} />;
}
