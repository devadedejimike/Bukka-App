import { useState } from "react";
import { FaBars, FaUtensils } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["home", "menu", "about", "testimonials", "contact"];

  return (
    <header className="fixed w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center mr-3">
            <FaUtensils className="text-white text-xl" />
          </div>
          <h1 className="text-2xl font-bold text-amber-800">BUKA</h1>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="nav-link text-gray-800 hover:text-amber-700 capitalize"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Hamburger and reservations */}
        <div className="flex items-center space-x-4">
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <FaBars className="text-xl" />
          </button>
          <a
            href="#reservation"
            className="hidden md:block bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full font-medium transition duration-300"
          >
            Reservations
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <div className="flex flex-col px-4 py-3 space-y-2">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="text-gray-800 capitalize hover:bg-gray-500 hover:text-amber-700 px-3 py-2 rounded"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {link}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
