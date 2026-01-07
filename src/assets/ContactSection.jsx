import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const handleSubmit = (e) => {
    e.preventDefault(); 
    setFormData({
      name: "",
      email: "",
      message: ""
    })
    alert("Ẹ ṣeun! Your message has been sent to the BUKA kitchen."); 
  };

  const handleChange = (e) =>{
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col lg:flex-row shadow-2xl rounded-[2rem] overflow-hidden border border-gray-100">
          
          {/* Left Side: Brand & Details */}
          <div className="lg:w-2/5 bg-amber-900 p-10 lg:p-16 text-white relative">
            <div className="relative z-10">
              <h2 className="text-4xl font-black mb-6">Find Your Way Home</h2>
              <p className="text-amber-200/80 mb-10 leading-relaxed">
                Whether you're craving a quick lunch or planning a family feast, 
                our doors at Oke-Ado are always open.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-amber-800 p-3 rounded-lg text-amber-400">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg leading-none mb-1">Visit Us</h4>
                    <p className="text-amber-100/70 text-sm">12 Oke-Ado Road, Ibadan, Oyo State</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-amber-800 p-3 rounded-lg text-amber-400">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg leading-none mb-1">Call Us</h4>
                    <p className="text-amber-100/70 text-sm">+234 803 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-amber-800 p-3 rounded-lg text-amber-400">
                    <FaClock />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg leading-none mb-1">Kitchen Hours</h4>
                    <p className="text-amber-100/70 text-sm">Mon-Sat: 10AM - 9PM</p>
                    <p className="text-amber-100/70 text-sm">Sun: 12PM - 8PM</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-8 border-t border-amber-800 flex gap-6">
                <a href="#" className="hover:text-amber-400 transition-colors"><FaInstagram size={24} /></a>
                <a href="#" className="hover:text-amber-400 transition-colors"><FaWhatsapp size={24} /></a>
                <a href="#" className="hover:text-amber-400 transition-colors"><FaFacebook size={24} /></a>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Map & Message */}
          <div className="lg:w-3/5 bg-white p-10 lg:p-16">
             <div className="mb-10">
                <h3 className="text-2xl font-black text-gray-900 mb-4">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder="Your Name"
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-amber-600 outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Email Address"
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-amber-600 outline-none"
                  />
                  <div className="md:col-span-2">
                    <textarea
                      placeholder="How can we help you?"
                      name="message"
                      value={formData.message}
                      rows="4"
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-amber-600 outline-none resize-none"
                    ></textarea>
                  </div>
                  <button
                    // type="submit"
                    className="md:col-span-2 bg-amber-600 hover:bg-black text-white py-4 rounded-xl font-black uppercase tracking-widest transition-all duration-300"
                  >
                    Send to the BUKA Kitchen
                  </button>
                </form>
             </div>

             {/* Placeholder for Map */}
             <div className="w-full h-48 bg-gray-200 rounded-2xl relative overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-300/50 group-hover:bg-gray-300/20 transition-all">
                  <span className="bg-white px-4 py-2 rounded-full text-xs font-bold shadow-sm">View on Google Maps</span>
                </div>
                {/* replace this div with an actual <iframe> for Google Maps later */}
                <div className="w-full h-full bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/25.276987,55.296249,12,0/600x200?access_token=your_token')] bg-cover"></div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;