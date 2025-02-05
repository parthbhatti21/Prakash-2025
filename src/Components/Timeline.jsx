
// import { useEffect, useRef, useState } from "react";
// import { gsap } from 'gsap';
// import './styles/timeline.css';
// import astra from '../assets/astro.png';
// import img1 from '../assets/IMG_1254.JPG'
// import img2 from '../assets/IMG_1256.JPG'
// import img3 from '../assets/IMG_1731.JPG'
// import img4 from '../assets/IMG_4725.JPG'
// import img5 from '../assets/IMG_1031.jpg'
// import img6 from '../assets/IMG_0279.jpg'

// // import img6 from '../assets/timeline/IMG_1031.heic'
// // import img7 from '../assets/timeline/IMG_0269.heic'
// const Timeline = () => {
//     const astronautRef = useRef(null);
//     const [scrollPosition, setScrollPosition] = useState(0);
//     const stopAstroAt = 7000; // Define the scroll position (in pixels) where the astronaut should stop

//     const timelineData = [
//         {
//             icon: 'fa-home',
//             position: 'left',
//             title: 'Scaling New Heights: Where Ideas Soar and Talent Shines!',
//             img : img2
//         },
//         {
//             icon: 'fa-home',
//             position: 'right',
//             title: 'Celebrating Hard Work, Team Spirit, and Well-Deserved Success!',
//             img : img3
//         },
//         {
//             icon: 'fa-home',
//             position: 'left',
//             title: 'A Night Where Music Became Magic!',
//             img : img5
//         },
//         {
//             icon: 'fa-home',
//             position: 'right',
//             title: 'Where innovation meets inspiration – the journey begins here! 🚀🎓',
//             img : img1
//         },
//         {
//             icon: 'fa-home',
//             position: 'left',
//             title: 'Leaders of today, shaping the innovators of tomorrow! 🎓✨',
//             img : img6
//         },
//         {
//             icon: 'fa-home',
//             position: 'right',
//             title: '"A grand stage for the brightest minds! 🌟✨',
//             img : img4
//         },
          
//         // Add more timeline entries...
//     ];

//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollY = window.scrollY;
//             setScrollPosition(scrollY);

//             // Adjust animation for different screen sizes
//             const screenWidth = window.innerWidth;
//             const movementFactor = screenWidth < 768 ? 0.5 : 1;

//             // Stop the astronaut if scrollY exceeds the threshold
//             if (scrollY < stopAstroAt) {
//                 gsap.to('.timeline-image', {
//                     y: scrollY * movementFactor,
//                     // rotationY: scrollY * 0.25,
//                     ease: 'power1.out',
//                 });
//             } else {
//                 // Optionally, you can set a final position for the astronaut
//                 gsap.to('.timeline-image', {
//                     y: stopAstroAt * movementFactor,
//                     // rotationY: stopAstroAt * 0.25,
//                     ease: 'power1.out',
//                 });
//             }

//             // Update astronaut's position on mobile screens
//             if (screenWidth < 768) {
//                 const astronautElement = document.querySelector('.timeline-image');
//                 const greenLine = document.querySelector('.green-line');
//                 const greenLineTop = greenLine.getBoundingClientRect().top + window.scrollY;

//                 if (scrollY < stopAstroAt) {
//                     gsap.to(astronautElement, {
//                         y: scrollY - movementFactor, // Move the astronaut along the green line
//                         ease: 'power1.out',
//                     });
//                 } else {
//                     gsap.to(astronautElement, {
//                         y: stopAstroAt - movementFactor,
//                         ease: 'power1.out',
//                     });
//                 }
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, [stopAstroAt]);
//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollY = window.scrollY;
//             setScrollPosition(scrollY);
    
//             const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
//             const scrollPercent = scrollY / maxScroll;
//             const scrollValue = scrollPercent * 1000; // Match Rive animation scale
    
//             // Move astronaut based on mapped scroll value
//             if (scrollY < stopAstroAt) {
//                 gsap.to('.timeline-image', {
//                     y: scrollValue * 0.5, // Adjust for smoother movement
//                     ease: 'power1.out',
//                 });
//             } else {
//                 gsap.to('.timeline-image', {
//                     y: stopAstroAt * 0.5,
//                     ease: 'power1.out',
//                 });
//             }
//         };
    
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);
    



//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     astronautRef.current.classList.add("scrolled");
//                 } else {
//                     astronautRef.current.classList.remove("scrolled");
//                 }
//             },
//             { threshold: 0.5 }
//         );

//         if (astronautRef.current) {
//             observer.observe(astronautRef.current);
//         }

//         return () => observer.disconnect();
//     }, []);
//     return (
//         <div className="timeline">
//             {/* Green Line Element */}
//             <div className="green-line"></div>

//             <div ref={astronautRef} className="timeline-image astronaut">
//                 <img src={astra} alt="Astronaut" />
//             </div>

//             {timelineData.map((item, index) => (
//                 <div key={index} className={`container2 ${item.position}`}>
//                     <div className="date">{item.date}</div>
//                     <i className={`icon fa ${item.icon}`}></i>
//                     <div className="content">
//                         <div className="timeline-entry-image">
//                             <img src={item.img} alt="Event" />
//                         </div>
//                         <h2>{item.title}</h2>
//                         <p>{item.description}</p>
//                     </div>
//                 </div>
//             ))}
//         </div>

//     );
// };

// export default Timeline;

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
            {/* Green Line */}
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
    );
};

export default Timeline;
