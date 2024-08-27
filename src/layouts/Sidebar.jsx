// src/layouts/Sidebar.jsx

const Sidebar = () => {
  return (
    <aside className="w-1/4 bg-lightColor flex items-center justify-center fixed top-12 min-h-screen">
      <nav className="space-y-4 text-center bg-mainColor">
        <a href="#home" className="block font-semibold text-darkColor hover:text-mainColor">Home</a>
        <a href="#portfolio" className="block font-semibold text-darkColor hover:text-mainColor">Portfolio</a>
        <a href="#contact" className="block font-semibold text-darkColor hover:text-mainColor">Contact</a>
      </nav>
    </aside>
  );
};

export default Sidebar;
