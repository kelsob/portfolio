import { useState } from 'react';
import { FriendFarmOverlay } from '../components/FriendFarmOverlay';
import { StocksOverlay } from '../components/StocksOverlay';
import stockDetailsImage from '../../src/assets/stocks/StockDetails.png';
import friendFarmTitleScreen from '../../src/assets/friendfarm/images/FriendFarmTitleScreen.png';

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
        <h1 className="text-4xl font-bold mb-4 text-center transition-colors duration-300">Portfolio</h1>

        {/* Web Development Projects */}
        <h2 className="text-2xl font-semibold mb-4 text-left transition-colors duration-300">Web Development</h2>
        <div className="portfolio-card space-y-6 transition-colors duration-300">
          <div 
            className="flex flex-col sm:flex-row items-center rounded-lg shadow-md p-4 transition-colors duration-300 hover:shadow-xl cursor-pointer"
            onClick={() => openOverlay('web1')}  // Open Stocks Project Overlay
          >
            <img src={stockDetailsImage} alt="Simulated Stock Market" className="sm:w-1/3 h-auto max-w-full object-center border-2 border-superLightColor rounded-sm sm:mr-4 mb-4 sm:mb-0 flex-shrink-0 shadow-lg" />
            <div className="flex flex-col justify-center text-left">
              <h3 className="text-md font-bold mb-2 transition-colors duration-300 drop-shadow-lg">Simulated Stock Market</h3>
              <p className="text-xs transition-colors duration-300">This platform allows users to buy and sell fictional stocks in real-time, using virtual currency. Track your portfolio and see how the market evolves!</p>
              <p className="text-xs scale-75 italic text-right transition-colors duration-300">Click for more details.</p>
            </div>
          </div>
        </div>

        {/* Game Development Projects */}
        <h2 className="text-2xl font-semibold mb-4 mt-12 text-left transition-colors duration-300">Game Development</h2>
        <div className="portfolio-card space-y-6 transition-colors duration-300">
          <div 
            className="flex flex-col sm:flex-row items-center rounded-lg shadow-md p-4 transition-colors duration-300 hover:shadow-xl cursor-pointer"
            onClick={() => openOverlay('game1')}  // Open Game Project 1 Overlay
          >
            <img src={friendFarmTitleScreen} alt="Friend Farm" className="sm:w-1/3 h-auto max-w-full object-center border-2 border-superLightColor rounded-sm sm:mr-4 mb-4 sm:mb-0 flex-shrink-0 shadow-lg" />
            <div className="flex flex-col justify-center text-left">
              <h3 className="text-md font-bold mb-2 transition-colors duration-300 drop-shadow-lg">Friend Farm</h3>
              <p className="text-xs transition-colors duration-300">Friend Farm is an in-progress 2D adventure built in the Godot engine, showcasing beautiful pixel art, engaging farming mechanics, dynamic weather systems, and NPCs with complex daily routines and behaviors.</p>
              <p className="text-xs scale-75 italic text-right transition-colors duration-300">Click for more details.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overlays */}
      {activeOverlay === 'web1' && <StocksOverlay isOpen={activeOverlay === 'web1'} onClose={closeOverlay} />}
      {activeOverlay === 'game1' && <FriendFarmOverlay isOpen={activeOverlay === 'game1'} onClose={closeOverlay} />}
    </div>
  );
};

export default Portfolio;

