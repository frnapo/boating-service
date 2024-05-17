import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import {
  FaUmbrellaBeach,
  FaShower,
  FaUtensils,
  FaSwimmer,
  FaSnowflake,
  FaWater,
  FaAnchor,
  FaMapMarkerAlt,
  FaMicrochip,
  FaTshirt,
  FaSwatchbook,
  FaCompass,
  FaFish,
  FaTemperatureHigh,
  FaCoffee,
  FaGlassWhiskey,
  FaPlug,
} from "react-icons/fa";

const equipment = [
  { icon: <FaUmbrellaBeach />, title: "Tendalino" },
  { icon: <FaShower />, title: "Doccia sul ponte" },
  { icon: <FaUtensils />, title: "Tavolo da pranzo" },
  { icon: <FaSwimmer />, title: "Ponte in teak" },
  { icon: <FaSwimmer />, title: "Plancetta di poppa" },
  { icon: <FaSwimmer />, title: "Scaletta da bagno" },
  { icon: <FaSnowflake />, title: "Aria Condizionata" },
  { icon: <FaTemperatureHigh />, title: "Riscaldamento" },
  { icon: <FaMapMarkerAlt />, title: "GPS" },
  { icon: <FaCompass />, title: "Ecoscandaglio" },
  { icon: <FaWater />, title: "Dissalatore" },
  { icon: <FaCoffee />, title: "Macchina del caffè" },
  { icon: <FaGlassWhiskey />, title: "Macchina per il ghiaccio" },
  { icon: <FaAnchor />, title: "Salpa ancora elettrico" },
  { icon: <FaMicrochip />, title: "Invertitore" },
  { icon: <FaTshirt />, title: "Lenzuola" },
  { icon: <FaSwatchbook />, title: "Carte nautiche" },
  { icon: <FaFish />, title: "Maschera e boccaglio" },
  { icon: <FaPlug />, title: "Presa 220V" },
];

const EquipmentCarousel = () => {
  return (
    <section id="equipment" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">Attrezzature a Bordo</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {equipment.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center select-none">
                <div className="text-blue-600 text-6xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-700 ">{item.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default EquipmentCarousel;
