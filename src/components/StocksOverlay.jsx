import { BaseOverlay } from './BaseOverlay';
import phpLogo from '../assets/techicons/php-icon.svg';
import laravelLogo from '../assets/techicons/laravel-icon.svg';
import livewireLogo from '../assets/techicons/livewire-icon.svg';
import tailwindLogo from '../assets/techicons/tailwind-icon.svg';
import image1 from '../assets/stocks/StocksDashboard.png';
import image2 from '../assets/stocks/StocksList.png';
import image3 from '../assets/stocks/StockDetails.png';
import image4 from '../assets/stocks/StockPortfolio.png';

export function StocksOverlay({ isOpen, onClose }) {
  return (
    <BaseOverlay isOpen={isOpen} onClose={onClose}>


      <div className="flex items-start justify-between w-full">
        <h2 className="text-xl font-bold">Stockz</h2>
        {/* Project Description */}
        <p className="text-sm font-bold text-right">
          A simulated stock market platform allowing users to trade fictional stocks in real-time:
        </p>
      </div>


      {/* Project Images */}
      <h3 className="text-lg font-semibold mb-4">Screenshots</h3>
      <div className="space-y-4">
        {/* Image 1 */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 items-start mb-6">
          <img src={image1} alt="Screenshot 1" className="w-full sm:w-2/3 rounded-lg shadow-md mb-4 sm:mb-0 border-2 border-darkColor" />
          <div className="caption-card sm:w-1/3 text-left border-2 border-darkColor bg-white rounded p-2">
            <span className="text-lg font-bold block mb-2">1.</span>
            <p className="text-sm">
              Screenshot of the dashboard showing real-time stock fluctuations and user portfolio overview.
            </p>
          </div>
        </div>

        <div className="flex w-full items-center justify-center align-center">
       <div className="w-3/4 h-0 rounded border border-darkColor dark:bg-gray-600 my-2"></div>
      </div>

        {/* Image 2 */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 items-start mb-6">
          <img src={image2} alt="Screenshot 2" className="w-full sm:w-2/3 rounded-lg shadow-md mb-4 sm:mb-0 border-2 border-darkColor" />
          <div className="caption-card sm:w-1/3 text-left border-2 border-darkColor bg-white rounded p-2">
            <span className="text-lg font-bold block mb-2">2.</span>
            <p className="text-sm">
              Shows the stock purchase interface where users can buy or sell stocks based on market trends.
            </p>
          </div>
        </div>


        <div className="flex w-full items-center justify-center align-center">
       <div className="w-3/4 h-0 rounded border border-darkColor dark:bg-gray-600 my-2"></div>
      </div>

        {/* Image 3 */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 items-start mb-6">
          <img src={image3} alt="Screenshot 3" className="w-full sm:w-2/3 rounded-lg shadow-md mb-4 sm:mb-0 border-2 border-darkColor" />
          <div className="caption-card sm:w-1/3 text-left border-2 border-darkColor bg-white rounded p-2">
            <span className="text-lg font-bold block mb-2">3.</span>
            <p className="text-sm">
              This shows the detailed stock performance page with historical data and stock trends over time.
            </p>
          </div>
        </div>


        <div className="flex w-full items-center justify-center align-center">
       <div className="w-3/4 h-0 rounded border border-darkColor dark:bg-gray-600 my-2"></div>
      </div>

        {/* Image 4 */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 items-start mb-6">
          <img src={image4} alt="Screenshot 4" className="w-full sm:w-2/3 rounded-lg shadow-md mb-4 sm:mb-0 border-2 border-darkColor" />
          <div className="caption-card sm:w-1/3 text-left border-2 border-darkColor bg-white rounded p-2">
            <span className="text-lg font-bold block mb-2">4.</span>
            <p className="text-sm">
              Admin panel for managing stock information, user accounts, and overall platform settings.
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-center align-center">
       <div className="w-3/4 h-0 rounded border border-darkColor dark:bg-gray-600 my-2"></div>
      </div>
      <h3 className="text-lg font-semibold mb-2">Features</h3>

      <ul className="list-disc pl-6 text-left space-y-2 text-sm">
        <li><strong>Real-time Stock Fluctuations</strong>: Fictional stocks fluctuate in real-time, creating a dynamic market environment.</li>
        <li><strong>Portfolio Management</strong>: Users can buy, sell, and monitor their portfolios as the market evolves.</li>
        <li><strong>User Authentication</strong>: Users can register and securely log in to manage their accounts and portfolios.</li>
        <li><strong>Responsive Design</strong>: Optimized for both desktop and mobile devices with Tailwind CSS.</li>
      </ul>

      <div className="flex w-full items-center justify-center align-center">
        <div className="w-3/4 h-0 rounded border border-darkColor dark:bg-gray-600 my-2"></div>
      </div>

      {/* Technologies Used */}

      <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
      <div className="flex w-full justify-center items-center space-x-6 mb-2">
      {/* PHP Logo */}
        <div className="flex flex-col items-center justify-center flex-shrink-0">
          <img
            src={phpLogo}
            alt="PHP"
            className="w-12 h-12 sm:w-12 sm:h-12 bg-white dark:bg-gray-700 p-2 rounded border-2 border-darkColor shadow-md"
          />
          <span className="text-xs sm:text-sm mt-2 text-gray-900 dark:text-gray-100">PHP</span>
        </div>

      {/* Laravel Logo */}
        <div className="flex flex-col items-center justify-center flex-shrink-0">
          <img
            src={laravelLogo}
            alt="Laravel"
            className="w-12 h-12 sm:w-12 sm:h-12 bg-white dark:bg-gray-700 p-2 rounded border-2 border-darkColor shadow-md"
          />
          <span className="text-xs sm:text-sm mt-2 text-gray-900 dark:text-gray-100">Laravel</span>
        </div>

      {/* Livewire Logo */}
        <div className="flex flex-col items-center justify-center flex-shrink-0">
          <img
            src={livewireLogo}
            alt="Livewire"
            className="w-12 h-12 sm:w-12 sm:h-12 bg-white dark:bg-gray-700 p-2 rounded border-2 border-darkColor shadow-md"
          />
          <span className="text-xs sm:text-sm mt-2 text-gray-900 dark:text-gray-100">Livewire</span>
        </div>

      {/* Tailwind CSS Logo */}
        <div className="flex flex-col items-center justify-center flex-shrink-0">
          <img
            src={tailwindLogo}
            alt="Tailwind"
            className="w-12 h-12 sm:w-12 sm:h-12 bg-white dark:bg-gray-700 p-2 rounded border-2 border-darkColor shadow-md"
          />
          <span className="text-xs sm:text-sm mt-2 text-gray-900 dark:text-gray-100">Tailwind CSS</span>
        </div>
      </div>
    </BaseOverlay>
  );
}
