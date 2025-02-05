import "../Components/styles/AboutPage.css";
import { Card } from "./ui/Card";

const AboutPage = () => {
  return (
    <>
    <div className="cyberpunk-bg">
      <div className="container">
        <div className="main-grid">
          <div className="space-y-6">
            <Card className="card">
              <h1 className="title">Welcome to Prakarsh 2025</h1>
              <p>
              For 26 years, Sardar Vallabhbhai Patel Institute of Technology has been a hub of innovation, and now, it’s time for the most electrifying tech fest—Prakarsh! ⚡

Dive into cutting-edge workshops, mind-bending competitions, and thrilling tech challenges that will test your skills like never before. But wait—it’s not just about tech! 🎭 From leadership battles to creative problem-solving, non-tech events add an extra spark of excitement!

✨ Unravel mysteries. ✨ Push your limits. ✨ Be part of a fest that redefines innovation!

Are you ready for the ultimate experience? 🚀💡


              </p>
              {/* <p>Join us for an immersive experience featuring:</p> */}
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
    </>
  );
};

export default AboutPage;