// import AboutUs from "./Aboutus";
import Navbar from "./Navbar";
import Star from "./Star";
import Timeline from "./Timeline";
import Timer from "./Timer";
import './styles/timeline.css'
import ship from "../assets/ship1.png"
import system from '../assets/system.mp4';
import SolarSystem from "./SolarSystem";
import TeamSection from "./TeamSection";
import SpaceTeam from "./SpaceTeam";
export default function Homepage() {
    return (
        <>
            <div className="homepage-container">
                <div className="video-background">
                    <video className="video" autoPlay loop muted>
                        <source src={system} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <Star />
                <Navbar />
                {/* <Timer /> */}

                {/* Video Section */}

                {/* <div className="ship">
                    <img src={ship} alt="" height={"180px"} width={"200px"} />
                </div> */}
                <Timeline />
                <SpaceTeam />
            </div>
        </>
    );
}
