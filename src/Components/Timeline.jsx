import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import './styles/timeline.css';
import astra from "../assets/astro.png"

const Timeline = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const timelineData = [
        {
            date: '15 Dec',
            icon: 'fa-home',
            position: 'left',
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.',
        },
        {
            date: '15 Dec',
            icon: 'fa-home',
            position: 'right',
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.',
        },
        {
            date: '15 Dec',
            icon: 'fa-home',
            position: 'left',
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.',
        },
        {
            date: '15 Dec',
            icon: 'fa-home',
            position: 'right',
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.',
        },
        {
            date: '15 Dec',
            icon: 'fa-home',
            position: 'left',
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.',
        },
        {
            date: '15 Dec',
            icon: 'fa-home',
            position: 'right',
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.',
        },
        {
            date: '15 Dec',
            icon: 'fa-home',
            position: 'left',
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.',
        },
        {
            date: '15 Dec',
            icon: 'fa-home',
            position: 'right',
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.',
        },
        {
            date: '15 Dec',
            icon: 'fa-home',
            position: 'left',
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.',
        },
        {
            date: '15 Dec',
            icon: 'fa-home',
            position: 'right',
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.',
        },
        {
            date: '15 Dec',
            icon: 'fa-home',
            position: 'left',
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.',
        },
        {
            date: '15 Dec',
            icon: 'fa-home',
            position: 'right',
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.',
        },
        // Add more timeline entries...
    ];

    // Update scroll position
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const scrollX = window.scrollX;

            setScrollPosition(scrollY);

            // Animate image on scroll with GSAP
            gsap.to('.timeline-image', {
                y: scrollY * 1, // Moves image down as user scrolls
                x: scrollX * 1,
                rotationY: scrollY * 0.25, // Rotates the image as user scrolls
                ease: 'power1.out', // Smooth easing
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="timeline">
                <div className="timeline-image">
                    <img
                        src={astra}
                        alt="Timeline"
                    />
                </div>
                {timelineData.map((item, index) => (
                    <div key={index} className={`container ${item.position}`}>
                        <div className="date">{item.date}</div>
                        <i className={`icon fa ${item.icon}`}></i>
                        <div className="content">
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Timeline;
