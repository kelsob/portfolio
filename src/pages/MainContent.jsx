
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
      <div className="w-3/4 bg-white ml-auto mt-12">
        <div className="flex flex-col text-center w-full space-y-auto">
          <section id="home" className="pt-16 -mt-16">
            <Home />
          </section>
          <div className="flex w-full items-center justify-center align-center">
            <div className="w-3/4 h-0 rounded bg-lightColor border border-superLightColor dark:bg-gray-600 my-2"></div>
          </div>
          <section id="portfolio" className="">
            <Portfolio />
          </section>
          <div className="flex w-full items-center justify-center align-center">
            <div className="w-3/4 h-0 rounded bg-lightColor border border-superLightColor dark:bg-gray-600 my-2"></div>
          </div>
          <section id="contact" className="">
            <Contact />
          </section>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
