import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import EquipmentCarousel from "./components/EquipmentCarousel";
import About from "./components/About";
import Contact from "./components/Contact";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import Gallery from "./components/Gallery";
import Map from "./components/Map";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <EquipmentCarousel />
      <TestimonialsCarousel />
      <Gallery />
      <Map />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
