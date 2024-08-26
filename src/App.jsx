import Navbar from './layouts/Navbar';
import MainContent from './pages/MainContent';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <MainContent />
    </div>
  );
};

export default App;
