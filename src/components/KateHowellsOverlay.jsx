import { BaseOverlay } from './BaseOverlay';
import laravelLogo from '../assets/techicons/laravel-icon.svg';
import tailwindLogo from '../assets/techicons/tailwind-icon.svg';
import alpineLogo from '../assets/techicons/alpinejs-icon.png';
import livewireLogo from '../assets/techicons/livewire-icon.svg';
import kateHowellsLandscape from '../assets/katehowells/portfolio-kate-howells-1.webp';
import kateHowellsMobile1 from '../assets/katehowells/portfolio-kate-howells-mobile-1.webp';
import kateHowellsMobile2 from '../assets/katehowells/portfolio-kate-howells-mobile-2.webp';

export function KateHowellsOverlay({ isOpen, onClose }) {
  return (
    <BaseOverlay isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl font-bold">Kate Howells Portfolio</h2>

      {/* Live Website Link */}
      <a 
        href="https://www.kateonearth.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300 mt-1 mb-4 inline-block"
      >
        See this website live at www.kateonearth.com →
      </a>

      {/* Project Description */}
      <p className="text-sm text-left font-bold">
        A modern portfolio and booking website for space communicator and consultant Kate Howells:
      </p>
      <div className="flex w-full items-center justify-center align-center">
        <div className="w-3/4 h-0 rounded border border-darkColor dark:bg-gray-600 my-2"></div>
      </div>
      <ul className="list-disc pl-6 text-left space-y-2 text-sm">
        <li><strong>Retro-Futuristic Design</strong>: Clean, minimalist interface with space-inspired aesthetics, featuring a carefully curated color palette that evokes both nostalgia and futurism</li>
        <li><strong>TALL stack Implementation</strong>: Leveraging Laravel, Alpine.js, Livewire, and Tailwind CSS for a responsive, interactive experience</li>
        <li><strong>Performance Optimized</strong>: Achieved 95+ PageSpeed scores through image optimization, lazy loading, and Vercel edge caching</li>
        <li><strong>SEO Enhanced</strong>: Structured data implementation, optimized meta descriptions, and semantic HTML for improved search visibility</li>
      </ul>

      {/* Technologies Used */}
      <div className="flex w-full items-center justify-center align-center">
        <div className="w-3/4 h-0 rounded border border-darkColor dark:bg-gray-600 my-2"></div>
      </div>
      <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>
      <div className="flex justify-center w-full">
        <div className="flex flex-wrap justify-center items-end gap-6">
          <div className="flex flex-col items-center justify-center">
            <img
              src={laravelLogo}
              alt="Laravel"
              className="w-12 h-12 bg-white dark:bg-gray-700 p-2 rounded border-2 border-darkColor shadow-md"
            />
            <span className="text-xs sm:text-sm mt-2 text-gray-900 dark:text-gray-100">Laravel</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src={alpineLogo}
              alt="Alpine.js"
              className="w-12 h-12 bg-white dark:bg-gray-700 p-2 rounded border-2 border-darkColor shadow-md"
            />
            <span className="text-xs sm:text-sm mt-2 text-gray-900 dark:text-gray-100">Alpine.js</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src={livewireLogo}
              alt="Livewire"
              className="w-12 h-12 bg-white dark:bg-gray-700 p-2 rounded border-2 border-darkColor shadow-md"
            />
            <span className="text-xs sm:text-sm mt-2 text-gray-900 dark:text-gray-100">Livewire</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src={tailwindLogo}
              alt="Tailwind CSS"
              className="w-12 h-12 bg-white dark:bg-gray-700 p-2 rounded border-2 border-darkColor shadow-md"
            />
            <span className="text-xs sm:text-sm mt-2 text-gray-900 dark:text-gray-100">Tailwind CSS</span>
          </div>
        </div>
      </div>

      {/* Project Screenshots */}
      <div className="flex w-full items-center justify-center align-center mt-8">
        <div className="w-3/4 h-0 rounded border border-darkColor dark:bg-gray-600 my-2"></div>
      </div>
      <h3 className="text-lg font-semibold mb-6">Screenshots</h3>
      <div className="space-y-8">
        {/* Landscape Screenshot */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 items-start">
          <img 
            src={kateHowellsLandscape} 
            alt="Kate Howells Desktop View" 
            className="w-full sm:w-2/3 rounded-lg shadow-md mb-4 sm:mb-0 border-2 border-darkColor" 
          />
          <div className="caption-card sm:w-1/3 text-left border-2 border-darkColor bg-white rounded p-2">
            <span className="text-lg font-bold block mb-2">1.</span>
            <p className="text-sm">
              The main landing page, featuring a clean, retro-futuristic design.
            </p>
          </div>
        </div>

        {/* Mobile Screenshots */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 items-start">
          <div className="flex space-x-4 w-full sm:w-2/3 mb-4 sm:mb-0">
            <img 
              src={kateHowellsMobile1} 
              alt="Kate Howells Mobile View 1" 
              className="w-[48%] rounded-lg shadow-md border-2 border-darkColor" 
            />
            <img 
              src={kateHowellsMobile2} 
              alt="Kate Howells Mobile View 2" 
              className="w-[48%] rounded-lg shadow-md border-2 border-darkColor" 
            />
          </div>
          <div className="caption-card sm:w-1/3 text-left border-2 border-darkColor bg-white rounded p-2">
            <span className="text-lg font-bold block mb-2">2.</span>
            <p className="text-sm">
              The mobile experience maintains the sleek aesthetic while optimizing the booking interface and navigation for smaller screens.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Link */}
      <div className="flex w-full items-center justify-center align-center mt-8">
        <div className="w-3/4 h-0 rounded border border-darkColor dark:bg-gray-600 my-2"></div>
      </div>
      <a 
        href="https://www.kateonearth.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300 mt-4 block"
      >
        Visit Kate Howells&apos; Website →
      </a>
    </BaseOverlay>
  );
} 