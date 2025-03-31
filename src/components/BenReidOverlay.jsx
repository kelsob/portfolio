import { BaseOverlay } from './BaseOverlay';
import wixLogo from '../assets/techicons/wix-icon.png';
import benReidImage1 from '../assets/benreid/portfolio-ben-reid-1.webp';
import benReidImage2 from '../assets/benreid/portfolio-ben-reid-2.webp';

export function BenReidOverlay({ isOpen, onClose }) {
  return (
    <BaseOverlay isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl font-bold">Ben Reid Consulting</h2>

      {/* Project Description */}
      <p className="text-sm text-left font-bold">
        A modern redesign and functionality upgrade of an existing Wix platform for social consultant Ben Reid:
      </p>
      <div className="flex w-full items-center justify-center align-center">
        <div className="w-3/4 h-0 rounded border border-darkColor dark:bg-gray-600 my-2"></div>
      </div>
      <ul className="list-disc pl-6 text-left space-y-2 text-sm">
        <li><strong>Platform Modernization</strong>: Complete overhaul of an existing Wix site with modern design principles and enhanced functionality</li>
        <li><strong>Advanced Theme Customization</strong>: Custom theme development utilizing Wix&apos;s advanced styling capabilities</li>
        <li><strong>Responsive Design</strong>: Fully responsive layout optimized for all device sizes</li>
        <li><strong>Performance Optimization</strong>: Enhanced site speed and performance through Wix platform optimizations</li>
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
              src={wixLogo}
              alt="Wix"
              className="w-12 h-12 bg-white dark:bg-gray-700 p-2 rounded border-2 border-darkColor shadow-md"
            />
            <span className="text-xs sm:text-sm mt-2 text-gray-900 dark:text-gray-100">Wix Platform</span>
          </div>
        </div>
      </div>

      {/* Project Screenshots */}
      <div className="flex w-full items-center justify-center align-center mt-8">
        <div className="w-3/4 h-0 rounded border border-darkColor dark:bg-gray-600 my-2"></div>
      </div>
      <h3 className="text-lg font-semibold mb-6">Screenshots</h3>
      <div className="space-y-8">
        {/* First Screenshot */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 items-start">
          <img 
            src={benReidImage1} 
            alt="Ben Reid Homepage" 
            className="w-full sm:w-2/3 rounded-lg shadow-md mb-4 sm:mb-0 border-2 border-darkColor" 
          />
          <div className="caption-card sm:w-1/3 text-left border-2 border-darkColor bg-white rounded p-2">
            <span className="text-lg font-bold block mb-2">1.</span>
            <p className="text-sm">
              The redesigned homepage showcasing a modern, professional aesthetic with improved navigation and content presentation.
            </p>
          </div>
        </div>

        {/* Second Screenshot */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 items-start">
          <img 
            src={benReidImage2} 
            alt="Ben Reid Services Page" 
            className="w-full sm:w-2/3 rounded-lg shadow-md mb-4 sm:mb-0 border-2 border-darkColor" 
          />
          <div className="caption-card sm:w-1/3 text-left border-2 border-darkColor bg-white rounded p-2">
            <span className="text-lg font-bold block mb-2">2.</span>
            <p className="text-sm">
              The services section features an intuitive layout with clear service offerings and engaging visual elements.
            </p>
          </div>
        </div>
      </div>
    </BaseOverlay>
  );
} 