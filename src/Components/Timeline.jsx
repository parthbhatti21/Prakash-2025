import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import './styles/timeline.css';

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
        position: 'left',
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
        position: 'left',
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
        position: 'left',
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
        position: 'left',
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
        rotation: scrollY * 0.25, // Rotates the image as user scrolls
        ease: 'power1.out', // Smooth easing
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="timeline">
      <div className="timeline-image">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb7mrl7ec2hTfAYeqfUtzGGUREzbBgNpSn0g&s"
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
  );
};

export default Timeline;
