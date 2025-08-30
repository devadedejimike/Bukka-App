import { FaUtensils, FaLeaf, FaHeart } from "react-icons/fa";
import heroImg from "../images/eating.jpg";

const AboutSection = () => {
  const features = [
    { icon: <FaUtensils className="text-amber-600" />, label: "Authentic Recipes" },
    { icon: <FaLeaf className="text-amber-600" />, label: "Fresh Ingredients" },
    { icon: <FaHeart className="text-amber-600" />, label: "Made with Love" }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <img
            // src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
            src = {heroImg}
            alt="BUKA Restaurant"
            className="rounded-lg shadow-xl w-full"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 1995, BUKA has been serving authentic Nigerian dishes to the people of Ibadan for over 25 years.
          </p>
          <p className="text-gray-600 mb-6">
            We take pride in preserving traditional recipes while maintaining the highest standards of hygiene and quality.
          </p>
          <div className="flex flex-wrap gap-4">
            {features.map(({ icon, label }, idx) => (
              <div key={idx} className="flex items-center">
                <div className="bg-amber-100 p-3 rounded-full mr-3">
                  {icon}
                </div>
                <span className="font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
