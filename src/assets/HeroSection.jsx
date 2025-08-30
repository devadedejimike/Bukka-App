const HeroSection = () => {
  return (
    <section
      id="home"
      className="hero min-h-screen flex items-center justify-center text-white pt-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1546069901-ba9590aed2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1480&q=80')",
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Authentic Nigerian Cuisine</h1>
          <p className="text-xl md:text-2xl mb-8">
            Experience the rich flavors of Ibadan at BUKA - where tradition meets taste
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#menu"
              aria-label="Explore Menu"
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-medium text-lg transition duration-300"
            >
              Explore Menu
            </a>
            <a
              href="#reservation"
              aria-label="Book a Table"
              className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-6 py-3 rounded-full font-medium text-lg transition duration-300"
            >
              Book a Table
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
