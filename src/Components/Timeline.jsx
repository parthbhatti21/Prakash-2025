import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./styles/timeline.css";
import astra from "../assets/astro.png";
import img1 from "../assets/IMG_1254.JPG";
import img2 from "../assets/IMG_1256.JPG";
import img3 from "../assets/IMG_1731.JPG";
import img4 from "../assets/IMG_4725.JPG";
import img5 from "../assets/IMG_1031.jpg";
import img6 from "../assets/IMG_0279.jpg";

const Timeline = () => {
    const astronautRef = useRef(null);
    const timelineRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!astronautRef.current || !timelineRef.current) return;

            const timeline = timelineRef.current;
            const astronaut = astronautRef.current;

            const timelineRect = timeline.getBoundingClientRect(); // Timeline position
            const windowHeight = window.innerHeight;

            // Calculate scroll progress
            let scrollProgress = Math.max(0, Math.min(1, -timelineRect.top / (timelineRect.height - windowHeight)));

            // Calculate new position within timeline boundaries
            const maxY = timeline.offsetHeight - astronaut.offsetHeight;
            const newY = scrollProgress * maxY;

            gsap.to(astronaut, {
                y: newY,
                ease: "power1.out",
                duration: 1, // Smooth transition
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const timelineData = [
        { position: "left", title: "Scaling New Heights!", img: img2 },
        { position: "right", title: "Celebrating Hard Work!", img: img3 },
        { position: "left", title: "A Night of Music!", img: img5 },
        { position: "right", title: "Innovation Meets Inspiration!", img: img1 },
        { position: "left", title: "Leaders of Tomorrow!", img: img6 },
        { position: "right", title: "Brightest Minds on Stage!", img: img4 },
    ];

    return (
        <div className="timeline" ref={timelineRef}>
            {/* Title */}
            {/* Green Line */}
            <div class="timeline_container">
                <div className="green-line"></div>
                {/* Astronaut Image */}
                <div ref={astronautRef} className="timeline-image astronaut">
                    <img src={astra} alt="Astronaut" />
                </div>

                {/* Timeline Events */}
                {timelineData.map((item, index) => (
                    <div key={index} className={`container2 ${item.position}`}>
                        <div className="content">
                            <div className="timeline-entry-image">
                                <img src={item.img} alt="Event" />
                            </div>
                            <h2>{item.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
