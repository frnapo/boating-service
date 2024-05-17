import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaUserCircle, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Ciprian",
    date: "giugno 2023",
    comment: "Marco è stato super disponibile soddisfando ogni nostra aspettativa e richiesta.",
    rating: 5,
  },
  {
    name: "Luca",
    date: "giugno 2023",
    comment: "Siamo stati benissimo, con in personale simpatico e professionale. Ci vediamo presto! Grazie",
    rating: 5,
  },
  {
    name: "Natalie",
    date: "agosto 2023",
    comment:
      "La nostra giornata sulla barca di Marco è stata pura magia. La barca era impeccabile, pulita e confortevole. In effetti le foto non gli rendono giustizia perché sembra molto meglio. L'equipaggio è stato incredibilmente accogliente e lo scenario mozzafiato. È stata più di una semplice esperienza in barca; è stato un giorno di amore, avventura e ricordi che custodiremo per sempre. Grazie per una giornata indimenticabile!",
    rating: 5,
  },
  {
    name: "Eric",
    date: "agosto 2023",
    comment: "Ottima esperienza, non ho avuto problemi, ottimo equipaggio.",
    rating: 5,
  },
  {
    name: "Pierre",
    date: "luglio 2023",
    comment:
      "Personale molto accogliente e disponibile. Gli scambi sono stati chiari e ruotavano intorno alla nostra richiesta, niente da dire!",
    rating: 5,
  },
];

const TestimonialsCarousel = () => {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">Dicono di Noi</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          modules={[Navigation, Autoplay]}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center">
                <FaUserCircle className="text-blue-600 text-6xl mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-700">{testimonial.name}</h3>
                <span className="text-gray-500 mb-2">{testimonial.date}</span>
                <p className="text-gray-600 mb-4">{testimonial.comment}</p>
                <div className="flex mb-2">
                  {[...Array(5)].map((star, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
