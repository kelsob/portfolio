// BaseOverlay.jsx

import { useEffect } from 'react';

export function BaseOverlay({ isOpen, onClose, children }) {
  // Disable background scrolling when overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup function to reset overflow when overlay is closed
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start space-x-4 justify-center p-4 pt-20  transition-opacity duration-300 ease-out">
          {/* Overlay Background */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
            onClick={onClose}
          ></div>


          {/* Overlay Container */}
          <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg max-h-[85vh] sm:max-h-[90vh] w-full max-w-4xl overflow-y-auto p-6 transform transition-transform duration-300 scale-95 opacity-0 fade-in-out-animation">

            {/* Overlay Content */}
            <div className="flex flex-col items-start">
              {children}
            </div>
          </div>
          <div className="pt-2">
            <button
              className="relative text-2xl text-white dark:text-white border-2 px-1 border-white rounded-lg transition-colors duration-300 hover:text-red-500 hover:border-red-500 hover:font-black dark:hover:text-red-400 hover:scale-110"
              onClick={onClose}
              aria-label="Close"
            >
              &#10005;
            </button>
          </div>


        </div>
      )}
    </>
  );
}
