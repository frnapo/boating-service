import React from "react";
import boatImage from "../assets/first.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center h-[70vh]"
      style={{ backgroundImage: `url(${boatImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center px-4 text-center clip-path-hero">
        <motion.h1
          className="text-white text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Baglietto Navetta
        </motion.h1>
        <motion.p
          className="text-white text-lg md:text-2xl mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Vivi il lusso e l'eleganza in mare
        </motion.p>
        <motion.a
          href="#services"
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-500 transition duration-300"
          whileHover={{ scale: 1.1 }}
        >
          Scopri di più
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
