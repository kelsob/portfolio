// WebProject1Overlay.jsx
import { BaseOverlay } from './BaseOverlay';
import reactLogo from '../assets/techicons/react-icon.svg';  // Example import for tech logos
import nodeLogo from '../assets/techicons/nodejs-icon.svg';  // Replace with actual paths
import video1 from '../assets/friendfarm/clips/croppickups.mp4'; // Example video import
import video2 from '../assets/friendfarm/clips/croppickups.mp4'; // Example video import


export function WebProject1Overlay({ isOpen, onClose }) {
  return (
    <BaseOverlay isOpen={isOpen} onClose={onClose}>
      <h2 className="text-4xl font-bold mb-6">Game Project 1 (WIP)</h2>


      {/* Project Description */}
      <p className="text-lg mb-8">
        This is an in-progress game project focused on building a pixel art-based 2D adventure. 
        The goal is to combine beautiful pixel art with dynamic gameplay, providing players with 
        an engaging and immersive experience.
      </p>

      {/* Technologies Used */}
      <h3 className="text-2xl font-semibold mb-4">Technologies Used</h3>
      <div className="flex items-center space-x-6 mb-8">
        <div className="flex flex-col items-center">
          <img src={reactLogo} alt="React" className="w-12 h-12" />
          <span className="text-sm mt-2">React</span>
        </div>
        <div className="flex flex-col items-center">
          <img src={nodeLogo} alt="Node.js" className="w-12 h-12" />
          <span className="text-sm mt-2">Node.js</span>
        </div>
        {/* Add more technologies as needed */}
      </div>


      

      <h3 className="text-2xl font-semibold mb-4">Gameplay Videos</h3>


      <div className="space-y-8">
        {/* Video 1 */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 items-center mb-6">
          <video controls className="w-full sm:w-2/3 rounded-lg shadow-md mb-4 sm:mb-0" src={video1}></video>
          <div className="sm:w-1/3 text-left">
            <span className="text-2xl font-bold block mb-2">1.</span>
            <p className="text-lg">
              This video showcases the basic movement mechanics and interaction with the game environment.
            </p>
          </div>
        </div>

        {/* Video 2 */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 items-center mb-6">
          <video controls className="w-full sm:w-2/3 rounded-lg shadow-md mb-4 sm:mb-0" src={video2}></video>
          <div className="sm:w-1/3 text-left">
            <span className="text-2xl font-bold block mb-2">2.</span>
            <p className="text-lg">
              This clip shows the early-stage combat system, including basic attacks and enemy AI.
            </p>
          </div>
        </div>

        {/* Add more videos as needed */}
      </div>
    </BaseOverlay>
  );
}
