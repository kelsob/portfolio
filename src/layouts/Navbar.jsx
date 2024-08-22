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
    <nav className="fixed top-0 w-full bg-gray-900 p-4 z-10">
      <ul className="flex justify-around items-center">
        <li><a href="#home" className="text-white hover:text-gray-400">Home</a></li>
        <li><a href="#about" className="text-white hover:text-gray-400">About</a></li>
        <li><a href="#portfolio" className="text-white hover:text-gray-400">Portfolio</a></li>
        <li><a href="#contact" className="text-white hover:text-gray-400">Contact</a></li>
        <li>
          <button onClick={toggleDarkMode} className="text-white hover:text-gray-400">
            {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
