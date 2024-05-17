import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">Chi Siamo</h2>
        <motion.p
          className="text-lg mx-auto leading-relaxed max-w-3xl text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Il Baglietto Navetta è un simbolo di lusso ed eleganza, progettato per offrire un'esperienza di navigazione
          eccezionale. Con interni ed esterni progettati da Francesco Paszkowski, il nostro yacht offre comfort e stile
          in ogni dettaglio. Scopri il piacere di navigare con noi.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
