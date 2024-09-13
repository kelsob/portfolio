import Sidebar from '../layouts/Sidebar';
import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';
import { MainBackgroundParticles } from '../components/particles/MainBackgroundParticles';

const MainContent = () => {
  return (
    <div className="flex min-h-screen pt-0 relative">
      {/* Left Navigation Area */}
      <div className=" w-40">
        <Sidebar />
      </div>
      
      {/* Right Content Area */}
      <div className="w-full bg-white dark:bg-gray-700 transition-colors duration-300 mt-12 relative">
        
        {/* Particles Background */}
        <div className="absolute inset-0 z-0">
          <MainBackgroundParticles />
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          <div className="flex flex-col text-center w-full space-y-auto">
            <section id="home" className="pt-16 -mt-16">
              <Home />
            </section>
            <div className="flex w-full items-center justify-center">
              <div className="w-3/4 h-0 rounded bg-lightColor border border-superLightColor dark:bg-gray-600 my-2"></div>
            </div>
            <section id="portfolio">
              <Portfolio />
            </section>
            <div className="flex w-full items-center justify-center">
              <div className="w-3/4 h-0 rounded bg-lightColor border border-superLightColor dark:bg-gray-600 my-2"></div>
            </div>
            <section id="contact">
              <Contact />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
