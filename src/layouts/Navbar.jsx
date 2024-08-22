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
    <nav className="fixed top-0 w-full p-4 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#portfolio" className="hover:text-gray-400">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
        <div 
          onClick={toggleDarkMode} 
          className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
            isDarkMode ? 'bg-gray-800' : 'bg-gray-300'
          }`}
        >
          <div 
            className={`${
              isDarkMode ? 'translate-x-6 bg-gray-700' : 'translate-x-0 bg-white'
            } w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center`}
          >
            {isDarkMode ? '🌙' : '☀️'}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
