import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineSoupKitchen } from "react-icons/md"; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["home", "menu", "about", "testimonials", "contact"];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center group cursor-pointer">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-amber-700 flex items-center justify-center mr-3 transition-transform group-hover:rotate-12">
            <MdOutlineSoupKitchen className="text-white text-2xl" />
          </div>
          <div>
            <h1 className={`text-2xl font-black tracking-tighter transition-colors ${
              isScrolled ? "text-amber-900" : "text-white"
            }`}>
              BUKA
            </h1>
            <p className={`text-[10px] uppercase tracking-[0.2em] font-bold leading-none ${
              isScrolled ? "text-amber-700" : "text-amber-500"
            }`}>
              Authentic Taste
            </p>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-amber-600 ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right side: Button and Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <a
            href="#reservation"
            className={`hidden md:block px-6 py-2.5 rounded-md font-bold text-sm transition-all duration-300 ${
              isScrolled 
                ? "bg-amber-700 text-white hover:bg-amber-800 shadow-md" 
                : "bg-white text-amber-900 hover:bg-amber-100"
            }`}
          >
            RESERVE A TABLE
          </a>
          
          <button
            className={`md:hidden p-2 rounded-md ${isScrolled ? "text-amber-900" : "text-white"}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute w-full bg-white transition-all duration-300 shadow-xl overflow-hidden ${
        isOpen ? "max-h-screen border-b-4 border-amber-700" : "max-h-0"
      }`}>
        <nav className="flex flex-col px-6 py-8 space-y-6">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="text-gray-900 text-xl font-bold capitalize border-b border-gray-100 pb-2"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#reservation"
            className="bg-amber-700 text-white text-center py-4 rounded-md font-bold text-lg"
            onClick={() => setIsOpen(false)}
          >
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;