import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

const WhyUs = () => {
  const content = [
    {
      "title": "Extensive Product Range",
      "description": 
        "We offer the latest smartphones, tablets, and accessories from top brands. Whether you need a budget-friendly phone or a high-end flagship device, we have something for everyone.",
      "imgSrc": 
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "title": "Expert Guidance",
      "description": 
        "Our experienced staff provides personalized recommendations based on your needs, whether you’re looking for gaming, business, or camera-focused smartphones.",
      "imgSrc": 
        "https://c8.alamy.com/comp/D1F62D/advice-on-smartphone-shows-guidance-and-recommendations-D1F62D.jpg"
    },
    {
      "title": "Best Deals & Competitive Pricing",
      "description": 
        "Enjoy unbeatable prices on all our products. We provide special discounts, exchange offers, and flexible payment options to make your purchase more affordable.",
      "imgSrc": 
        "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "title": "Fast & Reliable Repairs",
      "description": 
        "We offer professional repair services, including screen replacements, battery changes, and software troubleshooting, ensuring your device stays in top condition.",
      "imgSrc": 
        "https://www.bouweenpc.nl/wp-content/uploads/2020/03/een-smartphone-repareren.jpg"
    },
    {
      "title": "Customer-Centric Service",
      "description": 
        "Your satisfaction is our priority. We provide excellent after-sales support, easy returns, and a seamless shopping experience to ensure you get the best service.",
      "imgSrc": 
        "https://st.depositphotos.com/1003989/3452/i/950/depositphotos_34523145-stock-photo-portrait-of-customer-service-worker.jpg"
    },
    {
      "title": "Genuine Products & Warranty",
      "description": 
        "We guarantee 100% authentic products with official manufacturer warranties, ensuring that you always receive high-quality and reliable devices.",
      "imgSrc": 
        "https://images.unsplash.com/photo-1593642634367-d91a135587b5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "title": "Latest Technology & Innovation",
      "description": 
        "We stay ahead of trends by bringing you the newest mobile devices, including 5G smartphones, foldable phones, and smart accessories.",
      "imgSrc": 
        "https://newsknol.com/wp-content/uploads/2021/04/future-of-phones.png"
    },
    {
      "title": "Flexible Financing Options",
      "description": 
        "Upgrade to your dream phone with easy EMI plans and buy-now-pay-later options, making premium devices more accessible for everyone.",
      "imgSrc": 
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ]
  ;

  return (
    <div className="bg-gradient-to-t from-blue-400 to-gray-100 py-16 px-6 md:px-12 mt-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <Typography variant="h2" className="text-gray-800 font-bold">
          WHY US?
        </Typography>
        <Typography variant="paragraph" className="text-gray-600 mt-4">
          Discover what sets us apart and why we are the right choice for your
          next phones.
        </Typography>
      </div>

      <div className="space-y-12">
        {content.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Card
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              } w-full max-w-6xl mx-auto rounded-lg overflow-hidden shadow-lg`}
            >
              <div className="md:w-1/3 w-full">
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-96 h-48 object-cover"
                />
              </div>
              <CardBody className="md:w-2/3 p-6 flex flex-col justify-center">
                <Typography variant="h4" className="mb-4 text-gray-800">
                  {item.title}
                </Typography>
                <Typography variant="paragraph" className="text-gray-700">
                  {item.description}
                </Typography>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
