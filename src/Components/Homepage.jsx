import Navbar from "./Navbar";
import Star from "./Star";
import Timeline from "./Timeline";
import Timer from "./Timer";
import system from "../assets/system.mp4";
import TeamSection from "./TeamSection";
import Event_Random from "./Event_Random";
import Footer from "./Footer";
import Sponsor from "./Sponsor";
import AboutPage from "./AboutPage";

export default function Homepage() {
    return (
        <>
            <div className="homepage-container">
                {/* Video Background */}
                <div className="video-background">
                    <video className="video" autoPlay loop muted>
                        <source src={system} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <Star />
                <Navbar />
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
                <Footer />
            </div>
        </>
    );
}
