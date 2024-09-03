
import Sidebar from '../layouts/Sidebar';
import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';


const MainContent = () => {
  return (
    <div className="flex flex-grow min-h-screen pt-0">
      {/* Left Navigation Area */}
      <Sidebar />
      {/* Right Content Area */}
      <div className="w-3/4 bg-white ml-auto mt-12 sm:mt-12 md:mt-12 lg:mt-4">
        <div className="flex flex-grow flex-col text-center w-full space-y-auto">
          <section id="home" className="min-h-screen mb-16 pt-16 -mt-16">
            <Home />
          </section>

          <section id="portfolio" className="min-h-screen mb-16 pt-16 -mt-16">
            <Portfolio />
          </section>

          <section id="contact" className="min-h-screen pt-16 -mt-16">
            <Contact />
          </section>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
