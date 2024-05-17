import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const Offcanvas = ({ images, onClose, onImageClick }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

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
      <div className="bg-white w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 h-3/4 overflow-auto rounded-lg shadow-lg relative">
        <div className="p-4 text-right">
          <button className="text-gray-500 hover:text-gray-700 transition duration-300" onClick={onClose}>
            <FaTimes className="text-2xl" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative cursor-pointer hover:opacity-75 transition-opacity duration-300"
              onClick={() => onImageClick(image)}
            >
              <img src={image} alt={`gallery-${index}`} className="w-full h-full object-cover rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offcanvas;
