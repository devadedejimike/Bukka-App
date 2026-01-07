import Header from "./assets/Header";
import HeroSection from "./assets/HeroSection";
import FeaturedDishes from "./assets/FeaturedDishes";
import AboutSection from "./assets/AboutSection";
import MenuSection from "./assets/MenuSection";
import Testimonials from "./assets/Testimonials";
import ReservationForm from "./assets/ReservationForm";
import ContactSection from "./assets/ContactSection";
import Footer from "./assets/Footer";

const App = () => {
  return (
    /* Changed bg-gray-50 to a warmer cream #FAF7F2 to match the Buka vibe */
    <div className="bg-[#FAF7F2] font-[inter] scroll-smooth selection:bg-amber-200 selection:text-amber-900">
      <Header />
      
      <main>
        <HeroSection />
        
        {/* We add a little space or "scrolling margin" for the fixed header */}
        <div className="space-y-0"> 
          <FeaturedDishes />
          <AboutSection />
          <MenuSection />
          <Testimonials />
          <ReservationForm />
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;