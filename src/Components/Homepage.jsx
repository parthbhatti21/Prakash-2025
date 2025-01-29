// import AboutUs from "./Aboutus";
import Navbar from "./Navbar";
import Star from "./Star";
import Timeline from "./Timeline";
import Timer from "./Timer";
import './styles/timeline.css'
import ship from "../assets/ship1.png"
export default function Homepage(){
    return(
        <>
        <Star/>
        <Navbar/>
        <Timer/>
        <div className="ship">
            <img src={ship} alt="" height={"180px"} width={"200px"} />
        </div>
        <Timeline />
        
        {/* <AboutUs/> */}
        </>
    )
}