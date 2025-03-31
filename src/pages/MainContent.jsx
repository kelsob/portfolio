import Sidebar from '../layouts/Sidebar';
import Tech from './Tech';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Experience from './Experience';
import { MainBackgroundParticles } from '../components/particles/MainBackgroundParticles';

const MainContent = () => {
  return (
    <div className="flex min-h-screen pt-auto relative">
      {/* Left Navigation Area */}
      <div className="w-40 hidden sm:block">
        <Sidebar />
      </div>
      
      {/* Right Content Area */}
      <div className="w-full sm:pl-6 bg-white dark:bg-gray-700 transition-colors duration-300 mt-4 sm:mt-8 lg:mt-16 relative">
        
        {/* Particles Background */}

        <MainBackgroundParticles />


        {/* Main Content */}
        <div className="relative z-10">
          <div className="flex flex-col text-center w-full space-y-6">

            <section id="portfolio">
              <Portfolio />
            </section>

            <div className="flex w-full items-center justify-center">
              <div className="w-3/4 h-0 rounded bg-lightColor border border-superLightColor dark:bg-gray-600 my-2"></div>
            </div>
            
            <section id="experience" className="pt-16 -mt-16">
              <Experience />
            </section>

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
