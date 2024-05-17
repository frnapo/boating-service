import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">Contattaci</h2>
        <div className="flex flex-col md:flex-row justify-around">
          <div className="mb-8 md:mb-0 md:w-1/2 text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-700">I nostri contatti</h3>
            <ul className="text-lg text-gray-600">
              <li className="mb-4">
                <strong>Marco Rossi:</strong> <a href="tel:+390123456789">+39 012 345 6789</a>
              </li>
              <li className="mb-4">
                <strong>Luigi Bianchi:</strong> <a href="tel:+390987654321">+39 098 765 4321</a>
              </li>
              <li className="mb-4">
                <strong>Francesca Verdi:</strong> <a href="tel:+390112233445">+39 011 223 3445</a>
              </li>
            </ul>
          </div>

          <div className="md:w-1/2">
            <motion.form
              className="max-w-md mx-auto space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <input
                type="text"
                placeholder="Il Tuo Nome"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="email"
                placeholder="La Tua Email"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <textarea
                placeholder="Il Tuo Messaggio"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
              <motion.button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-500 transition duration-300 flex mx-auto md:mx-0"
                whileHover={{ scale: 1.05 }}
              >
                Invia Messaggio
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
