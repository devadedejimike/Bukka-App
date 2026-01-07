import { FaUtensils, FaLeaf, FaHeart } from "react-icons/fa";
import { GiFireBowl } from "react-icons/gi"; 
import heroImg from "../images/eating.jpg";

const AboutSection = () => {
  const features = [
    { icon: <FaUtensils />, label: "Ancient Recipes", desc: "Passed down from grandmothers" },
    { icon: <GiFireBowl />, label: "Firewood Flavor", desc: "Authentic smoky Ibadan taste" },
    { icon: <FaLeaf />, label: "Farm to Pot", desc: "Locally sourced ingredients" }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute right-[-1%] top-10 text-[12rem] font-['Fraunces'] font-black text-gray-200 select-none leading-none z-0">
        ÌTÀN
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-[12px] border-white">
              <img
                src={heroImg}
                alt="People enjoying food at BUKA"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* The "Since 1995" Badge */}
            <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white w-32 h-32 rounded-full flex flex-col items-center justify-center shadow-xl border-4 border-white z-20">
              <span className="text-xs uppercase font-bold tracking-tighter">Est.</span>
              <span className="text-2xl font-black">1995</span>
            </div>
            {/* Decorative colored box behind the image */}
            <div className="absolute -top-6 -left-6 w-2/3 h-full bg-amber-50 rounded-2xl -z-10"></div>
          </div>

          {/* Text Side */}
          <div className="lg:w-1/2">
            <div className="mb-8">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-2">Our Heritage</h3>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Preserving the Art of <br />
                <span className="text-amber-800 italic">Yoruba Hospitality</span>
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                For over <span className="font-bold text-amber-900">25 years</span>, BUKA has been more than just a restaurant, it's a home for those who crave the deep, smoky flavors of authentic Ibadan cooking. 
              </p>
              <p className="text-gray-600 mb-10 leading-relaxed">
                Every bowl of our Àmàlà is a tribute to tradition, prepared with the same patience and love that our founders started with back in 1995.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {features.map(({ icon, label, desc }, idx) => (
                <div key={idx} className="group">
                  <div className="text-2xl text-amber-700 mb-3 group-hover:scale-110 transition-transform">
                    {icon}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">{label}</h4>
                  <p className="text-xs text-gray-500 leading-tight">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;