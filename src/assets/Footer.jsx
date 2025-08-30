import { FaUtensils, FaPaperPlane, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold flex items-center mb-4">
              <div className="w-10 h-10 bg-amber-600 rounded-full flex justify-center items-center mr-3">
                <FaUtensils className="text-white" />
              </div>
              BUKA
            </h3>
            <p className="text-gray-400">Authentic Nigerian cuisine served with love in Ibadan.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home">Home</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Opening Hours</h4>
            <p className="text-gray-400">Mon-Sat: 10AM - 9PM</p>
            <p className="text-gray-400">Sun: 12PM - 8PM</p>
            <a
              href="#reservation"
              className="inline-block mt-4 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full text-sm font-medium transition duration-300"
            >
              Book a Table
            </a>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-2">Subscribe for updates.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-lg text-gray-800 w-full"
              />
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-r-lg flex items-center justify-center"
              >
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p className="mb-4 md:mb-0">&copy; 2023 BUKA Restaurant. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
