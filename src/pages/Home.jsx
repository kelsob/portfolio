const Home = () => {
  return (
    <div className="min-h-auto flex flex-col space-y-2 justify-center p-6">
      {/* Introduction Section */}
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-2 text-left transition-all duration-500 ease-in-out">
          &lt;Ben Kelso&gt;
        </h1>
        <h2 className="text-2xl mb-2 text-left transition-all duration-500 ease-in-out">
          Web Developer & Designer
        </h2>
        <p className="text-lg text-left transition-all duration-500 ease-in-out">
          I am a web developer specializing in creating responsive, user-friendly websites. With a strong foundation in modern web technologies, I focus on delivering high-quality digital experiences that are both accessible and efficient.
        </p>
      </div>

      {/* Technologies Section */}
      <h3>Experienced with:</h3>
      <div className="technology-section">
        <div className="technology-card">
          <img src="src/assets/techicons/react-icon.svg" alt="React" />
          <span>React - A powerful JavaScript library for building user interfaces.</span>
        </div>

        <div className="technology-card">
          <img src="src/assets/techicons/tailwind-icon.svg" alt="Tailwind CSS" />
          <span>Tailwind CSS - A utility-first CSS framework for rapid UI development.</span>
        </div>

        <div className="technology-card">
          <img src="src/assets/techicons/nodejs-icon.svg" alt="Node.js" />
          <span>Node.js - JavaScript runtime for building scalable server-side applications.</span>
        </div>

        <div className="technology-card">
          <img src="src/assets/techicons/laravel-icon.svg" alt="PHP Laravel" />
          <span>PHP Laravel - A robust PHP framework for building modern web applications.</span>
        </div>

        <div className="technology-card">
          <img src="src/assets/techicons/bootstrap-icon.svg" alt="Bootstrap" />
          <span>Bootstrap - A popular CSS framework for responsive web design.</span>
        </div>

        <div className="technology-card">
          <img src="src/assets/techicons/html-5-icon.svg" alt="HTML, CSS, JavaScript" />
          <span>HTML, CSS, JavaScript - The foundational technologies for building modern websites.</span>
        </div>

        <div className="technology-card">
          <img src="src/assets/techicons/django-icon.svg" alt="Django" />
          <span>Django - A high-level Python framework for developing secure and scalable web applications.</span>
        </div>

        <div className="technology-card">
          <img src="src/assets/techicons/typescript-icon.svg" alt="TypeScript" />
          <span>TypeScript - A typed superset of JavaScript that enhances code quality.</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
