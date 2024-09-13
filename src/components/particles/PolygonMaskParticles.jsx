import { useEffect, useState, useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadAll } from "@tsparticles/all";
import benkelsoIcon from '../../assets/techicons/benkelso-icon.svg';

export const PolygonMaskParticles = () => {
  const [init, setInit] = useState(false);

  // Initialize particles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine);
    }).then(() => {
      setInit(true); // Set init to true once engine is ready
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container); // Callback when particles are loaded
  };

  const options = useMemo(() => ({
    fpsLimit: 60,

    fullScreen: {
      enable: false
    },
    interactivity: {
      detectsOn: "window",
      events: {
        onHover: {
          enable: true,
          mode: "bubble",
        }
      },
      modes: {
        bubble: {
          distance: 40,
          duration: 2,
          size: 3,
          opacity: 8
        },
      }
    },

    particles: {
      number: {
        value: 600,
        density: {
          enable: false,
          area: 10,
        }
      },
      color: {
        value: ["#bee9ee", "7cd9e4", "#02badb", "#0096b0", "#006e81"], // Google-themed colors
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: { min: 0.05, max: 0.4 },
        animation: {
          enable: true,
          speed: 1,
          sync: false
        }
      },
      size: {
        value: 1,
      },
      move: {
        enable: true,
        speed: 0.25,
        direction: "inline",
        outModes: {
          default: "bounce",
        }
      },
      links: {
        enable: true,
        distance: 12,
        color: {
          value: ["7cd9e4"], // Google-themed colors
        },
        opacity: 0.5,
        width: 1,
      }
    },
    polygon: {
      enable: true,
      inline: {
        arrangement: "equidistant", // Arrange particles evenly along the shape
      },
      move: {
        radius: 3,
        type: "path",
        outModes: {
          default: "bounce",
        },
      },
      scale: 1,
      type: "inline",
      // Use the local SVG file you imported
      url: benkelsoIcon,
      position: {
        x: 27, // Adjust position to center
        y: -5
      }
    },
    detectRetina: true,
  }), []);

  if (init) {
    return (
      <Particles
        id="tsparticles2"
        particlesLoaded={particlesLoaded} // Callback when particles are loaded
        options={options} // Particles options
        className="" // Assign z-index to ensure particles are behind content
      />
    );
  }

  return null; // Render nothing until initialization is complete
};