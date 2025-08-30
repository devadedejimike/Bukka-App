

const sections = {
  Swallows: [
    { name: "Amala", desc: "Yam flour", price: "₦500" },
    { name: "Pounded Yam", desc: "Freshly pounded", price: "₦700" },
    { name: "Eba", desc: "Garri", price: "₦400" },
    { name: "Semo", desc: "Wheat meal", price: "₦450" }
  ],
  "Soups & Stews": [
    { name: "Ewedu", desc: "With gbegiri", price: "₦800" },
    { name: "Egusi", desc: "With assorted meat", price: "₦1,200" },
    { name: "Ogbono", desc: "With okra", price: "₦1,000" },
    { name: "Ofada Stew", desc: "Special recipe", price: "₦1,500" }
  ],
  Proteins: [
    { name: "Assorted Meat", desc: "Beef, tripe, shaki", price: "₦1,000" },
    { name: "Grilled Catfish", desc: "Pepper soup style", price: "₦1,500" },
    { name: "Fried Chicken", desc: "Spicy or mild", price: "₦1,200" },
    { name: "Grilled Turkey", desc: "Special recipe", price: "₦1,800" }
  ]
};

const MenuSection = () => {
  return (
    <section id="menu" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Menu</h2>
        <div className="flex flex-col md:flex-row gap-8">
          {Object.entries(sections).map(([title, items], idx) => (
            <div key={idx} className="md:w-1/3 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6 text-amber-700 border-b pb-2">{title}</h3>
              <div className="space-y-4">
                {items.map((item, i) => (
                  <div key={i} className="flex justify-between">
                    <div>
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                    <span className="font-bold">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
