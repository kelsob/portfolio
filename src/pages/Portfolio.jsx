const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col space-y-2 justify-center p-6">
      <div className="w-full max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center transition-all duration-500 ease-in-out">
          My Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out">
          <div className="project-card">
            <img src="project1.jpg" alt="Project 1" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-bold mb-2 transition-all duration-500 ease-in-out">Project 1</h2>
            <p className="text-lg mb-4 transition-all duration-500 ease-in-out">
              A brief description of the project. What problem does it solve? What technologies were used?
            </p>
            <a href="#!" className="text-blue-500 hover:text-blue-700 transition-all duration-300">View Project</a>
          </div>
          <div className="project-card">
            <img src="project2.jpg" alt="Project 2" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-bold mb-2 transition-all duration-500 ease-in-out">Project 2</h2>
            <p className="text-lg mb-4 transition-all duration-500 ease-in-out">
              A brief description of the project. What problem does it solve? What technologies were used?
            </p>
            <a href="#!" className="text-blue-500 hover:text-blue-700 transition-all duration-300">View Project</a>
          </div>
          <div className="project-card">
            <img src="project3.jpg" alt="Project 3" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-bold mb-2 transition-all duration-500 ease-in-out">Project 3</h2>
            <p className="text-lg mb-4 transition-all duration-500 ease-in-out">
              A brief description of the project. What problem does it solve? What technologies were used?
            </p>
            <a href="#!" className="text-blue-500 hover:text-blue-700 transition-all duration-300">View Project</a>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
