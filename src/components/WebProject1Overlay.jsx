// WebProject1Overlay.jsx
import { BaseOverlay } from './BaseOverlay';
import godotLogo from '../assets/techicons/godot-icon.svg';
import video1 from '../assets/friendfarm/clips/introduction.mp4';
import video2 from '../assets/friendfarm/clips/croppickups.mp4';
import video3 from '../assets/friendfarm/clips/itempickups.mp4';
import video4 from '../assets/friendfarm/clips/rainrun.mp4';


export function WebProject1Overlay({ isOpen, onClose }) {
  return (
    <BaseOverlay isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl font-bold mb-6">Game Project 1 (WIP)</h2>


      {/* Project Description */}
      <p className="text-sm text-left mb-8">
        This is an in-progress game project focused on building a pixel art-based 2D adventure. 
        The goal is to combine beautiful pixel art with dynamic gameplay, providing players with 
        an engaging and immersive experience.
      </p>

      {/* Technologies Used */}
      <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>
      <div className="flex items-center space-x-6 mb-8">
        <div className="flex flex-col items-center">
          <img src={godotLogo} alt="Godot" className="w-12 h-12" />
          <span className="text-sm mt-2">Godot</span>
        </div>

      </div>
      <h3 className="text-lg font-semibold mb-4">Gameplay Videos</h3>
      <div className="space-y-8">
        {/* Video 1 */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 items-start mb-6">
          <video controls className="w-full sm:w-2/3 rounded-lg shadow-md mb-4 sm:mb-0" src={video1}></video>
          <div className="sm:w-1/3 text-left">
            <span className="text-lg font-bold block mb-2">1.</span>
            <p className="text-sm">
              This video showcases the basic movement mechanics and interaction with the game environment.
            </p>
          </div>
        </div>

        {/* Video 2 */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 items-start mb-6">
          <video controls className="w-full sm:w-2/3 rounded-lg shadow-md mb-4 sm:mb-0" src={video2}></video>
          <div className="sm:w-1/3 text-left">
            <span className="text-lg font-bold block mb-2">2.</span>
            <p className="text-sm">
              This clip shows the early-stage combat system, including basic attacks and enemy AI.
            </p>
          </div>
        </div>

        {/* Video 3 */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 items-start mb-6">
          <video controls className="w-full sm:w-2/3 rounded-lg shadow-md mb-4 sm:mb-0" src={video3}></video>
          <div className="sm:w-1/3 text-left">
            <span className="text-lg font-bold block mb-2">3.</span>
            <p className="text-sm">
              This clip shows the early-stage combat system, including basic attacks and enemy AI.
            </p>
          </div>
        </div>

        {/* Video 4 */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 items-start mb-6">
          <video controls className="w-full sm:w-2/3 rounded-lg shadow-md mb-4 sm:mb-0" src={video4}></video>
          <div className="sm:w-1/3 text-left">
            <span className="text-lg font-bold block mb-2">4.</span>
            <p className="text-sm">
              This clip shows the early-stage combat system, including basic attacks and enemy AI.
            </p>
          </div>
        </div>

      </div>
    </BaseOverlay>
  );
}
