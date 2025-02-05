import Navbar from "./Navbar";
import Star from "./Star";
import Timeline from "./Timeline";
import Timer from "./Timer";
import TeamSection from "./TeamSection";
import Event_Random from "./Event_Random";
import Footer from "./Footer";
import Sponsor from "./Sponsor";
import HeroSection from "./HeroSection";
import { useEffect, useRef } from "react";
import { Rive } from "@rive-app/canvas";
import "./styles/Homepage.css"

export default function Homepage() {
    const solarref = useRef(null);
    useEffect(() => {

        const s = new Rive({
            src :'/SolarSystem.riv',
            canvas: document.getElementById("canvasSolarSystemAlignment"),
      autoplay: true,
      stateMachines: "State Machine 1",
      onLoad: function () {
        s.resizeDrawingSurfaceToCanvas();
      },
        })


    }, []);
    return (
        <>
            <Navbar />
            <HeroSection />
            <div className="homepage-container">
                <div className="SolarSystemBackground"><canvas id="canvasSolarSystemAlignment" ref={solarref}></canvas></div>
                
                <Star />
                <Timer />

                {/* Content Sections */}
                <div id="timeline">
                    <Timeline />
                </div>
                <div id="events-section">
                    <Event_Random />
                </div>
                <div id="team-section">
                    <TeamSection />
                </div>
                <Sponsor />
</div>
                <Footer />
        </>
    );
}
