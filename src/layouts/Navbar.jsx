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
      className={`fixed top-0 w-full p-2 z-10 border-b-4 pl-8 pr-8 transition-colors duration-300 rounded-br-2xl ${
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
            className={`w-min whitespace-nowrap font-bold text-2xl rounded-xl flex items-center justify-center pl-2 pr-2 transition-colors duration-300 border-2 border-lightColor ${
              isDarkMode
                ? 'text-white bg-mainColor'
                : 'text-mainColor bg-white'
            }`}
            style={{ userSelect: 'none' }}
          >
            Ben Kelso
          </div>
          <div className="text-white whitespace-nowrap">
            Web Developer
          </div>
        </div>

        {/* Right Side - External Links */}
        <div className="flex space-x-4 items-center">

          <div className="hidden md:flex">
            <a href="https://github.com/kelsob" target="_blank" rel="noopener noreferrer" className="mr-2">
              <img src="src/assets/github-icon.svg" alt="GitHub" className="w-6 h-6" />
            </a>
            <a href="https://github.com/kelsob" target="_blank" rel="noopener noreferrer" className="mr-1 text-white">
              github.com/kelsob
            </a>
          </div>
          <div className="hidden md:flex">
            <a href="https://www.google.com/maps/place/Guelph,+ON/@43.5344065,-80.3181062,13z/data=!3m1!4b1!4m6!3m5!1s0x882b9ad0c3a9fb6b:0x5037b28c7231b60!8m2!3d43.5448048!4d-80.2481666!16zL20vMDE4ZGN5?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="mr-1">
              <img src="src/assets/location-icon.svg" alt="Location" className="w-6 h-6" />
            </a>
            <a href="https://www.google.com/maps/place/Guelph,+ON/@43.5344065,-80.3181062,13z/data=!3m1!4b1!4m6!3m5!1s0x882b9ad0c3a9fb6b:0x5037b28c7231b60!8m2!3d43.5448048!4d-80.2481666!16zL20vMDE4ZGN5?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="mr-1 text-white">
              Guelph, ON
            </a>
          </div>
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
