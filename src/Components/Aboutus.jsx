import { useEffect, useRef } from "react";


const AboutUs = () => {
  const astronautRef = useRef(null);

  useEffect(() => {
    const astronaut = astronautRef.current;

    const moveAstronaut = () => {
      if (astronaut) {
        // Generate random positions within the container
        const containerWidth = astronaut.parentElement.offsetWidth;
        const containerHeight = astronaut.parentElement.offsetHeight;
        const astronautWidth = astronaut.offsetWidth;
        const astronautHeight = astronaut.offsetHeight;

        const randomX = Math.random() * (containerWidth - astronautWidth);
        const randomY = Math.random() * (containerHeight - astronautHeight);

        // Apply the new position
        astronaut.style.left = `${randomX}px`;
        astronaut.style.top = `${randomY}px`;
      }
    };

    // Move the astronaut every 3 seconds
    const interval = setInterval(moveAstronaut, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const styles = {
    container: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4rem',
      backgroundColor: '#0a0a0a',
      color: '#00ffcc',
      fontFamily: '"Orbitron", sans-serif',
      textAlign: 'center',
      border: '2px solid #00ffcc',
      borderRadius: '15px',
      boxShadow: '0 0 20px #00ffcc, inset 0 0 10px #00ffcc',
      margin: '2rem',
      overflow: 'hidden',
      minHeight: '400px', // Ensure the container has enough space
    },
    title: {
      fontSize: '3rem',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      marginBottom: '1rem',
      textShadow: '0 0 10px #00ffcc, 0 0 20px #00ffcc',
    },
    subtitle: {
      fontSize: '1.5rem',
      marginBottom: '2rem',
      color: '#ffffff',
      textShadow: '0 0 5px #00ffcc',
    },
    description: {
      fontSize: '1.2rem',
      lineHeight: '1.6',
      maxWidth: '800px',
      color: '#cccccc',
      textShadow: '0 0 5px #00ffcc',
    },
    glowEffect: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      borderRadius: '15px',
      boxShadow: '0 0 50px #00ffcc, inset 0 0 20px #00ffcc',
      pointerEvents: 'none',
      zIndex: '-1',
    },
    astronaut: {
      position: 'absolute',
      width: '100px', // Adjust size as needed
      transition: 'left 2s ease-in-out, top 2s ease-in-out', // Smooth movement
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.glowEffect}></div>
      <img
        ref={astronautRef}
        src="https://www.freeiconspng.com/uploads/astronaut-png-26.png" // Replace with your astronaut image URL
        alt="Floating Astronaut"
        style={styles.astronaut}
      />
      <h1 style={styles.title}>About Us</h1>
      <h2 style={styles.subtitle}>Exploring the Future, Today</h2>
      <p style={styles.description}>
        Welcome to <strong>Nebula Dynamics</strong>, where we push the boundaries of innovation and technology. 
        Our mission is to create a future where humanity and technology coexist seamlessly, unlocking the 
        mysteries of the universe and harnessing its potential. From advanced AI systems to interstellar 
        exploration, we are dedicated to shaping a brighter tomorrow. Join us on this journey as we 
        redefine whats possible and venture into the unknown.
      </p>
    </div>
  );
};

export default AboutUs;