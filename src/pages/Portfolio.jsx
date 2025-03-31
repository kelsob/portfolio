import { useState } from 'react';
import { FriendFarmOverlay } from '../components/FriendFarmOverlay';
import { StocksOverlay } from '../components/StocksOverlay';
import stockDetailsImage from '../../src/assets/stocks/StockDetails.png';
import friendFarmTitleScreen from '../../src/assets/friendfarm/images/FriendFarmTitleScreen.png';
import { KateHowellsOverlay } from '../components/KateHowellsOverlay';
import kateHowellsImage from '../assets/katehowells/portfolio-kate-howells-1.webp';
import { BenReidOverlay } from '../components/BenReidOverlay';
import benReidPreview from '../assets/benreid/portfolio-ben-reid-1.webp';
import laravelLogo from '../assets/techicons/laravel-icon.svg';
import tailwindLogo from '../assets/techicons/tailwind-icon.svg';
import alpineLogo from '../assets/techicons/alpinejs-icon.png';
import livewireLogo from '../assets/techicons/livewire-icon.svg';
import phpLogo from '../assets/techicons/php-icon.svg';
import wixLogo from '../assets/techicons/wix-icon.png';
import godotLogo from '../assets/techicons/godot-icon.svg';
import asepriteLogo from '../assets/techicons/aseprite-icon.svg';

const Portfolio = () => {
  const [activeOverlay, setActiveOverlay] = useState(null);  // Track which overlay is open

  const openOverlay = (project) => {
    setActiveOverlay(project);
  };

  const closeOverlay = () => {
    setActiveOverlay(null);
  };

  return (
    <div className="min-h-auto flex flex-col justify-center p-6 pt-4 mt-12">
      <div className="w-full max-w-4xl mx-auto">
        {/* Portfolio Header */}
        <h1 className="text-4xl font-bold mb-8 text-center transition-colors duration-300">Portfolio</h1>
        <p className="text-center text-sm text-gray-200 dark:text-gray-100 mb-8">
          A selection of projects developed independently and through <a href="https://www.pixelburstdigital.com" target="_blank" rel="noopener noreferrer" className="text-blue-200 dark:text-blue-200 hover:text-blue-100 dark:hover:text-blue-100 transition-colors duration-300">Pixel Burst Digital</a>.
        </p>

        {/* Web Development Projects */}
        <h2 className="text-2xl font-semibold mb-6 text-left transition-colors duration-300">Web Development</h2>
        <div className="grid grid-cols-1 gap-8 transition-colors duration-300 mb-12">
          {/* Kate Howells Project */}
          <div 
            className="group bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border-2 border-superLightColor dark:border-gray-700"
            onClick={() => openOverlay('katehowells')}
          >
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-1/3 relative overflow-hidden">
                <img 
                  src={kateHowellsImage} 
                  alt="Kate Howells Portfolio" 
                  className="w-full h-full object-contain object-center transform group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <div className="sm:w-2/3 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    Kate Howells Portfolio
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    A sleek, retro-futuristic portfolio and booking website for space communicator and consultant Kate Howells, built with Laravel TALL stack.
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <img src={laravelLogo} alt="Laravel" className="w-6 h-6" />
                  <img src={tailwindLogo} alt="Tailwind" className="w-6 h-6" />
                  <img src={alpineLogo} alt="Alpine.js" className="w-6 h-6" />
                  <img src={livewireLogo} alt="Livewire" className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>

          {/* Ben Reid Project */}
          <div 
            className="group bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border-2 border-superLightColor dark:border-gray-700"
            onClick={() => openOverlay('benreid')}
          >
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-1/3 relative overflow-hidden">
                <img 
                  src={benReidPreview} 
                  alt="Ben Reid Consulting" 
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <div className="sm:w-2/3 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    Ben Reid Consulting
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    A modern redesign of a Wix-based website for social consultant Ben Reid, featuring advanced customization and responsive design.
                  </p>
                </div>
                <div className="flex items-center">
                  <img src={wixLogo} alt="Wix" className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>

          {/* Stocks Project */}
          <div 
            className="group bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border-2 border-superLightColor dark:border-gray-700"
            onClick={() => openOverlay('web1')}
          >
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-1/3 relative overflow-hidden">
                <img 
                  src={stockDetailsImage} 
                  alt="Simulated Stock Market" 
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <div className="sm:w-2/3 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    Simulated Stock Market
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    This platform allows users to buy and sell fictional stocks in real-time, using virtual currency. Track your portfolio and see how the market evolves!
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <img src={phpLogo} alt="PHP" className="w-6 h-6" />
                  <img src={laravelLogo} alt="Laravel" className="w-6 h-6" />
                  <img src={tailwindLogo} alt="Tailwind" className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Game Development Projects */}
        <h2 className="text-2xl font-semibold mb-6 text-left transition-colors duration-300">Game Development</h2>
        <div className="grid grid-cols-1 gap-8 transition-colors duration-300">
          {/* Friend Farm Project */}
          <div 
            className="group bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border-2 border-superLightColor dark:border-gray-700"
            onClick={() => openOverlay('game1')}
          >
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-1/3 relative overflow-hidden">
                <img 
                  src={friendFarmTitleScreen} 
                  alt="Friend Farm" 
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <div className="sm:w-2/3 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    Friend Farm
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    A charming 2D farming adventure built in Godot, featuring pixel art, dynamic weather systems, and complex NPC behaviors.
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <img src={godotLogo} alt="Godot Engine" className="w-6 h-6" />
                  <img src={asepriteLogo} alt="Aseprite" className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>

          {/* You can add more game projects here following the same pattern */}
        </div>
      </div>

      {/* Overlays */}
      {activeOverlay === 'web1' && <StocksOverlay isOpen={activeOverlay === 'web1'} onClose={closeOverlay} />}
      {activeOverlay === 'game1' && <FriendFarmOverlay isOpen={activeOverlay === 'game1'} onClose={closeOverlay} />}
      {activeOverlay === 'katehowells' && <KateHowellsOverlay isOpen={activeOverlay === 'katehowells'} onClose={closeOverlay} />}
      {activeOverlay === 'benreid' && <BenReidOverlay isOpen={activeOverlay === 'benreid'} onClose={closeOverlay} />}
    </div>
  );
};

export default Portfolio;

