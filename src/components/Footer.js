import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Baglietto Navetta</h2>
          <p className="text-gray-300">Luxury Yacht Charter</p>
        </div>
        <div className="flex justify-center space-x-4 mb-6">
          <a href="#home" className="hover:text-gray-300 transition duration-300">
            Home
          </a>
          <a href="#services" className="hover:text-gray-300 transition duration-300">
            Servizi
          </a>
          <a href="#about" className="hover:text-gray-300 transition duration-300">
            Chi Siamo
          </a>
          <a href="#contact" className="hover:text-gray-300 transition duration-300">
            Contatti
          </a>
        </div>
        <div className="text-gray-400 text-sm">© 2024 Baglietto Navetta. Tutti i diritti riservati.</div>
      </div>
    </footer>
  );
};

export default Footer;
