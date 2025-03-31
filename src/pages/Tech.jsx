import React from 'react';
import reactIcon from '../../src/assets/techicons/react-icon.svg';
import tailwindIcon from '../../src/assets/techicons/tailwind-icon.svg';
import nodejsIcon from '../../src/assets/techicons/nodejs-icon.svg';
import laravelIcon from '../../src/assets/techicons/laravel-icon.svg';
import bootstrapIcon from '../../src/assets/techicons/bootstrap-icon.svg';
import htmlIcon from '../../src/assets/techicons/html-5-icon.svg';
import djangoIcon from '../../src/assets/techicons/django-icon.svg';
import typescriptIcon from '../../src/assets/techicons/typescript-icon.svg';

const Home = () => {
  return (
    <div className="min-h-auto flex flex-col space-y-2 justify-center p-6 z-10 pt-8">
      {/* Introduction Section */}
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-5xl mb-4 font-bold text-left transition-all duration-500 ease-in-out">
          &lt;Ben Kelso&gt;
        </h1>
        <h2 className="text-2xl mb-4 text-left transition-all duration-500 ease-in-out">
          Full Stack Developer & SEO Strategist
        </h2>
        <p className="text-lg text-left transition-all duration-500 ease-in-out mb-6">
          I&apos;m a full stack developer with a passion for crafting exceptional front-end experiences and implementing effective SEO strategies. As a co-creator of <a href="https://www.pixelburstdigital.com" target="_blank" rel="noopener noreferrer" className="text-blue-200 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300">Pixel Burst Digital</a>, I specialize in creating performant, accessible websites that not only look great but also drive real business results through strategic search engine optimization and user-centric design.
        </p>
      </div>

      <div className="flex w-full items-center justify-center">
        <div className="w-3/4 h-0 rounded bg-lightColor border border-superLightColor dark:bg-gray-600 my-2"></div>
      </div>

      {/* Technologies Section */}
      <h3 className="pb-2">Experienced with:</h3>
      <div className="technology-section">
        <div className="technology-card">
          <img src={reactIcon} alt="React" />
          <span>React - A powerful JavaScript library for building user interfaces.</span>
        </div>

        <div className="technology-card">
          <img src={tailwindIcon} alt="Tailwind CSS" />
          <span>Tailwind CSS - A utility-first CSS framework for rapid UI development.</span>
        </div>

        <div className="technology-card">
          <img src={nodejsIcon} alt="Node.js" />
          <span>Node.js - JavaScript runtime for building scalable server-side applications.</span>
        </div>

        <div className="technology-card">
          <img src={laravelIcon} alt="PHP Laravel" />
          <span>PHP Laravel - A robust PHP framework for building modern web applications.</span>
        </div>

        <div className="technology-card">
          <img src={bootstrapIcon} alt="Bootstrap" />
          <span>Bootstrap - A popular CSS framework for responsive web design.</span>
        </div>

        <div className="technology-card">
          <img src={htmlIcon} alt="HTML, CSS, JavaScript" />
          <span>HTML, CSS, JavaScript - The foundational technologies for building modern websites.</span>
        </div>

        <div className="technology-card">
          <img src={djangoIcon} alt="Django" />
          <span>Django - A high-level Python framework for developing secure and scalable web applications.</span>
        </div>

        <div className="technology-card">
          <img src={typescriptIcon} alt="TypeScript" />
          <span>TypeScript - A typed superset of JavaScript that enhances code quality.</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
