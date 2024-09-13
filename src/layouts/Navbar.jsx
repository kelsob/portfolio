import { useState, useEffect } from 'react';
import githubIcon from '../../src/assets/techicons/github-icon.svg';
import locationIcon from '../../src/assets/techicons/location-icon.svg';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav
      className={`fixed top-0 w-full p-2 border-b-4 transition-colors duration-300 z-20 ${
        isDarkMode
          ? 'bg-darkColor border-mainColor text-white'
          : 'bg-mainColor border-lightColor text-black'
      }`}
      style={{
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)', 
      }}
    >
      <div className="flex justify-between items-center w-full px-6">
        {/* Left Side - Name and Title */}
        <div className="flex items-center space-x-4">
          <div
            className={`font-bold text-2xl rounded-xl pl-2 pr-2 transition-colors duration-300 border-2 border-lightColor ${
              isDarkMode ? 'text-white bg-mainColor' : 'text-mainColor bg-white'
            }`}
            style={{ userSelect: 'none' }}
          >
            Ben Kelso
          </div>
          <div className={`whitespace-nowrap ${isDarkMode ? 'text-superLightColor' : 'text-white'}`}>
            Web Developer
          </div>
        </div>

        {/* Right Side - External Links */}
        <div className="flex space-x-6 items-center">
          {/* GitHub Icon and Text */}
          <div className="flex items-center">
            <a href="https://github.com/kelsob" target="_blank" rel="noopener noreferrer" className="mr-2">
              <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
            </a>
            <a href="https://github.com/kelsob" target="_blank" rel="noopener noreferrer" className="hidden md:block mr-1 text-white">
              github.com/kelsob
            </a>
          </div>

          {/* Location Icon and Text */}
          <div className="flex items-center">
            <a href="https://www.google.com/maps/place/Guelph,+ON" target="_blank" rel="noopener noreferrer" className="mr-1">
              <img src={locationIcon} alt="Location" className="w-6 h-6" />
            </a>
            <a href="https://www.google.com/maps/place/Guelph,+ON" target="_blank" rel="noopener noreferrer" className="hidden md:block mr-1 text-white">
              Guelph, ON
            </a>
          </div>

          {/* Dark Mode Toggle */}
          <div
            onClick={toggleDarkMode}
            className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 border-2 border-superLightColor dark:border-mainColor ${
              isDarkMode ? 'bg-lightColor' : 'bg-lightColor'
            }`}
            style={{ userSelect: 'none' }}
          >
            <div
              className={`w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 flex items-center border-2 border-lightColor justify-center ${
                isDarkMode
                  ? 'translate-x-6 bg-darkColor text-white'
                  : 'translate-x-0 bg-superLightColor text-darkColor'
              }`}
            >
              {isDarkMode ? '🌙' : '☀️'}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
