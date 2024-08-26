import { useState, useEffect } from 'react';

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
      className={`fixed top-0 w-full p-2 z-10 border-b-4 pl-8 pr-8 transition-colors duration-300 ${
        isDarkMode
          ? 'bg-darkColor border-mainColor text-white'
          : 'bg-mainColor border-lightColor text-black'
      }`}
      style={{
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)' 
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left Side - Name and Title */}
        <div className="flex items-center space-x-4">
          <div
            className={`font-bold text-2xl rounded-xl flex items-center justify-center pl-2 pr-2 transition-colors duration-300 ${
              isDarkMode
                ? 'text-white bg-mainColor'
                : 'text-mainColor bg-white'
            }`}
            style={{ userSelect: 'none' }}
          >
            Ben Kelso
          </div>
          <div className="text-sm">
            Web Developer
          </div>
        </div>

        {/* Right Side - External Links */}
        <div className="flex space-x-4 items-center">

          <div className="flex">
            <a href="https://github.com/kelsob" target="_blank" rel="noopener noreferrer" className="mr-2">
              <img src="src/assets/github.svg" alt="GitHub" className="w-6 h-6" />
            </a>
            <span>github.com/kelsob</span>
          </div>
          <div className="flex">
            <a href="https://maps.google.com/?q=YourLocation" target="_blank" rel="noopener noreferrer" className="mr-1">
              <img src="src/assets/location.svg" alt="Location" className="w-6 h-6" />
            </a>
            <span>Guelph, ON</span>
          </div>
          <div
            onClick={toggleDarkMode}
            className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
              isDarkMode ? 'bg-lightColor' : 'bg-lightColor'
            }`}
            style={{ userSelect: 'none' }}
          >
            <div
              className={`w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
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
