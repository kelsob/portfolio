import Sidebar from '../layouts/Sidebar';
import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';

const MainContent = () => {
  return (
    <div className="flex flex-grow min-h-screen">
      {/* Left Navigation Area */}
      <Sidebar />

      {/* Right Content Area */}
      <div className="w-3/4 bg-white ml-auto mt-12">
        <div className="flex flex-grow flex-col text-center w-full space-y-auto">
          <section id="home" className="min-h-screen mb-16">
            <Home />
          </section>

          <section id="portfolio" className="min-h-screen mb-16">
            <Portfolio />
          </section>

          <section id="contact" className="min-h-screen">
            <Contact />
          </section>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
