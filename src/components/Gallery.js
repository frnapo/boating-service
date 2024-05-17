import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Offcanvas from "./Offcanvas";
import FullscreenModal from "./FullscreenModal";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";
import img9 from "../assets/9.jpg";
import img10 from "../assets/10.jpg";
import img11 from "../assets/11.jpg";
import img12 from "../assets/12.jpg";
import img13 from "../assets/13.jpg";
import img14 from "../assets/14.jpg";
import img15 from "../assets/15.jpg";
import img16 from "../assets/16.jpg";
import img17 from "../assets/17.jpg";
import img18 from "../assets/18.jpg";
import img19 from "../assets/19.jpg";
import img20 from "../assets/20.jpg";
import img21 from "../assets/21.jpg";
import img22 from "../assets/22.jpg";
import img23 from "../assets/23.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
];

const Gallery = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const handleOpenOffcanvas = () => {
    setShowOffcanvas(true);
  };

  const handleCloseOffcanvas = () => {
    setShowOffcanvas(false);
  };

  const handleOpenFullscreen = (image) => {
    setFullscreenImage(image);
  };

  const handleCloseFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <section id="gallery" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">Galleria</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {images.slice(0, 4).map((image, index) => (
            <div
              key={index}
              className="relative cursor-pointer hover:opacity-75 transition-opacity duration-300"
              onClick={() => (index === 3 ? handleOpenOffcanvas() : handleOpenFullscreen(image))}
            >
              <img src={image} alt={`gallery-${index}`} className="w-full h-full object-cover rounded-lg" />
              {index === 3 && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                  <FaPlus className="text-white text-4xl" />
                </div>
              )}
            </div>
          ))}
        </div>
        <button
          className="mt-8 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-500 transition duration-300"
          onClick={handleOpenOffcanvas}
        >
          Mostra tutto (23)
        </button>
      </div>

      {showOffcanvas && (
        <Offcanvas images={images} onClose={handleCloseOffcanvas} onImageClick={handleOpenFullscreen} />
      )}
      {fullscreenImage && <FullscreenModal image={fullscreenImage} onClose={handleCloseFullscreen} />}
    </section>
  );
};

export default Gallery;
