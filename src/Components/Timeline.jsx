
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


import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import './styles/timeline.css';
import astra from '../assets/astro.png';

const Timeline = () => {
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

    return (
        <div className="timeline">
        {/* Green Line Element */}
        <div className="green-line"></div>
    
        <div className="timeline-image">
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