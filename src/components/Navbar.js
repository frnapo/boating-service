import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-700 p-4 shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Baglietto Navetta</div>
        <div className="hidden md:flex space-x-4">
          <a href="#home" className="text-white hover:text-gray-300 transition duration-300">
            Home
          </a>
          <a href="#services" className="text-white hover:text-gray-300 transition duration-300">
            Servizi
          </a>
          <a href="#about" className="text-white hover:text-gray-300 transition duration-300">
            Chi Siamo
          </a>
          <a href="#contact" className="text-white hover:text-gray-300 transition duration-300">
            Contatti
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-blue-800 text-white text-center space-y-4 mt-2">
          <a href="#home" className="block py-2">
            Home
          </a>
          <a href="#services" className="block py-2">
            Servizi
          </a>
          <a href="#about" className="block py-2">
            Chi Siamo
          </a>
          <a href="#contact" className="block py-2">
            Contatti
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
