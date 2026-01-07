import { useState } from "react";
import { FaPaperPlane, FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineSoupKitchen } from "react-icons/md"; 

const Footer = () => {
  const [formData, setFormData] = useState({email: ""})
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({email: ""})
    alert("Ẹ ṣeun! You've been added to our Newsletter.")
  }
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a0f00] text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-amber-700 rounded-xl flex justify-center items-center mr-3 rotate-3 shadow-lg">
                <MdOutlineSoupKitchen className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-tighter leading-none">BUKA</h3>
                <p className="text-[10px] text-amber-500 uppercase font-bold tracking-[0.2em]">Ibadan Heritage</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Preserving the soul of Yoruba cooking through firewood-prepared meals and timeless hospitality. Experience the true taste of home.
            </p>
            <div className="flex space-x-4 pt-2">
              {[FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-amber-700 hover:border-amber-700 transition-all duration-300">
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Explore</h4>
            <ul className="space-y-4 text-gray-400 font-medium text-sm">
              {["home", "menu", "about", "testimonials", "contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link}`} className="hover:text-amber-500 transition-colors capitalize">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Time & Service */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Visit Us</h4>
            <div className="space-y-4 text-gray-400 text-sm">
              <div className="flex flex-col">
                <span className="text-amber-600 font-bold">Weekdays</span>
                <span>Mon - Sat: 11:00 AM - 9:00 PM</span>
              </div>
              <div className="flex flex-col">
                <span className="text-amber-600 font-bold">Sundays</span>
                <span>12:00 PM - 8:00 PM</span>
              </div>
              <a
                href="#reservation"
                className="inline-block mt-4 border border-amber-600 text-amber-500 hover:bg-amber-600 hover:text-white px-6 py-2 rounded-lg text-xs font-black tracking-widest transition-all"
              >
                BOOK A TABLE
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-6 italic">Join our table for recipes and special events.</p>
            <form onSubmit={handleSubmit} className="relative group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full bg-gray-900 border-b-2 border-gray-700 px-4 py-3 text-sm focus:border-amber-600 outline-none transition-all"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-amber-600 group-hover:translate-x-1 transition-transform"
              >
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 pt-10 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-[11px] text-gray-500 uppercase tracking-widest font-bold">
          <p>&copy; {currentYear} BUKA RESTAURANT • BUILT WITH PRIDE IN NIGERIA</p>
          <div className="mt-4 md:mt-0 space-x-6 italic">
            <span>Oúnjẹ gidi, ayọ̀ gidi</span>
            <span className="text-amber-900">-</span>
            <span>Real Food, Real Joy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;