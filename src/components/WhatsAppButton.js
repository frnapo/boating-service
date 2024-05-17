import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "1234567890";

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      className="fixed bottom-4 left-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-400 transition duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
};

export default WhatsAppButton;
