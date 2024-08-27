const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center p-6 bg-gradient-to-b from-white to-gray-200">
      {/* Introduction Section */}
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-2 text-left">&lt;Ben Kelso&gt;</h1>
        <h2 className="text-2xl mb-2 text-left">Web Developer & Designer</h2>
        <p className="text-lg text-left mb-6">
          I am a web developer specializing in creating responsive, user-friendly websites. With a strong foundation in modern web technologies, I focus on delivering high-quality digital experiences that are both accessible and efficient.
        </p>
      </div>

      {/* Technologies Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {/* Example Technology Entry */}
        <div className="flex items-center space-x-4 p-4 bg-white border border-gray-200 rounded-lg shadow-md transition duration-300 hover:shadow-[inset_0_0_0_2px_var(--tw-shadow-color)] hover:shadow-mainColor">
          <img src="src/assets/react-icon.svg" alt="React" className="w-12 h-12" />
          <span>React - A powerful JavaScript library for building user interfaces.</span>
        </div>

        <div className="flex items-center space-x-4 p-4 bg-white border border-gray-200 rounded-lg shadow-md transition duration-300 hover:shadow-[inset_0_0_0_2px_var(--tw-shadow-color)] hover:shadow-mainColor">
          <img src="src/assets/tailwind-icon.svg" alt="Tailwind CSS" className="w-12 h-12" />
          <span>Tailwind CSS - A utility-first CSS framework for rapid UI development.</span>
        </div>

        <div className="flex items-center space-x-4 p-4 bg-white border border-gray-200 rounded-lg shadow-md transition duration-300 hover:shadow-[inset_0_0_0_2px_var(--tw-shadow-color)] hover:shadow-mainColor">
          <img src="src/assets/nodejs-icon.svg" alt="Node.js" className="w-12 h-12" />
          <span>Node.js - JavaScript runtime for building scalable server-side applications.</span>
        </div>

        <div className="flex items-center space-x-4 p-4 bg-white border border-gray-200 rounded-lg shadow-md transition duration-300 hover:shadow-[inset_0_0_0_2px_var(--tw-shadow-color)] hover:shadow-mainColor">
          <img src="src/assets/laravel-icon.svg" alt="PHP Laravel" className="w-12 h-12" />
          <span>PHP Laravel - A robust PHP framework for building modern web applications.</span>
        </div>

        <div className="flex items-center space-x-4 p-4 bg-white border border-gray-200 rounded-lg shadow-md transition duration-300 hover:shadow-[inset_0_0_0_2px_var(--tw-shadow-color)] hover:shadow-mainColor">
          <img src="src/assets/bootstrap-icon.svg" alt="Bootstrap" className="w-12 h-12" />
          <span>Bootstrap - A popular CSS framework for responsive web design.</span>
        </div>

        <div className="flex items-center space-x-4 p-4 bg-white border border-gray-200 rounded-lg shadow-md transition duration-300 hover:shadow-[inset_0_0_0_2px_var(--tw-shadow-color)] hover:shadow-mainColor">
          <img src="src/assets/html-5-icon.svg" alt="HTML, CSS, JavaScript" className="w-12 h-12" />
          <span>HTML, CSS, JavaScript - The foundational technologies for building modern websites.</span>
        </div>

        <div className="flex items-center space-x-4 p-4 bg-white border border-gray-200 rounded-lg shadow-md transition duration-300 hover:shadow-[inset_0_0_0_2px_var(--tw-shadow-color)] hover:shadow-mainColor">
          <img src="src/assets/django-icon.svg" alt="Django" className="w-12 h-12" />
          <span>Django - A high-level Python framework for developing secure and scalable web applications.</span>
        </div>

        <div className="flex items-center space-x-4 p-4 bg-white border border-gray-200 rounded-lg shadow-md transition duration-300 hover:shadow-[inset_0_0_0_2px_var(--tw-shadow-color)] hover:shadow-mainColor">
          <img src="src/assets/typescript-icon.svg" alt="TypeScript" className="w-12 h-12" />
          <span>TypeScript - A typed superset of JavaScript that enhances code quality.</span>
        </div>

        {/* Add more entries as needed */}
      </div>
    </div>
  );
};

export default Home;
