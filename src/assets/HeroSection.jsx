const HeroSection = () => {
  return (
    <section
      id="home"
      className="hero min-h-screen flex items-center justify-center text-white pt-20 relative overflow-hidden"
      style={{
        backgroundColor: "#1a0f00", 
        backgroundImage:
          "linear-gradient(rgba(26, 15, 0, 0.7), rgba(26, 15, 0, 0.7)), url('https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/p6-for-air.png')]"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <span className="text-amber-500 font-medium tracking-widest uppercase text-sm mb-4 block">
            Ẹ kú àbọ̀ - Welcome to BUKA
          </span>
          
          <h1 className="font-['Fraunces'] text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            The Soul of <span className="text-amber-500">Yoruba</span> Cooking
          </h1>
          
          <p className="text-lg md:text-2xl mb-10 text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
            From the steaming pots of Ibadan to your plate. Experience authentic 
            <span className="italic"> Àmàlà, Gbẹ̀gìrì, </span> and <span className="italic">Èfọ́ Ríro</span> cooked with tradition.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="#menu"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-md font-bold text-lg transition duration-300 shadow-lg transform hover:-translate-y-1"
            >
              View Today's Specials
            </a>
            <a
              href="#reservation"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-md font-bold text-lg transition duration-300 backdrop-blur-sm"
            >
              Secure a Table
            </a>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-80 text-sm font-medium">
            <div className="flex items-center gap-2">
              <span className="text-amber-500">✓</span> Firewood Prepared
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-500">✓</span> Fresh Ingredients
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-500">✓</span> True Ibadan Taste
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;