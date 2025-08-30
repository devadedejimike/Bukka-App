import React from 'react';

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
    <div className="bg-gray-50 font-[Poppins] scroll-smooth">
      <Header />
      <HeroSection />
      <FeaturedDishes />
      <AboutSection />
      <MenuSection />
      <Testimonials />
      <ReservationForm />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
