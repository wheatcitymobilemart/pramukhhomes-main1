import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import {
  FaTools,

  FaExchangeAlt,
  FaShieldAlt,
  FaPaintBrush,
} from "react-icons/fa";
import { FaBolt, FaHeadphones, FaMobile, FaTablet } from "react-icons/fa6";

const services = [
  
    {
      title: "Latest Mobile Phones",
      description:
        "Explore the newest smartphones with cutting-edge technology and unbeatable deals.",
      icon: <FaMobile className="text-blue-500 text-3xl" />,
    },
    {
      title: "Mobile Accessories",
      description:
        "Find high-quality accessories like chargers, cases, headphones, and more to enhance your device.",
      icon: <FaHeadphones className="text-green-500 text-3xl" />,
    },
    {
      title: "iPads & Tablets",
      description:
        "Shop the latest iPads and tablets for work, play, and entertainment on the go.",
      icon: <FaTablet className="text-yellow-500 text-3xl" />,
    },
    {
      title: "Phone & Tablet Repairs",
      description:
        "Quick and reliable repair services for cracked screens, battery replacements, and more.",
      icon: <FaTools className="text-red-500 text-3xl" />,
    },
    {
      title: "Device Trade-In",
      description:
        "Upgrade to a new device by trading in your old smartphone, tablet, or accessories for the best value.",
      icon: <FaExchangeAlt className="text-purple-500 text-3xl" />,
    },
    {
      title: "Screen Protectors & Cases",
      description:
        "Protect your device with high-quality tempered glass and stylish cases.",
      icon: <FaShieldAlt className="text-teal-500 text-3xl" />,
    },
    {
      title: "Fast Charging Solutions",
      description:
        "Stay powered up with high-speed chargers, wireless charging pads, and power banks.",
      icon: <FaBolt className="text-orange-500 text-3xl" />,
    },
    {
      title: "Gadget Customization",
      description:
        "Personalize your mobile with custom skins, engravings, and unique accessories.",
      icon: <FaPaintBrush className="text-gray-500 text-3xl" />,
    },
  
  
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <div className="bg-gradient-to-t from-blue-400 to-gray-100">
      <div className="container mx-auto py-10 px-5 mt-4 md:mt-12 lg:mt-16">
        <Typography
          variant="h2"
          className="text-center mb-8 text-3xl font-bold"
        >
          Our Services
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex"
            >
              <Card className="shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 p-6 flex flex-col items-center text-center w-full">
                <div className="mb-4">{service.icon}</div>
                <CardBody>
                  <Typography
                    variant="h5"
                    className="mb-3 text-xl font-semibold"
                  >
                    {service.title}
                  </Typography>
                  <Typography className="text-gray-700">
                    {service.description}
                  </Typography>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
