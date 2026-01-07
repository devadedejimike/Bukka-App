import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaUsers, FaCalendarAlt, FaClock, FaCommentDots } from "react-icons/fa";

const ReservationForm = () => {
const [formData, setFormData] = useState({
  name: "",
  email: "",
  guest: "",
  date: "",
  message: ""
})
  const handleSubmit = (e) => {
    e.preventDefault(); 
    setFormData({
      name: "",
      email: "",
      guest: "",
      date: "",
      message: ""
    })
    alert("Ẹ ṣeun! Your message has been sent to the BUKA kitchen.");  
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  return (
    <section id="reservation" className="py-24 bg-[#FAF7F2]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-amber-100">
          
          {/* Left Side */}
          <div className="md:w-1/3 bg-amber-800 p-10 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-black mb-6">Ẹ̀bùn l'ẹwà</h2>
              <p className="text-amber-100 mb-8 leading-relaxed">
                Good food is best shared. Secure your spot at our table and experience the true warmth of Ibadan hospitality.
              </p>
              
              <div className="space-y-6 text-sm">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-700/50 flex items-center justify-center border border-amber-500/30">
                    <FaClock className="text-amber-200" />
                  </div>
                  <div>
                    <p className="font-bold">Opening Hours</p>
                    <p className="opacity-80">Mon - Sat: 11am - 9pm</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-700/50 flex items-center justify-center border border-amber-500/30">
                    <FaPhone className="text-amber-200" />
                  </div>
                  <div>
                    <p className="font-bold">Call for Inquiries</p>
                    <p className="opacity-80">+234 812 345 6789</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="md:w-2/3 p-10 lg:p-16">
            <div className="mb-10 text-center md:text-left">
              <h3 className="text-3xl font-black text-gray-900 mb-2">Book a Table</h3>
              <p className="text-gray-500">Please fill the form below to confirm your spot.</p>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-amber-800 flex items-center gap-2">
                  <FaUser className="text-[10px]" /> Full Name
                </label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Tunde Balogun"
                  className="w-full px-0 py-3 border-b-2 border-gray-100 focus:border-amber-600 outline-none transition-colors text-gray-800 placeholder:text-gray-300 bg-transparent" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-amber-800 flex items-center gap-2">
                  <FaEnvelope className="text-[10px]" /> Email Address
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tunde@example.com"
                  className="w-full px-0 py-3 border-b-2 border-gray-100 focus:border-amber-600 outline-none transition-colors text-gray-800 placeholder:text-gray-300 bg-transparent" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-amber-800 flex items-center gap-2">
                  <FaUsers className="text-[10px]" /> Guests
                </label>
                <select name="guest" value={formData.guest} onChange={handleChange} className="w-full px-0 py-3 border-b-2 border-gray-100 focus:border-amber-600 outline-none transition-colors text-gray-800 bg-transparent">
                  <option>2 People</option>
                  <option>4 People</option>
                  <option>6+ People (Group)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-amber-800 flex items-center gap-2">
                  <FaCalendarAlt className="text-[10px]" /> Preferred Date
                </label>
                <input 
                  type="date" 
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-b-2 border-gray-100 focus:border-amber-600 outline-none transition-colors text-gray-800 bg-transparent" 
                />
              </div>

              <div className="md:col-span-2 space-y-2 mt-4">
                <label className="text-xs uppercase tracking-widest font-bold text-amber-800 flex items-center gap-2">
                  <FaCommentDots className="text-[10px]" /> Any special notes for the kitchen?
                </label>
                <textarea 
                  rows="2" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us if it's a birthday or if you have allergies..."
                  className="w-full px-0 py-3 border-b-2 border-gray-100 focus:border-amber-600 outline-none transition-colors text-gray-800 placeholder:text-gray-300 bg-transparent resize-none"
                ></textarea>
              </div>

              <div className="md:col-span-2 pt-6">
                <button 
                  type="submit" 
                  className="w-full md:w-auto bg-amber-800 hover:bg-black text-white px-12 py-4 rounded-xl font-black uppercase tracking-widest text-sm transition-all duration-300 shadow-xl hover:-translate-y-1"
                >
                  Confirm Reservation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;