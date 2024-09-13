import { useEffect, useState, useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim'; // Using slim for performance

export const MainBackgroundParticles = () => {
  const [init, setInit] = useState(false);

  // Initialize particles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Load only the slim version of the engine for performance
      await loadSlim(engine);
    }).then(() => {
      setInit(true); // Set init to true once engine is ready
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container); // Callback when particles are loaded
  };

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: false
      },
      background: {
        color: {
          value: '#0d2056', // Background color (can be changed or set to transparent)
        },
      },
      fpsLimit: 120, // Max FPS for the particles rendering
      interactivity: {
        events: {
          onClick: {
            enable: true, // Allows clicking to interact with particles
            mode: 'grab', // Push mode on click
          },
          onHover: {
            enable: true, // Hover effect for particles
            mode: 'repulse', // Repulse particles on hover
          },
        },
        modes: {
          grab: {
            distance: 256,
            links: {
              opacity: 1.0,
            }
          },
          push: {
            quantity: 4, // Number of particles to add on click
          },
          repulse: {
            distance: 128, // Distance for repulsion on hover
            duration: 0.6, // Duration of the hover effect
          },
        },
      },
      particles: {
        color: {
          value: '#1e307c', // Color of particles
        },
        links: {
          color: '#28498d', // Links between particles
          distance: 96, // Max distance for particle links
          enable: true, // Enable linking particles
          opacity: 0.5,
          width: 1,
        },
        move: {
          enable: true, // Enable movement
          speed: 1, // Speed of particle movement
          direction: 'none',
          outModes: {
            default: 'bounce', // Bounce particles when hitting edge
          },
          random: false,
          straight: true,
        },
        number: {
          density: {
            enable: true, // Enable density-based particle number
            area: 800, // Area size for density calculation
          },
          value: 600, // Number of particles
        },
        opacity: {
          value: 0.5, // Particle opacity
        },
        shape: {
          type: 'circle', // Shape of particles
        },
        size: {
          value: { min: 1, max: 3 }, // Size of particles
        },
      },
      detectRetina: true, // Enable retina detection
    }),
    [] // No dependencies, runs only once
  );

  // Render particles only after initialization
  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded} // Optional callback
        options={options} // Particle options
        className="z-0" // Confine the particles to the sidebar

      />
    );
  }

  return null; // Don't render anything before initialization
};
