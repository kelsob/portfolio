import React, { useState, useEffect } from 'react';
import sidebarBgLight from '../../src/assets/bgimages/sidebar-bg-light.png';
import sidebarBgDark from '../../src/assets/bgimages/sidebar-bg-dark.png';
import { PolygonMaskParticles } from '../components/particles/PolygonMaskParticles';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = () => {
    const sections = ['home', 'portfolio', 'contact'];
    const offsets = sections.map(section => {
      const element = document.getElementById(section);
      return element ? element.offsetTop : 0;
    });

    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (let i = sections.length - 1; i >= 0; i--) {
      if (scrollPosition >= offsets[i]) {
        setActiveSection(sections[i]);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside className="fixed w-40 min-h-screen border-r-4 z-10 border-mainColor dark:border-superDarkColor">
      {/* Background Layer */}
      <div className="absolute inset-0">
        {/* Light mode background */}
        <div
          className="absolute inset-0 transition-opacity duration-500 opacity-100 dark:opacity-0"
          style={{
            backgroundImage: `url(${sidebarBgLight})`,
            backgroundPosition: 'right center',
            backgroundSize: 'auto 100%',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        {/* Dark mode background */}
        <div
          className="absolute inset-0 transition-opacity duration-500 dark:opacity-100 opacity-0"
          style={{
            backgroundImage: `url(${sidebarBgDark})`,
            backgroundPosition: 'right center',
            backgroundSize: 'auto 100%',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
      </div>

      {/* Particle Layer aligned to the bottom */}
      <div className="fixed bottom-0 left-0 z-0">
        <PolygonMaskParticles />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-end justify-start pt-20 pr-4 min-h-screen drop-shadow-lg overflow-y-auto">
        <div className="">
          <nav className="space-y-4 text-right rounded-lg p-4 bg-gray-400 bg-opacity-30">
            <div className="relative pr-6 border-mainColor">
              <a
                href="#home"
                className={`block font-semibold drop-shadow-md ${
                  activeSection === 'home'
                    ? 'text-white dark:text-superLightColor'
                    : 'text-lightColor hover:text-superLightColor dark:text-lightColor dark:hover:text-white'
                }`}
              >
                Home
              </a>
              <a
                href="#portfolio"
                className={`block font-semibold drop-shadow-md ${
                  activeSection === 'portfolio'
                    ? 'text-white dark:text-superLightColor'
                    : 'text-lightColor hover:text-superLightColor dark:text-lightColor dark:hover:text-white'
                }`}
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className={`block font-semibold drop-shadow-md ${
                  activeSection === 'contact'
                    ? 'text-white dark:text-superLightColor'
                    : 'text-lightColor hover:text-superLightColor dark:text-lightColor dark:hover:text-white'
                }`}
              >
                Contact
              </a>

              {/* The animated dot */}
              <div
                className={`absolute -translate-x-3 right-0 h-1.5 w-1.5 bg-mainColor border-2 border-darkColor dark:bg-superLightColor rounded-full transform transition-transform duration-300 ease-in-out ${
                  activeSection === 'home'
                    ? '-translate-y-4'
                    : activeSection === 'portfolio'
                    ? 'translate-y-2'
                    : activeSection === 'contact'
                    ? 'translate-y-8'
                    : 'translate-y-8'
                }`}
                style={{ top: 'calc(1.25rem + 4px)' }} /* Adjust this based on spacing */
              ></div>
            </div>
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
