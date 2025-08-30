import Img1 from "../images/amala.png";
import Img2 from "../images/poundedyam.jpg";
import Img3 from "../images/jollof.jpg";

const dishes = [
  {
    title: "Amala & Ewedu",
    price: "₦1,500",
    desc: "Smooth amala served with flavorful ewedu soup and assorted meat.",
    img: Img1
  },
  {
    title: "Pounded Yam & Egusi",
    price: "₦2,000",
    desc: "Freshly pounded yam served with rich egusi soup packed with assorted meat and fish.",
    img: Img2
  },
  {
    title: "Party Jollof Rice",
    price: "₦1,800",
    desc: "Smoky jollof rice served with fried plantain and chicken.",
    img: Img3
  }
];

const FeaturedDishes = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Signature Dishes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transform transition hover:-translate-y-1 hover:shadow-xl">
              <img src={dish.img} alt={dish.title} className="w-full h-64 object-cover rounded-t-lg" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{dish.title}</h3>
                <p className="text-gray-600 mb-4">{dish.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-amber-600 font-bold">{dish.price}</span>
                  <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full text-sm">Add to Order</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
