// src/pages/Portfolio.jsx

const Portfolio = () => {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-b from-white to-gray-200">
        <div className="max-w-5xl">
          <h1 className="text-4xl font-bold mb-6 text-center">My Projects</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 rounded-lg">
              <img src="project1.jpg" alt="Project 1" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h2 className="text-2xl font-bold mb-2">Project 1</h2>
              <p className="mb-4">A brief description of the project. What problem does it solve? What technologies were used?</p>
              <a href="#!">View Project</a>
            </div>
            <div className="p-4 rounded-lg">
              <img src="project2.jpg" alt="Project 2" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h2 className="text-2xl font-bold mb-2">Project 2</h2>
              <p className="mb-4">A brief description of the project. What problem does it solve? What technologies were used?</p>
              <a href="#!">View Project</a>
            </div>
            <div className="p-4 rounded-lg">
              <img src="project3.jpg" alt="Project 3" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h2 className="text-2xl font-bold mb-2">Project 3</h2>
              <p className="mb-4">A brief description of the project. What problem does it solve? What technologies were used?</p>
              <a href="#!">View Project</a>
            </div>
            {/* Add more project cards as needed */}
          </div>
        </div>
      </div>
    );
  };
  
  export default Portfolio;
  