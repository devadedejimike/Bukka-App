import { FaFireAlt, FaPlus } from "react-icons/fa";
import Img1 from "../images/amala.png";
import Img2 from "../images/poundedyam.jpg";
import Img3 from "../images/jollof.jpg";

const dishes = [
  {
    title: "Àmàlà & Ewedu",
    price: "₦1,500",
    desc: "Smooth velvet amala served with our legendary Gbegiri, Ewedu, and Orisirisi.",
    img: Img1,
    tag: "Bestseller"
  },
  {
    title: "Iyán & Egusi",
    price: "₦2,000",
    desc: "Freshly pounded yam served with rich melon soup, stockfish, and assorted meat.",
    img: Img2,
    tag: "Traditional"
  },
  {
    title: "Party Jollof Rice",
    price: "₦1,800",
    desc: "The authentic smoky flavor with dodo, fried chicken, and that 'bottom of the pot' taste.",
    img: Img3,
    tag: "Chef's Choice"
  }
];

const FeaturedDishes = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-amber-900 mb-4 tracking-tight">
            Iṣẹ́ Ìyá Wa <span className="text-amber-600">-</span> Signature Tastes
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            These aren't just meals, they are the pride of our kitchen. Hand-crafted with recipes passed down through generations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {dishes.map((dish, index) => (
            <div key={index} className="relative group">
              <div className="relative h-[400px] w-full mb-6 overflow-hidden rounded-[2rem] shadow-2xl rotate-1 group-hover:rotate-0 transition-transform duration-500">
                <img 
                  src={dish.img} 
                  alt={dish.title} 
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" 
                />

                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-amber-900 px-4 py-1 rounded-full text-xs font-black uppercase tracking-tighter shadow-lg flex items-center gap-1">
                  <FaFireAlt className="text-orange-600" /> {dish.tag}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                   <span className="text-white font-bold tracking-widest uppercase text-sm">View Preparation Story</span>
                </div>
              </div>

              <div className="px-2">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-2xl font-black text-gray-900 leading-tight">
                    {dish.title}
                  </h3>
                  <span className="text-xl font-black text-amber-700">{dish.price}</span>
                </div>
                
                <p className="text-gray-600 text-base leading-relaxed mb-6 text-left">
                  {dish.desc}
                </p>

                <button className="w-full flex items-center justify-center gap-2 bg-amber-800 hover:bg-black text-white py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-amber-200">
                  <FaPlus className="text-sm" /> Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;