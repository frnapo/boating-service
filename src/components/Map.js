import React from "react";

const Map = () => {
  return (
    <section id="map" className="py-16 bg-white">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">Dove ci troviamo</h2>
        <div className="h-64 md:h-96 w-full">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.762654669063!2d10.0148157!3d44.0339826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132b07c3e61b47c1%3A0x52a96e2d5c1f4f98!2sFiume%20Magra%2C%20Bocca%20Di%20Magra!5e0!3m2!1sit!2sit!4v1633479085679!5m2!1sit!2sit"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Map;
