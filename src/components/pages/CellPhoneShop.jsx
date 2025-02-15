import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const CellPhoneShop = () => {
  return (
    <div className="bg-gradient-to-t from-blue-400 to-gray-100 py-16 px-6 lg:px-24 mt-4 md:mt-12 lg:mt-16">
      {/* Repair Services Section */}
      <motion.section
        className="mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <Card className="flex flex-col lg:flex-row items-center">
          <CardHeader
            className="lg:w-1/2 h-64 lg:h-80 overflow-hidden p-1 bg-transparent"
            floated={true}
            shadow={false}
          >
            <img
              src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1"
              alt="Phone Repair"
              className="w-full h-full object-cover rounded-md"
            />
          </CardHeader>
          <CardBody className="lg:w-1/2 p-8">
            <Typography variant="h2" className="text-gray-800 mb-4">
              Expert Phone Repairs
            </Typography>
            <Typography className="text-gray-700 text-lg leading-relaxed">
              We provide quick and reliable phone repair services, including screen replacement,
              battery replacement, water damage repair, software troubleshooting, and more. Get
              your phone fixed in no time with our expert technicians.
            </Typography>
          </CardBody>
        </Card>
      </motion.section>

      {/* Phone Sales Section */}
      <motion.section
        className="mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <Card className="flex flex-col lg:flex-row-reverse items-center">
          <CardHeader
            className="lg:w-1/2 h-64 lg:h-80 overflow-hidden p-1 bg-transparent"
            floated={true}
            shadow={false}
          >
            <img
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
              alt="Phone Sales"
              className="w-full h-full object-cover rounded-md"
            />
          </CardHeader>
          <CardBody className="lg:w-1/2 p-8">
            <Typography variant="h2" className="text-gray-800 mb-4">
              Buy New & Used Phones
            </Typography>
            <Typography className="text-gray-700 text-lg leading-relaxed">
              Looking for a new phone? We offer a wide selection of new and pre-owned smartphones
              from top brands at competitive prices. Trade-in and financing options available!
            </Typography>
          </CardBody>
        </Card>
      </motion.section>

      {/* Accessories Section */}
      <motion.section
        className="mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <Card className="flex flex-col items-center">
          <CardHeader
            className="w-full h-48 overflow-hidden p-4"
            floated={false}
            shadow={false}
          >
            <img
              src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796"
              alt="Phone Accessories"
              className="w-full h-full object-cover rounded-md"
            />
          </CardHeader>
          <CardBody className="p-8 text-center">
            <Typography variant="h2" className="text-gray-800 mb-4">
              Accessories & Gadgets
            </Typography>
            <Typography className="text-gray-700 text-lg leading-relaxed">
              Protect and enhance your phone with our high-quality cases, chargers, screen
              protectors, and wireless accessories. Everything you need to keep your phone in
              perfect condition!
            </Typography>
          </CardBody>
        </Card>
      </motion.section>
    </div>
  );
};

export default CellPhoneShop;
