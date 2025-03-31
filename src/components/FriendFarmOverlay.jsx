// WebProject1Overlay.jsx
import { BaseOverlay } from './BaseOverlay';
import godotLogo from '../assets/techicons/godot-icon.svg';
import asepriteLogo from '../assets/techicons/aseprite-icon.svg';
import githubLogo from '../assets/techicons/github-icon.svg';
import video1 from '../assets/friendfarm/clips/introduction.mp4';
import video2 from '../assets/friendfarm/clips/croppickups.mp4';
import video3 from '../assets/friendfarm/clips/itempickups.mp4';
import video4 from '../assets/friendfarm/clips/rainrun.mp4';


export function FriendFarmOverlay({ isOpen, onClose }) {
  return (
    <BaseOverlay isOpen={isOpen} onClose={onClose}>
      <div className="flex items-start justify-between w-full">
        <h2 className="text-xl font-bold">Friend Farm</h2>
        {/* Project Description */}
        <p className="text-sm font-bold text-right">
          In-progress video game project built in the Godot engine.
        </p>
      </div>

      <h3 className="text-lg font-semibold mb-4">Gameplay Videos</h3>
      <div className="space-y-4">
        {/* Video 1 */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 items-start mb-6">
          <video controls className="w-full sm:w-2/3 rounded-lg shadow-md mb-4 sm:mb-0" src={video1}></video>
          <div className="caption-card sm:w-1/3 text-left border-2 border-darkColor bg-white rounded p-2">
            <span className="text-lg font-bold block mb-2">1.</span>
            <p className="text-sm">
              The main menu, as well as first lines of dialogue in the introduction. Intended as an homage to early pokémon in art style and tone.
            </p>
          </div>
        </div>
        <div className="flex w-full items-center justify-center align-center">
       <div className="w-3/4 h-0 rounded border border-darkColor dark:bg-gray-600 my-2"></div>
      </div>
        {/* Video 2 */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 items-start mb-6">
          <video controls className="w-full sm:w-2/3 rounded-lg shadow-md mb-4 sm:mb-0" src={video2}></video>
          <div className="caption-card sm:w-1/3 text-left border-2 border-darkColor bg-white rounded p-2">
            <span className="text-lg font-bold block mb-2">2.</span>
            <p className="text-sm">
              Shows a player collecting seeds and crops from a basic farm with a variety of different plants.
            </p>
          </div>
        </div>
        <div className="flex w-full items-center justify-center align-center">
       <div className="w-3/4 h-0 rounded border border-darkColor dark:bg-gray-600 my-2"></div>
      </div>
        {/* Video 3 */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 items-start mb-6">
          <video controls className="w-full sm:w-2/3 rounded-lg shadow-md mb-4 sm:mb-0" src={video3}></video>
          <div className="caption-card sm:w-1/3 text-left border-2 border-darkColor bg-white rounded p-2">
            <span className="text-lg font-bold block mb-2">3.</span>
            <p className="text-sm">
              Shows a player picking up items from different angles, each with unique animations.
            </p>
          </div>
        </div>
        <div className="flex w-full items-center justify-center align-center">
       <div className="caption-card w-3/4 h-0 rounded border border-darkColor dark:bg-gray-600 my-2"></div>
      </div>
        {/* Video 4 */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 items-start mb-6">
          <video controls className="w-full sm:w-2/3 rounded-lg shadow-md mb-4 sm:mb-0" src={video4}></video>
          <div className="caption-card sm:w-1/3 text-left border-2 border-darkColor bg-white rounded p-2">
            <span className="text-lg font-bold block mb-2">4.</span>
            <p className="text-sm">
              This clip shows a player sprinting through heavy rain-fall. It also includes npcs who are moving through the world to escape the rain.
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center align-center">
       <div className="w-3/4 h-0 rounded border border-darkColor dark:bg-gray-600 my-2"></div>
      </div>
      <h3 className="text-lg font-semibold mb-2">Features</h3>

      <ul className="list-disc pl-6 text-left space-y-2 text-sm">
        <li><strong>Nostalgic Pixel Art Style</strong>: Evoking a classic feel with modern design sensibilities.</li>
        <li><strong>Engaging Farming Mechanics</strong>: Easy to pick up, but with deep systems for players seeking mastery.</li>
        <li><strong>Dynamic Weather System</strong>: 16 unique weather states that impact crop growth and world conditions.</li>
        <li><strong>Complex NPC Behavior</strong>: NPCs have daily routines, moving around the world with advanced pathfinding and schedules.</li>
        <li><strong>Rich Variety</strong>: Includes a wide range of items, crops, and characters to interact with.</li>
        <li><strong>Immersive World</strong>: Weather, NPCs, and gameplay elements combine to create a living, breathing environment.</li>
      </ul>



      <div className="flex w-full items-center justify-center align-center">
       <div className="w-3/4 h-0 rounded border border-darkColor dark:bg-gray-600 my-2"></div>
      </div>
      
      {/* Technologies Used */}

      <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
      <div className="flex w-full justify-center items-center space-x-6 mb-2">

        <div className="flex flex-col items-center">
          <img src={godotLogo} alt="Godot" className="w-12 h-12 bg-white dark:bg-white p-2 rounded border-2 border-darkColor shadow-md" />
          <span className="text-sm mt-2">Godot (Game Engine)</span>
        </div>
        <div className="flex flex-col items-center">
          <img src={asepriteLogo} alt="Aseprite" className="w-12 h-12 bg-white dark:bg-white p-2 rounded border-2 border-darkColor shadow-md" />
          <span className="text-sm mt-2">Aseprite (Pixel Art)</span>
        </div>
        <div className="flex flex-col items-center">
          <img src={githubLogo} alt="Github" className="w-12 h-12 bg-white dark:bg-white p-2 rounded border-2 border-darkColor shadow-md" />
          <span className="text-sm mt-2">Github (Version Control)</span>
        </div>
      </div>
    </BaseOverlay>
  );
}
