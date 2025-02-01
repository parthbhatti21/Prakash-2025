
// import React, { useState, useEffect } from 'react';
// import { gsap } from 'gsap';
// import './styles/timeline.css';
// import astra from '../assets/astro.png';

// const Timeline = () => {
//     const [scrollPosition, setScrollPosition] = useState(0);

//     const timelineData = [
//         {
//             date: '15 Dec',
//             icon: 'fa-home',
//             position: 'left',
//             title: 'Lorem ipsum dolor sit amet',
//             description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non.',
//         },
//         {
//             date: '15 Dec',
//             icon: 'fa-home',
//             position: 'right',
//             title: 'Lorem ipsum dolor sit amet',
//             description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non.',
//         },
//         {
//             date: '15 Dec',
//             icon: 'fa-home',
//             position: 'left',
//             title: 'Lorem ipsum dolor sit amet',
//             description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non.',
//         },
//         {
//             date: '15 Dec',
//             icon: 'fa-home',
//             position: 'right',
//             title: 'Lorem ipsum dolor sit amet',
//             description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non.',
//         },
//         {
//             date: '15 Dec',
//             icon: 'fa-home',
//             position: 'left',
//             title: 'Lorem ipsum dolor sit amet',
//             description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non.',
//         },
//         {
//             date: '15 Dec',
//             icon: 'fa-home',
//             position: 'right',
//             title: 'Lorem ipsum dolor sit amet',
//             description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non.',
//         },
//         {
//             date: '15 Dec',
//             icon: 'fa-home',
//             position: 'left',
//             title: 'Lorem ipsum dolor sit amet',
//             description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non.',
//         },
//         {
//             date: '15 Dec',
//             icon: 'fa-home',
//             position: 'right',
//             title: 'Lorem ipsum dolor sit amet',
//             description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non.',
//         },
//         {
//             date: '15 Dec',
//             icon: 'fa-home',
//             position: 'left',
//             title: 'Lorem ipsum dolor sit amet',
//             description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non.',
//         },
//         {
//             date: '15 Dec',
//             icon: 'fa-home',
//             position: 'right',
//             title: 'Lorem ipsum dolor sit amet',
//             description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non.',
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
    
//             gsap.to('.timeline-image', {
//                 y: scrollY * movementFactor,
//                 rotationY: scrollY * 0.25,
//                 ease: 'power1.out',
//             });
    
//             // Update astronaut's position on mobile screens
//             if (screenWidth < 768) {
//                 const astronautElement = document.querySelector('.timeline-image');
//                 const greenLine = document.querySelector('.green-line');
//                 const greenLineTop = greenLine.getBoundingClientRect().top + window.scrollY;
    
//                 gsap.to(astronautElement, {
//                     y: scrollY - movementFactor, // Move the astronaut along the green line
//                     ease: 'power1.out',
//                 });
//             }
//         };
    
//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);
    
    
//     // useEffect(() => {
//     //     const handleScroll = () => {
//     //         const scrollY = window.scrollY;
//     //         setScrollPosition(scrollY);

//     //         // Adjust animation for different screen sizes
//     //         const screenWidth = window.innerWidth;
//     //         const movementFactor = screenWidth < 768 ? 0.5 : 1;

//     //         gsap.to('.timeline-image', {
//     //             y: scrollY * movementFactor,
//     //             rotationY: scrollY * 0.25,
//     //             ease: 'power1.out',
//     //         });
//     //     };

//     //     window.addEventListener('scroll', handleScroll);
//     //     return () => {
//     //         window.removeEventListener('scroll', handleScroll);
//     //     };
//     // }, []);

//     return (
//         <div className="timeline">
//             {/* Green Line Element */}
//             <div className="green-line"></div>
    
//             <div className="timeline-image">
//                 <img src={astra} alt="Astronaut" />
//             </div>
    
//             {timelineData.map((item, index) => (
//                 <div key={index} className={`container ${item.position}`}>
//                     <div className="date">{item.date}</div>
//                     <i className={`icon fa ${item.icon}`}></i>
//                     <div className="content">
//                         <div className="timeline-entry-image">
//                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4HhUizr7okcMv4PptCiU8wBzFNpHAgURuNQ&s" alt="Event" />
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


import React, { useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';
import './styles/timeline.css';
import astra from '../assets/astro.png';
const Timeline = () => {
    const astronautRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const stopAstroAt = 3500; // Define the scroll position (in pixels) where the astronaut should stop

    const timelineData = [
        {
            date: '15 Dec',
            icon: 'fa-home',
            position: 'left',
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non.',
        },
        {
            date: '15 Dec',
            icon: 'fa-home',
            position: 'right',
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non.',
        },
        {
            date: '15 Dec',
            icon: 'fa-home',
            position: 'left',
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non.',
        },
        {
            date: '15 Dec',
            icon: 'fa-home',
            position: 'right',
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non.',
        },
        {
            date: '15 Dec',
            icon: 'fa-home',
            position: 'left',
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non.',
        },
        {
            date: '15 Dec',
            icon: 'fa-home',
            position: 'right',
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non.',
        },
        {
            date: '15 Dec',
            icon: 'fa-home',
            position: 'left',
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non.',
        },
        {
            date: '15 Dec',
            icon: 'fa-home',
            position: 'right',
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non.',
        },
        {
            date: '15 Dec',
            icon: 'fa-home',
            position: 'left',
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non.',
        },
        {
            date: '15 Dec',
            icon: 'fa-home',
            position: 'right',
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non.',
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
                    rotationY: scrollY * 0.25,
                    ease: 'power1.out',
                });
            } else {
                // Optionally, you can set a final position for the astronaut
                gsap.to('.timeline-image', {
                    y: stopAstroAt * movementFactor,
                    rotationY: stopAstroAt * 0.25,
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
            const lastEntry = document.querySelector('.container:last-child');
    
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
            <div key={index} className={`container ${item.position}`}>
                <div className="date">{item.date}</div>
                <i className={`icon fa ${item.icon}`}></i>
                <div className="content">
                    <div className="timeline-entry-image">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4HhUizr7okcMv4PptCiU8wBzFNpHAgURuNQ&s" alt="Event" />
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