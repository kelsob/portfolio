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
          ? 'bg-darkColor border-mainColor'
          : 'bg-mainColor border-lightColor'
      }`}
      style={{ 
        boxShadow: isDarkMode 
          ? '0 4px 10px rgba(0, 0, 0, 0.15)'   // Darker shadow in dark mode
          : '0 4px 10px rgba(0, 0, 0, 0.15)'   // Lighter shadow in light mode
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <ul className="flex space-x-6 items-center">
          <li>
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
          </li>

          <li>
            <a
              href="#home"
              className="font-bold hover:text-superLightColor hover:underline pl-2"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="font-bold hover:text-superLightColor hover:underline"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="font-bold hover:text-superLightColor hover:underline"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="font-bold hover:text-superLightColor hover:underline"
            >
              Contact
            </a>
          </li>
        </ul>
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
    </nav>
  );
};

export default Navbar;
