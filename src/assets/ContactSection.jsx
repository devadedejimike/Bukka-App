import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Contact Us</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-6 text-amber-700">Get in Touch</h3>
            <div className="space-y-4 text-gray-600">
              <p className="flex items-center">
                <FaMapMarkerAlt className="text-amber-600 mr-2" />12 Oke-Ado Road, Ibadan, Oyo State
              </p>
              <p className="flex items-center">
                <FaPhoneAlt className="text-amber-600 mr-2" />+234 803 123 4567 / +234 809 876 5432
              </p>
              <p className="flex items-center">
                <FaEnvelope className="text-amber-600 mr-2" />info@bukarestaurant.com
              </p>
              <p className="flex items-center">
                <FaClock className="text-amber-600 mr-2" />Mon-Sat: 10AM-9PM | Sun: 12PM-8PM
              </p>
            </div>
          </div>
          <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-6 text-amber-700">Send Us a Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-lg"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-lg"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-2 border rounded-lg"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full px-4 py-2 border rounded-lg"
              ></textarea>
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-medium transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
