import React, { useState } from "react";
import "./styles/navbar.css";

const TeamSection = () => {
  const [team, setTeam] = useState("crew");

  const crewMembers = [
    { name: 'John Phoenix', role: 'Navigation Officer', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&w=300', linkedin: 'https://www.linkedin.com/in/john-phoenix' },
    // Add more crew members here
  ];

  const webAstronauts = [
    { name: 'Tarang Motiyani', role: 'Head', image: '10.png', github: 'https://github.com/Tarang52' },
    // Add more astronauts here
  ];

  const createCard = (person, isCrewMember = false) => {
    return (
      <div className="card">
        <div className="helmet-container">
          <img src={person.image} alt={person.name} className="profile-img" />
          <img src="helmetttooo.png" alt="Astronaut Helmet" className="helmet-img" />
        </div>
        <h3>{person.name}</h3>
        <p className="role">{person.role}</p>
        {isCrewMember ? (
          <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="bi bi-linkedin"></i>
          </a>
        ) : (
          <a href={person.github} target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="bi bi-github"></i>
          </a>
        )}
      </div>
    );
  };

  return (
    <div className="team-section">
      <div className="button-container">
        <button onClick={() => setTeam("crew")} className="button-glow">Crew Members</button>
        <button onClick={() => setTeam("astronauts")} className="button-glow">Web Astronauts</button>
      </div>
      <div className="team-grid">
        {team === "crew"
          ? crewMembers.map((person) => createCard(person, true))
          : webAstronauts.map((person) => createCard(person))}
      </div>
    </div>
  );
};

export default TeamSection;