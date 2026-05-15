const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 left-0 right-0 z-50  bg-opacity-90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Your logo/brand */}
        <a href="#name" className="text-xl font-bold text-rose-900">Shravani</a>
        
        {/* Navigation links */}
        <div className="hidden md:flex space-x-8">
          <a href="#name" className="text-rose-700 hover:text-rose-900 transition">Home</a>
          <a href="#about" className="text-rose-700 hover:text-rose-900 transition">About</a>
          <a href="#education" className="text-rose-700 hover:text-rose-900 transition">Education</a>
          <a href="#experience" className="text-rose-700 hover:text-rose-900 transition">Experience</a>
          <a href="#skills" className="text-rose-700 hover:text-rose-900 transition">Skills</a>
          <a href="#projects" className="text-rose-700 hover:text-rose-900 transition">Research Papers</a>
          <a href="#contact" className="text-rose-700 hover:text-rose-900 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
