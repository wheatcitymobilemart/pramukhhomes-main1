import React, { useEffect, useState } from "react";
import {  client } from "../../assets";

const ClientTestimonials = () => {
  const testimonials = [ { text: "Stay ahead with the latest phones and unbeatable deals!", author: "Wheat City Mobile Mart", }, { text: "Fast, reliable repairs for all your mobile needs!", author: "Wheat City Mobile Repairs", }, { text: "Upgrade, connect, and experience the future today!", author: "Wheat City Mobile Mart", }, { text: "Cracked screen? Dead battery? We’ve got you covered!", author: "Wheat City Mobile Repairs", }, ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(
        (prevIndex) => (prevIndex + 1) % testimonials.length
      );
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);
  return (
    <div className="bg-white">
        <section className="bg-blue-200 py-12">
          <div className="container mx-auto px-4 mt-12 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <img
                src={client}
                alt="Living Room"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8">
              <h2 className="text-2xl font-semibold mb-4">
                Client Testimonials
              </h2>
              <p className="text-lg mb-4">
                “{testimonials[currentTestimonial].text}”
              </p>
              <p className="text-xl font-semibold">
                {testimonials[currentTestimonial].author}
              </p>
              <div className="flex space-x-2 mt-4">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 w-2 rounded-full ${
                      index === currentTestimonial
                        ? "bg-yellow-300"
                        : "bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default ClientTestimonials;
