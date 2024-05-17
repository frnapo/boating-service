import React from "react";
import { FaTimes } from "react-icons/fa";

const FullscreenModal = ({ image, onClose }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
      onClick={handleBackdropClick}
    >
      <div className="relative max-w-full max-h-full p-4">
        <button
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition duration-300"
          onClick={onClose}
        >
          <FaTimes className="text-2xl" />
        </button>
        <img src={image} alt="Fullscreen" className="max-w-full max-h-full rounded-lg" />
      </div>
    </div>
  );
};

export default FullscreenModal;
