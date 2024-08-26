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
      <div className="w-3/4 bg-white flex items-center justify-center ml-auto mt-12">
        <div className="text-center w-full">
          <section id="home" className="mb-16">
            <Home />
          </section>

          <section id="portfolio" className="mb-16">
            <Portfolio />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
