import { useEffect, useState, useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadAll } from "@tsparticles/all";
import benkelsoIcon from '../../assets/techicons/benkelso-icon3.svg';

export const MainBackgroundParticles = () => {
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
    background: {
      color: {
        value: "#000e66" // Background color, you can change or set to transparent if desired
      },
      position: "0% 0%",
      repeat: "no-repeat",
      size: "cover",
      opacity: 1
    },
    fpsLimit: 60,
    interactivity: {
      detectsOn: "window",
      events: {
        onClick: {
          enable: true,
          mode: "push"
        },
        onHover: {
          enable: true,
          mode: "bubble",
        }
      },
      modes: {
        push: {
          quantity: 4,
        },
        bubble: {
          distance: 40,
          duration: 2,
          size: 6,
          opacity: 8
        },
      }
    },

    particles: {
      number: {
        value: 464,
        density: {
          enable: true,
          area: 1000,
        }
      },
      color: {
        value: ["#4285f4", "#34A853", "#FBBC05", "#EA4335"], // Google-themed colors
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: { min: 0.05, max: 0.4 },
        animation: {
          enable: true,
          speed: 2,
          sync: false
        }
      },
      size: {
        value: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        outModes: {
          default: "bounce",
        }
      },
      links: {
        enable: true,
        distance: 64,
        color: "#ffffff",
        opacity: 0.5,
        width: 1,
        duration:0.5
      }
    },
    polygon: {
      enable: true,
      inline: {
        arrangement: "equidistant", // Arrange particles evenly along the shape
      },
      move: {
        radius: 3,
        type: "path"
      },
      scale: 1.25,
      type: "inline",
      // Use the local SVG file you imported
      url: benkelsoIcon,
      position: {
        x: 0, // Adjust position to center
        y: 0
      }
    },
    detectRetina: true,
  }), []);

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded} // Callback when particles are loaded
        options={options} // Particles options
        className="z-0" // Assign z-index to ensure particles are behind content
      />
    );
  }

  return null; // Render nothing until initialization is complete
};
