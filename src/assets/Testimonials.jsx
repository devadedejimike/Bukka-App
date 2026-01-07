import { FaUser, FaStar, FaStarHalfAlt, FaQuoteRight } from "react-icons/fa";

const reviews = [
  {
    name: "Adebayo Johnson",
    rating: 5,
    tag: "Regular",
    text: "The best Àmàlà and Ewédú in Ibadan! I've been coming here for years and the smoky firewood taste is always consistent. It's legendary."
  },
  {
    name: "Funmi Adeleke",
    rating: 5,
    tag: "Verified Guest",
    text: "Whenever I'm homesick for proper Nigerian food, BUKA is my go-to spot. Their Ofada rice and Ayamase sauce is simply to die for!"
  },
  {
    name: "Oluwaseun Williams",
    rating: 4.5,
    tag: "Local Guide",
    text: "I brought my foreign colleagues here and they were blown away! The atmosphere is authentic and the hospitality is top-notch."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#fdfaf6] relative overflow-hidden">
      <div className="absolute top-10 left-10 text-amber-100 text-[15rem] leading-none select-none opacity-50">
        “
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold uppercase tracking-[0.2em] text-sm">Community</span>
          <h2 className="text-4xl md:text-5xl font-black text-amber-900 mt-2 italic">Voices from the Pot</h2>
          <div className="w-12 h-1 bg-amber-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-3xl shadow-sm border border-amber-50 group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-amber-900 rounded-2xl flex items-center justify-center mr-4 shadow-lg rotate-3 group-hover:rotate-0 transition-transform">
                    <FaUser className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900 leading-none">{review.name}</h4>
                    <span className="text-[10px] uppercase font-bold text-amber-600 tracking-widest">{review.tag}</span>
                  </div>
                </div>
                <FaQuoteRight className="text-amber-100 text-3xl" />
              </div>
              
              <div className="flex text-amber-400 mb-4 text-sm">
                {[...Array(Math.floor(review.rating))].map((_, i) => (
                  <FaStar key={i} />
                ))}
                {review.rating % 1 !== 0 && <FaStarHalfAlt />}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action for Reviews */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm mb-4">Loved your experience? Tell us about it!</p>
          <button className="text-amber-800 font-black text-sm uppercase tracking-widest border-b-2 border-amber-800 pb-1 hover:text-amber-600 hover:border-amber-600 transition-all">
            Leave a Review
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;