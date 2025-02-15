import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { waterdage } from "../../assets";

const WhatWeDo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-t from-blue-400 to-gray-100"
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-4 md:mt-12 lg:mt-16">
        <Typography
          variant="h2"
          className="text-center font-bold text-gray-800 mb-8"
        >
          WHAT WE DO?
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {["Screen Repair", "Battery Replacement", "Water Damage Repair"].map((title, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Card className="shadow-lg">
                <img
                  src={
                    title === "Screen Repair"
                      ? "https://2.bp.blogspot.com/-112Rjxmum-k/Wm8dG-rRS_I/AAAAAAABRT4/ofgCwtsAUQ0QC_B9vIBjpTMCYgYMBSZEgCK4BGAYYCw/s1600/diy-repair-fix-your-broken-smartphone-like-pro.w1456.jpg"
                      : title === "Battery Replacement"
                      ? "https://www.bouweenpc.nl/wp-content/uploads/2020/03/een-smartphone-repareren.jpg"
                      : waterdage
                  }
                  alt={title}
                  className="h-56 w-full object-cover"
                />
                <CardBody className="text-center">
                  <Typography
                    variant="h6"
                    className="font-semibold text-gray-700"
                  >
                    {title.toUpperCase()}
                  </Typography>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12"
        >
          <Typography
            variant="h2"
            className="text-center font-bold text-white mb-8"
          >
            Our Experts
          </Typography>
          <Typography className="text-white text-lg leading-relaxed">
            Our team of skilled technicians specializes in diagnosing and fixing a wide range of phone issues. From screen replacements to water damage repairs, we use the latest tools and techniques to ensure your device functions like new.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12"
        >
          <Typography
            variant="h2"
            className="text-center font-bold text-white mb-8"
          >
            Our Commitment
          </Typography>
          <Typography className="text-white text-lg leading-relaxed">
            At Wheat City Mobile Mart, we prioritize customer satisfaction, offering fast, reliable, and affordable phone repair services. Our commitment to quality ensures your device is in safe hands.
          </Typography>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WhatWeDo;
