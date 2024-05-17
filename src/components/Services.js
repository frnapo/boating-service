import React from "react";
import { FaAnchor, FaFish, FaWater } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaAnchor className="text-blue-600 text-4xl mb-4" />,
    title: "Noleggio Yacht",
    description: "Noleggio di yacht di lusso per occasioni speciali.",
  },
  {
    icon: <FaFish className="text-blue-600 text-4xl mb-4" />,
    title: "Escursioni di Pesca",
    description: "Avventure di pesca emozionanti in mare aperto.",
  },
  {
    icon: <FaWater className="text-blue-600 text-4xl mb-4" />,
    title: "Tour in Barca",
    description: "Tour panoramici lungo splendide coste.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">I Nostri Servizi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-4 text-gray-700">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
