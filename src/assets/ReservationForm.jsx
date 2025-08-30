import { FaUser, FaEnvelope, FaPhone, FaUsers, FaCalendarAlt, FaClock, FaCommentDots } from "react-icons/fa";

const ReservationForm = () => {
  return (
    <section id="reservation" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-amber-50 rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Make a Reservation</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2 flex items-center gap-2">
                <FaUser className="text-amber-600" /> Full Name
              </label>
              <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 flex items-center gap-2">
                <FaEnvelope className="text-amber-600" /> Email
              </label>
              <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 flex items-center gap-2">
                <FaPhone className="text-amber-600" /> Phone Number
              </label>
              <input type="tel" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 flex items-center gap-2">
                <FaUsers className="text-amber-600" /> Number of Guests
              </label>
              <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500">
                <option>1 person</option>
                <option>2 people</option>
                <option>3 people</option>
                <option>4 people</option>
                <option>5+ people</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2 flex items-center gap-2">
                <FaCalendarAlt className="text-amber-600" /> Date
              </label>
              <input type="date" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 flex items-center gap-2">
                <FaClock className="text-amber-600" /> Time
              </label>
              <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500">
                {["11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"].map(time => (
                  <option key={time}>{time}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2 flex items-center gap-2">
                <FaCommentDots className="text-amber-600" /> Special Requests
              </label>
              <textarea rows="3" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"></textarea>
            </div>
            <div className="md:col-span-2 text-center">
              <button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-medium transition duration-300">
                Book Table
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;
