const sections = {
  Swallows: [
    { name: "Àmàlà Dudu", desc: "Traditional sun-dried yam flour, whipped to a velvet finish.", price: "₦500" },
    { name: "Àmàlà Láfun", desc: "White cassava flour, light and airy with a nostalgic tangy finish.", price: "₦500" },
    { name: "Iyán (Pounded Yam)", desc: "Freshly harvested yams, pounded daily for that perfect stretch.", price: "₦700" },
    { name: "Ẹ̀bà (Ìjẹ̀bú)", desc: "Sharp, fermented cassava grains the classic palate cleanser.", price: "₦400" },
    { name: "Semo", desc: "Fine-milled wheat for a light yet satisfying swallow.", price: "₦600" }
  ],
  "Signature Soups": [
    { name: "Abula Special", desc: "The Holy Trinity: Ewédú, silky Gbẹ̀gìrì, and our house spicy stew.", price: "₦800" },
    { name: "Egusi", desc: "Slow-toasted melon seeds, hand-crumbled with locust beans and spinach.", price: "₦1,200" },
    { name: "Ila Alasepo", desc: "A rich medley of okra, ocean-fresh seafood, and traditional spices.", price: "₦1,000" },
    { name: "Ayamase (Ofada Stew)", desc: "Bleached palm oil infused with green bell peppers and 'Iru' umami.", price: "₦1,500" },
    { name: "Ẹ̀fọ́ Rírò", desc: "Fresh spinach steamed in a rich, dry-pepper base with stockfish.", price: "₦1,000" }
  ],
  "Buka Classics": [
    { name: "Mọín-Mọín", desc: "Steamed bean pudding enriched with eggs, fish, and habanero bits.", price: "₦800" },
    { name: "Ẹ̀kọ Agidi", desc: "Traditional corn starch mash, leaf-wrapped to preserve its cool texture.", price: "₦400" },
    { name: "Jollof Rice", desc: "Smoky Party Jollof served with sweet dodo.", price: "₦1,800" },
    { name: "Coconut Rice", desc: "Native Coconut Rice served with sweet dodo.", price: "₦1,800" },
    { name: "Àyìnkẹ́ Beans", desc: "Slow-cooked honey beans (Oloyin) stewed until buttery soft.", price: "₦700" },
    { name: "Dùndún & Akara", desc: "Golden fried yam or crispy bean fritters with 'Ata-din-din' sauce.", price: "₦1,000" }
  ],
  "The Orisirisi": [
    { name: "Grand Orisirisi", desc: "The king's portion: Slow-braised beef, cow tail, intestine, and tender Shaki.", price: "₦1,000" },
    { name: "Eja Kika", desc: "Curled fish, hardwood-smoked then pan-seared in spicy aromatics.", price: "₦1,500" },
    { name: "Flame-Grilled Turkey", desc: "Marinated for 24 hours in our signature 'Ogunfe' spice blend.", price: "₦1,800" },
    { name: "Spicy Ponmo", desc: "Soft, succulent cow skin slow-cooked in a thick pepper reduction.", price: "₦700" }
  ]
};
const MenuSection = () => {
  return (
    <section id="menu" className="py-24 bg-[#FAF7F2] relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">Delicious Heritage</span>
          <h2 className="text-4xl md:text-5xl font-black text-amber-900 mt-2">The BUKA Menu</h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {Object.entries(sections).map(([title, items], idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-amber-100 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="font-['Fraunces'] text-2xl font-black mb-8 text-amber-800 flex items-center gap-3">
                <span className="w-8 h-px bg-amber-400"></span>
                {title}
              </h3>
              
              <div className="space-y-8">
                {items.map((item, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between items-baseline gap-2">
                      <h4 className="font-['Inter'] font-bold text-gray-800 text-lg group-hover:text-amber-700 transition-colors">
                        {item.name}
                      </h4>
                      {/* Dotted line connector */}
                      <div className="flex-1 border-b border-dotted border-gray-300 mb-1"></div>
                      <span className="font-black text-amber-900">{item.price}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1 italic leading-tight">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            * Prices may vary based on portion size and availability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;