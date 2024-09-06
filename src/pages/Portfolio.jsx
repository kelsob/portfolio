import { useState } from 'react';
import { WebProject1Overlay } from '../components/WebProject1Overlay';

const Portfolio = () => {
  const [activeOverlay, setActiveOverlay] = useState(null);  // Track which overlay is open

  const openOverlay = (project) => {
    setActiveOverlay(project);
  };

  const closeOverlay = () => {
    setActiveOverlay(null);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center p-6">
      <div className="w-full max-w-4xl mx-auto">
        {/* Portfolio Header */}
        <h1 className="text-4xl font-bold mb-4 text-center">Portfolio</h1>

        {/* Web Development Projects */}
        <h2 className="text-2xl font-semibold mb-4 text-left">Web Development</h2>


        {/* Game Development Projects */}
        <h2 className="text-2xl font-semibold mb-4 mt-12 text-left">Game Development</h2>
        <div className="space-y-6">
          <div 
            className="group flex flex-col sm:flex-row items-center bg-gray-100 dark:bg-gray-800 dark:hover:border-superLightColor dark:border-lightColor hover:bg-gray-200 border-2 hover:border-darkColor border-superLightColor rounded-lg shadow-md p-4 transition-colors duration-300 hover:shadow-xl cursor-pointer"
            onClick={() => openOverlay('web1')}  // Open Game Project 1 Overlay
          >
            <img src="../src/assets/friendfarm/images/FriendFarmTitleScreen.png" alt="Friend Farm" className=" sm:w-1/3 h-auto max-w-full object-center border-2 border-superLightColor rounded-sm sm:mr-4 mb-4 sm:mb-0 flex-shrink-0 shadow-lg" />
            <div className="flex flex-col justify-center text-left">
              <h3 className="text-md font-bold mb-2 dark:text-superLightColor group-hover:text-darkColor dark:group-hover:text-white transition-colors drop-shadow-lg">Friend Farm</h3>
              <p className="text-xs dark:text-superLightColor group-hover:text-darkColor dark:group-hover:text-white transition-colors">  Friend Farm is an in-progress 2D adventure built in the Godot engine, showcasing beautiful pixel art, engaging farming mechanics, dynamic weather systems, and NPCs with complex daily routines and behaviors.</p>
              <p className="text-xs dark:text-superLightColor scale-75 italic text-right group-hover:text-darkColor dark:group-hover:text-white transition-colors">  Click for more details.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {activeOverlay === 'web1' && <WebProject1Overlay isOpen={activeOverlay === 'web1'} onClose={closeOverlay} />}
      {activeOverlay === 'web1' && <WebProject1Overlay isOpen={activeOverlay === 'web2'} onClose={closeOverlay} />}
      {activeOverlay === 'web1' && <WebProject1Overlay isOpen={activeOverlay === 'game1'} onClose={closeOverlay} />}
      {activeOverlay === 'web1' && <WebProject1Overlay isOpen={activeOverlay === 'game2'} onClose={closeOverlay} />}
    </div>
  );
};

export default Portfolio;
