// src/components/pages/Home.jsx
import React, { useState } from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import {
  FaLocationDot,
  FaDollarSign,
  FaBuildingColumns,
  FaSearchengin,
} from "react-icons/fa6";
import { motion } from "framer-motion";
import {  homebg3 } from "../../assets";
import HomeSearchComponent from "../elements/HomeSearchComponent"; // Import the HomeSearchComponent
import { FcTwoSmartphones } from "react-icons/fc";


const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="h-screen w-full flex flex-col justify-center items-start bg-cover bg-center p-4
       md:p-6 lg:p-8"
      style={{ backgroundImage: `url(${homebg3})` }}
    >
      <div className="text-left mb-6 sm:mb-4 md:mb-8 lg:mb-10 max-w-full md:max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <Typography variant="h2" color="black" className="ml-2 sm:ml-4 md:ml-6 lg:ml-8 mb-4 sm:mb-2 md:mb-5 lg:mb-6">
          "Discover Innovation at 
            <br />
            Wheat City Mobile Mart!
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          <Typography variant="body1" color="black" className="ml-2 sm:ml-4 md:ml-6 lg:ml-8">
          Stay ahead with the latest smartphones, unbeatable deals, and premium service. Connect, upgrade, and experience the future of mobile technology with us!"

          </Typography>
        </motion.div>
      </div>

      <div className="w-full max-w-full md:max-w-lg text-left ml-2 sm:ml-4 md:ml-6 lg:ml-8">
        <motion.div
          className="w-full"
          initial={{ width: "100px" }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Card className="w-full h-auto" color="white">
            <CardBody className="flex flex-col space-y-4 p-2 sm:p-3 md:p-4 lg:p-5 md:space-y-0 md:flex-row md:justify-between md:items-center md:space-x-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="flex items-center space-x-2"
              >
                <FaLocationDot
                  size="1.5rem"
                  className="text-xl text-white bg-amber-500 rounded-md p-1"
                />
                <Typography variant="h6" color="black">
                  Location
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                className="flex items-center space-x-2"
              >
                <FaDollarSign
                  size="1.5rem"
                  className="text-xl text-white bg-amber-500 rounded-md p-1"
                />
                <Typography variant="h6" color="black">
                  Price
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                className="flex items-center space-x-2"
              >
                <FcTwoSmartphones
                  size="1.5rem"
                  className="text-xl text-white bg-amber-500 rounded-md p-1"
                />
                <Typography variant="h6" color="black">
                  Type of Phone
                </Typography>
              </motion.div>
              {/* <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                className="bg-gray-800 p-2 rounded-md cursor-pointer"
                onClick={handleOpenModal}
              >
                <FaSearchengin
                  size="1.5rem"
                  className="text-amber-500 text-xl"
                />
              </motion.div> */}
            </CardBody>
          </Card>
        </motion.div>
      </div>

      {isModalOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-2 overflow-hidden"
          initial={{ scaleY: 0.1, scaleX: 0.1, opacity: 0 }}
          animate={{ scaleY: 1, scaleX: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.7,
            ease: "easeOut",
          }}
          onClick={handleCloseModal}
        >
          <div
            className="relative bg-white rounded-lg max-w-full sm:max-w-md md:max-w-lg lg:max-w-3xl w-full p-2 sm:p-3 md:p-4 lg:p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 text-black font-bold hover:text-red-400 text-2xl"
            >
              &times;
            </button>
            <HomeSearchComponent />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Home;

