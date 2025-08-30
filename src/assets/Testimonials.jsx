import { FaUser, FaStar, FaStarHalfAlt } from "react-icons/fa";

const reviews = [
  {
    name: "Adebayo Johnson",
    rating: 5,
    text: "The best amala and ewedu in Ibadan! I've been coming here for years and the taste is always consistent."
  },
  {
    name: "Funmi Adeleke",
    rating: 5,
    text: "Whenever I'm homesick for proper Nigerian food, BUKA is my go-to spot. Their ofada rice is to die for!"
  },
  {
    name: "Oluwaseun Williams",
    rating: 4.5,
    text: "I brought my foreign colleagues here and they loved it! The atmosphere is authentic and the food is amazing."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md backdrop-blur-md bg-opacity-90">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <FaUser className="text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold">{review.name}</h4>
                  <div className="flex text-amber-400">
                    {[...Array(Math.floor(review.rating))].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                    {review.rating % 1 !== 0 && <FaStarHalfAlt />}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
