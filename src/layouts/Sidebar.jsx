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
    <aside className="w-1/4 bg-gradient-to-b from-lightColor to-superLightColor flex items-center justify-center fixed top-12 min-h-screen border-r-4">
      <div className="shadow-xl rounded-lg border-y-4 border-x-2 border-Color">
        <nav className="relative space-y-4 text-right bg-mainColor p-8 rounded-lg">
          <div className="pr-5 border-r-4 border-lightColor rounded-lg relative">
            <a
              href="#home"
              className={`block font-semibold ${activeSection === 'home' ? 'text-white hover:text-superLightColor' : 'text-superLightColor hover:text-white'}`}
            >
              Home
            </a>
            <a
              href="#portfolio"
              className={`block font-semibold ${activeSection === 'portfolio' ? 'text-white hover:text-superLightColor' : 'text-superLightColor hover:text-white'}`}
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className={`block font-semibold ${activeSection === 'contact' ? 'text-white hover:text-superLightColor' : 'text-superLightColor hover:text-white'}`}
            >
              Contact
            </a>

            {/* The animated dot */}
            <div
              className={`absolute -translate-x-2 right-0 h-1.5 w-1.5 bg-white rounded-full transform transition-transform duration-300 ease-in-out ${
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
