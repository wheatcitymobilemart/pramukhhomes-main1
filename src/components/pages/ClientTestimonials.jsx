import React, { useEffect, useState } from "react";
import {  client } from "../../assets";

const ClientTestimonials = () => {
  const testimonials = [ { text: "Found a decent case here , paid $30 for it . Went home and found the exact same case on Amazon for $15 . 3 stars because their prices are pretty high for the cases they have ..no name brand cases at all . The convenience of getting a case the same day instead of online shopping is nice tho ... just wish the prices were in line with Amazon.. update ! The team there has helped me with the issue and made sure I was happy and well taken care of.", author: "Denis Deurbrouck", }, 
    { text: "Outstanding service, superior quality, and exceptional prices; if you are seeking a secure place to make your purchases, look no further than this one.", author: "Alfredo Mmtt", },
     { text: "Just bought some accessories today from Wheat City Mobile Mart. Their products are amazing. Enjoyed it . Highly recommended. Visit this local business.", author: "Tanay Gajjar", }, 
     { text: "Needed my cracked phone fixed. They are very helpful and got the job done in a timely manner very very satisfied.", author: "Tannis Tereck", }, 
    ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(
        (prevIndex) => (prevIndex + 1) % testimonials.length
      );
    }, 6000); // Change every 3 seconds

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
