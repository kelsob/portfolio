const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center p-6">
      <div className="w-full max-w-4xl mx-auto">
        {/* Portfolio Header */}
        <h1 className="text-4xl font-bold mb-4 text-center">Portfolio</h1>
        
        {/* Section Divider */}
        <h2 className="text-2xl font-semibold mb-4 text-left">Web Development</h2>
        
        {/* Web Development Projects */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-md p-4 transition-transform duration-300 hover:shadow-lg">
            <img src="path_to_web_project1_image.jpg" alt="Web Project 1" className="w-full sm:w-1/3 h-40 object-cover rounded-lg sm:mr-4 mb-4 sm:mb-0" />
            <div className="flex flex-col justify-center text-left">
              <h3 className="text-2xl font-bold mb-2">Web Project 1</h3>
              <p className="text-lg">Description of the web project. Highlight the problem it solves, technologies used, and key features.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-md p-4 transition-transform duration-300 hover:shadow-lg">
            <img src="path_to_web_project2_image.jpg" alt="Web Project 2" className="w-full sm:w-1/3 h-40 object-cover rounded-lg sm:mr-4 mb-4 sm:mb-0" />
            <div className="flex flex-col justify-center text-left">
              <h3 className="text-2xl font-bold mb-2">Web Project 2</h3>
              <p className="text-lg">Description of the web project. Highlight the problem it solves, technologies used, and key features.</p>
            </div>
          </div>

          {/* Add more web development project cards as needed */}
        </div>

        {/* Section Divider */}
        <h2 className="text-2xl font-semibold mb-4 mt-12 text-left">Game Development</h2>
        
        {/* Game Development Projects */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-md p-4 transition-transform duration-300 hover:shadow-lg">
            <img src="path_to_game_project1_image.jpg" alt="Game Project 1" className="w-full sm:w-1/3 h-40 object-cover rounded-lg sm:mr-4 mb-4 sm:mb-0" />
            <div className="flex flex-col justify-center text-left">
              <h3 className="text-2xl font-bold mb-2">Game Project 1</h3>
              <p className="text-lg">Description of the game project. Explain the gameplay, design choices, and technologies used.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-md p-4 transition-transform duration-300 hover:shadow-lg">
            <img src="path_to_game_project2_image.jpg" alt="Game Project 2" className="w-full sm:w-1/3 h-40 object-cover rounded-lg sm:mr-4 mb-4 sm:mb-0" />
            <div className="flex flex-col justify-center text-left">
              <h3 className="text-2xl font-bold mb-2">Game Project 2</h3>
              <p className="text-lg">Description of the game project. Explain the gameplay, design choices, and technologies used.</p>
            </div>
          </div>

          {/* Add more game development project cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
