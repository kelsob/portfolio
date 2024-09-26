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
      className={`fixed top-0 w-full p-2 border-b-4 transition-colors duration-300 z-20 ${
        isDarkMode
          ? 'bg-darkColor border-mainColor text-white'
          : 'bg-mainColor border-lightColor text-black'
      }`}
      style={{
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
      }}
    >
      <div className="flex justify-between items-center w-full pl-0 pr-0">
        {/* Left Side - Name and Title */}
        <div className="flex items-center space-x-2 sm:space-x-4 min-w-0 ml-2">
          <div
            className={`font-bold text-2xl rounded-lg pl-2 pr-2 transition-colors duration-300 border-2 border-lightColor ${
              isDarkMode ? 'text-white bg-mainColor' : 'text-mainColor bg-white'
            } whitespace-nowrap overflow-hidden text-ellipsis`}
            style={{ userSelect: 'none', maxWidth: '150px' }}
          >
            Ben Kelso
          </div>
          <div
            className={`whitespace-nowrap ${
              isDarkMode ? 'text-superLightColor' : 'text-white'
            }`}
          >
            Web Developer
          </div>
        </div>

        {/* Right Side - Dark Mode Toggle */}
        <div className="flex items-center mr-2">
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
