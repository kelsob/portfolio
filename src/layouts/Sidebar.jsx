import React, { useState, useEffect } from 'react';

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
    <aside className="w-1/4 bg-gradient-to-b from-mainColor to-superLightColor dark:from-darkColor dark:to-lightColor flex items-center justify-end pr-4 fixed min-h-screen border-r-4 border-lightColor dark:border-superDarkColor">
      <div className="transition-all duration-500 ease-in-out shadow-xl rounded-lg border-y-4 border-x-2 border-lightColor dark:border-mainColor md:translate-x-0 translate-x-2">
        <nav className="transition-all duration-500 ease-in-out relative space-y-4 text-right bg-mainColor dark:bg-darkColor rounded-lg py-8 pl-8 pr-0 md:px-8">
          <div className="transition-colors pr-6 border-mainColor relative">
            <a
              href="#home"
              className={`block font-semibold ${activeSection === 'home' ? 'text-white dark:text-superLightColor' : 'text-superLightColor hover:text-white dark:text-lightColor dark:hover:text-white'}`}
            >
              Home
            </a>
            <a
              href="#portfolio"
              className={`block font-semibold ${activeSection === 'portfolio' ? 'text-white dark:text-superLightColor' : 'text-superLightColor hover:text-white dark:text-lightColor dark:hover:text-white'}`}
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className={`block font-semibold ${activeSection === 'contact' ? 'text-white dark:text-superLightColor' : 'text-superLightColor hover:text-white dark:text-lightColor dark:hover:text-white'}`}
            >
              Contact
            </a>

            {/* The animated dot */}
            <div
              className={`absolute -translate-x-2 right-0 h-2 w-2 bg-white dark:bg-superLightColor rounded-full transform transition-transform duration-300 ease-in-out ${
                activeSection === 'home' ? '-translate-y-4' :
                activeSection === 'portfolio' ? 'translate-y-2' :
                'translate-y-8'
              }`}
              style={{ top: 'calc(1.25rem + 4px)' }} /* Adjust this based on spacing */
            ></div>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
