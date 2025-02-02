

import "../Components/styles/AboutPage.css";
import { Card } from "./ui/Card";

const AboutPage = () => {
  return (
    <div className="cyberpunk-bg">
      <div className="container">
        <div className="main-grid">
          <div className="space-y-6">
            <Card className="card">
              <h1 className="title">Welcome to Prakarsh 2025</h1>
              <p>
                For 26 illustrious years, Sardar Vallabhbhai Patel Institute of Technology in Gujarat has been a beacon of innovation and tech education, and now it invites you to step into the electrifying realm of Prakarsh— the flagship tech fest of Sardar Vallabhbhai Patel Institute of Technology, a dynamic celebration where technology, innovation, and creativity converge under one roof. At this renowned event, students immerse themselves in a plethora of technical challenges, cutting-edge workshops, and stimulating competitions, while also engaging in non-technical events that showcase leadership, teamwork, and creative problem-solving. event shrouded in anticipation and mystery. Imagine a fest where every corner pulsates with energy, creativity, and the promise of groundbreaking discoveries; a space where technical ingenuity meets social flair, and where non-technical prowess is celebrated with as much fervor. Prakarsh is not merely an event—it is a dynamic arena that challenges you to push the boundaries of your imagination, showcase your latent talents, and engage in competitions that blend skill with daring innovation. As you navigate through its multifaceted challenges and interactive sessions, prepare to unlock secrets, unravel hidden potentials, and join a community that thrives on curiosity and excellence. Are you ready to embark on this journey of suspense and revelation, to be part of a fest that transcends the ordinary?
              </p>
              <p>Join us for an immersive experience featuring:</p>
            </Card>
          </div>
        </div>
      </div>

      {/* Hologram Beam Effect */}
      <div className="hologram-beam"></div>

      <div className="fixed-overlay">
        <div className="gradient-overlay"></div>
        <div className="grid-overlay">
          {Array.from({ length: 7 }).map((_, index) => (
            <div key={index} className="border-right"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;