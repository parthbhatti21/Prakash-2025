
import { useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';
import './styles/timeline.css';
import astra from '../assets/astro.png';
import img1 from '../assets/IMG_1254.JPG'
import img2 from '../assets/IMG_1256.JPG'
import img3 from '../assets/IMG_1731.JPG'
import img4 from '../assets/IMG_4725.JPG'
import img5 from '../assets/IMG_1031.jpg'
import img6 from '../assets/IMG_0279.jpg'

// import img6 from '../assets/timeline/IMG_1031.heic'
// import img7 from '../assets/timeline/IMG_0269.heic'
const Timeline = () => {
    const astronautRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const stopAstroAt = 2150; // Define the scroll position (in pixels) where the astronaut should stop

    const timelineData = [
        {
            icon: 'fa-home',
            position: 'left',
            title: 'Scaling New Heights: Where Ideas Soar and Talent Shines!',
            img : img2
        },
        {
            icon: 'fa-home',
            position: 'right',
            title: 'Celebrating Hard Work, Team Spirit, and Well-Deserved Success!',
            img : img3
        },
        {
            icon: 'fa-home',
            position: 'left',
            title: 'A Night Where Music Became Magic!',
            img : img5
        },
        {
            icon: 'fa-home',
            position: 'right',
            title: 'Where innovation meets inspiration – the journey begins here! 🚀🎓',
            img : img1
        },
        {
            icon: 'fa-home',
            position: 'left',
            title: 'Leaders of today, shaping the innovators of tomorrow! 🎓✨',
            img : img6
        },
        {
            icon: 'fa-home',
            position: 'right',
            title: '"A grand stage for the brightest minds! 🌟✨',
            img : img4
        },
        
        // Add more timeline entries...
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setScrollPosition(scrollY);

            // Adjust animation for different screen sizes
            const screenWidth = window.innerWidth;
            const movementFactor = screenWidth < 768 ? 0.5 : 1;

            // Stop the astronaut if scrollY exceeds the threshold
            if (scrollY < stopAstroAt) {
                gsap.to('.timeline-image', {
                    y: scrollY * movementFactor,
                    // rotationY: scrollY * 0.25,
                    ease: 'power1.out',
                });
            } else {
                // Optionally, you can set a final position for the astronaut
                gsap.to('.timeline-image', {
                    y: stopAstroAt * movementFactor,
                    // rotationY: stopAstroAt * 0.25,
                    ease: 'power1.out',
                });
            }

            // Update astronaut's position on mobile screens
            if (screenWidth < 768) {
                const astronautElement = document.querySelector('.timeline-image');
                const greenLine = document.querySelector('.green-line');
                const greenLineTop = greenLine.getBoundingClientRect().top + window.scrollY;

                if (scrollY < stopAstroAt) {
                    gsap.to(astronautElement, {
                        y: scrollY - movementFactor, // Move the astronaut along the green line
                        ease: 'power1.out',
                    });
                } else {
                    gsap.to(astronautElement, {
                        y: stopAstroAt - movementFactor,
                        ease: 'power1.out',
                    });
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [stopAstroAt]);
    useEffect(() => {
        const handleMobileScroll = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 768) return; // Only run on mobile screens

            const scrollY = window.scrollY;
            setScrollPosition(scrollY);

            const astronautElement = document.querySelector('.timeline-image.astronaut');
            const greenLine = document.querySelector('.green-line');
            const lastEntry = document.querySelector('.container2:last-child');

            if (!astronautElement || !greenLine || !lastEntry) return;

            const greenLineTop = greenLine.getBoundingClientRect().top + window.scrollY;
            const lastEntryTop = lastEntry.getBoundingClientRect().top + window.scrollY - 100;

            // Move astronaut along the green line dynamically
            let newY = scrollY - greenLineTop + 50; // Adjust offset for smoother movement

            // Stop astronaut at the last timeline entry
            if (scrollY >= lastEntryTop - 200) {
                newY = lastEntryTop - greenLineTop - 100;
            }

            gsap.to(astronautElement, {
                y: newY,
                ease: "power1.out",
                duration: 0.2, // Short duration for smoother movement
            });
        };

        window.addEventListener('scroll', handleMobileScroll);
        return () => {
            window.removeEventListener('scroll', handleMobileScroll);
        };
    }, []);



    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    astronautRef.current.classList.add("scrolled");
                } else {
                    astronautRef.current.classList.remove("scrolled");
                }
            },
            { threshold: 0.5 }
        );

        if (astronautRef.current) {
            observer.observe(astronautRef.current);
        }

        return () => observer.disconnect();
    }, []);
    return (
        <div className="timeline">
            {/* Green Line Element */}
            <div className="green-line"></div>

            <div ref={astronautRef} className="timeline-image astronaut">
                <img src={astra} alt="Astronaut" />
            </div>

            {timelineData.map((item, index) => (
                <div key={index} className={`container2 ${item.position}`}>
                    <div className="date">{item.date}</div>
                    <i className={`icon fa ${item.icon}`}></i>
                    <div className="content">
                        <div className="timeline-entry-image">
                            <img src={item.img} alt="Event" />
                        </div>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>

    );
};

export default Timeline;