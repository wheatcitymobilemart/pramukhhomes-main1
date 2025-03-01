import React from 'react';
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

const PhoneChargingPortRepair = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/DeviceRepairBooking");
  };
  
  return (
    <div className="bg-gradient-to-t from-blue-500 to-gray-100 py-16 px-6 lg:px-24 mt-4 md:mt-12 lg:mt-20 max-h-max">
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
              src="https://tse3.mm.bing.net/th?id=OIP.B1ruV6qgWUK599Epyx1AVAHaFj&w=355&h=355&c=7"
              alt="Phone Charging Port Repair"
              className="w-full h-full object-fit rounded-md"
            />
          </CardHeader>
          <CardBody className="lg:w-1/2 p-8">
            <Typography variant="h2" className="text-gray-800 mb-4">
              Phone Charging Port Repair
            </Typography>
            <Typography className="text-gray-700 text-lg leading-relaxed">
              Having trouble charging your phone? Our technicians specialize in charging port repairs to ensure smooth and reliable charging. Get your charging issues fixed quickly with our professional service.
            </Typography>
            <br />
            <button
              onClick={handleClick}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg mb-4 hover:bg-blue-600 transition-all"
            >
              Get a Free Quote
            </button>
          </CardBody>
        </Card>
      </motion.section>
    </div>
  );
};

export default PhoneChargingPortRepair;
