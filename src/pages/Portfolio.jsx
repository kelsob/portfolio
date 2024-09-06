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
        <div className="space-y-6">
          <div 
            className="flex flex-col sm:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-md p-4 transition-transform duration-300 hover:shadow-lg cursor-pointer"
            onClick={() => openOverlay('web1')}  // Open Web Project 1 Overlay
          >
            <img src="path_to_web_project1_image.jpg" alt="Web Project 1" className="w-full sm:w-1/3 h-40 object-cover rounded-lg sm:mr-4 mb-4 sm:mb-0" />
            <div className="flex flex-col justify-center text-left">
              <h3 className="text-2xl font-bold mb-2">Web Project 1</h3>
              <p className="text-lg">Description of Web Project 1.</p>
            </div>
          </div>

          <div 
            className="flex flex-col sm:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-md p-4 transition-transform duration-300 hover:shadow-lg cursor-pointer"
            onClick={() => openOverlay('web1')}  // Open Web Project 2 Overlay
          >
            <img src="path_to_web_project2_image.jpg" alt="Web Project 2" className="w-full sm:w-1/3 h-40 object-cover rounded-lg sm:mr-4 mb-4 sm:mb-0" />
            <div className="flex flex-col justify-center text-left">
              <h3 className="text-2xl font-bold mb-2">Web Project 2</h3>
              <p className="text-lg">Description of Web Project 2.</p>
            </div>
          </div>
        </div>

        {/* Game Development Projects */}
        <h2 className="text-2xl font-semibold mb-4 mt-12 text-left">Game Development</h2>
        <div className="space-y-6">
          <div 
            className="flex flex-col sm:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-md p-4 transition-transform duration-300 hover:shadow-lg cursor-pointer"
            onClick={() => openOverlay('web1')}  // Open Game Project 1 Overlay
          >
            <img src="../src/assets/friendfarm/images/FriendFarmTitleScreen.png" alt="Friend Farm" className="w-full sm:w-1/3 h-40 object-cover rounded-lg sm:mr-4 mb-4 sm:mb-0 flex-shrink-0" />
            <div className="flex flex-col justify-center text-left">
              <h3 className="text-2xl font-bold mb-2">Friend Farm</h3>
              <p className="text-lg">  Friend Farm is an in-progress pixel art-based 2D adventure built in the Godot engine. It features engaging farming mechanics, dynamic weather systems, and NPCs with complex behavior and daily routines, and features beautiful pixel art.</p>
            </div>
          </div>

          <div 
            className="flex flex-col sm:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-md p-4 transition-transform duration-300 hover:shadow-lg cursor-pointer"
            onClick={() => openOverlay('web1')}  // Open Game Project 2 Overlay
          >
            <img src="path_to_game_project2_image.jpg" alt="Game Project 2" className="w-full sm:w-1/3 h-40 object-cover rounded-lg sm:mr-4 mb-4 sm:mb-0" />
            <div className="flex flex-col justify-center text-left">
              <h3 className="text-2xl font-bold mb-2">Game Project 2</h3>
              <p className="text-lg">Description of Game Project 2.</p>
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
