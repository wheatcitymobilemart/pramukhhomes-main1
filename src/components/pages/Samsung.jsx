import React from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  
const Samsung = () => {
    const Navigate = useNavigate();
    const handleClick = () => {
        Navigate("/DeviceRepairBooking");
        setSelectedDevice(Samsung);
      };
  return (
    <div className="bg-gradient-to-t from-blue-400 to-gray-100 py-16 px-6 lg:px-24 mt-4 md:mt-12 lg:mt-20 max-h-max">
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
          <br />
            <button
              onClick={handleClick}
              className="px-4 py-2 bg-blue-300 text-blue-700 rounded-lg mb-4"
            >
              Get Quotation
            </button>
          </CardBody>
        </Card>
      </motion.section>
    
    </div>
  )
}

export default Samsung