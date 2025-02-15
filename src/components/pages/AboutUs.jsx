import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { motion } from "framer-motion";
import { client } from "../../assets";
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-t from-blue-400 to-gray-100 py-16 px-6 lg:px-24 mt-4 md:mt-12 lg:mt-16">
      {/* Who We Are Section */}
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
              src={client}
              alt="Who We Are"
              className="w-full h-full object-cover rounded-md"
            />
          </CardHeader>
          <CardBody className="lg:w-1/2 p-8">
            <Typography variant="h2" className="text-gray-800 mb-4">
              Who We Are
            </Typography>
            <Typography className="text-gray-700 text-lg leading-relaxed">
            At Wheat City Mobile Mart, we are passionate about providing top-quality mobile repair 
              services and the latest smartphones. Founded on the principles of integrity, quality,
               and innovation, we are a trusted mobile repair and sales shop dedicated to delivering
                exceptional customer satisfaction. With expert technicians, a wide range of mobile
                 devices, and reliable repair solutions, we stand out in the industry for our 
                 expertise, reliability, and attention to detail.
            </Typography>
          </CardBody>
        </Card>
      </motion.section>

      {/* Our Mission Section */}
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
              src="https://images.unsplash.com/photo-1521316730702-829a8e30dfd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Our Mission"
              className="w-full h-full object-cover rounded-md"
            />
          </CardHeader>
          <CardBody className="lg:w-1/2 p-8">
            <Typography variant="h2" className="text-gray-800 mb-4">
              Our Mission
            </Typography>
            <Typography className="text-gray-700 text-lg leading-relaxed">
            Our mission is to provide top-notch mobile repair services and offer the latest smartphones at
             competitive prices. We strive to ensure fast, reliable, and high-quality repairs while
              maintaining customer satisfaction. Our goal is to 
            keep you connected by delivering excellent service, genuine parts, and expert technical support.
            </Typography>
          </CardBody>
        </Card>
      </motion.section>

      {/* Our Values Section */}
      <motion.section
        className="mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <Typography variant="h2" className="text-gray-800 text-center mb-12">
          Our Values
        </Typography>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={fadeInUp}>
            <Card className="flex flex-col items-center">
              <CardHeader
                className="w-full h-48 overflow-hidden p-4"
                floated={false}
                shadow={false}
              >
                <img
                  src="https://images.unsplash.com/photo-1644411813513-ad77c1b77581?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Integrity"
                  className="w-full h-full object-cover rounded-md"
                />
              </CardHeader>
              <CardBody className="p-8">
                <Typography variant="h4" className="text-gray-800 mb-4">
                  Integrity
                </Typography>
                <Typography className="text-gray-700 text-lg leading-relaxed">
                We believe in honesty, transparency, and trust in every repair and sale. Our goal is to provide accurate diagnostics, fair pricing, 
                and quality service so our customers always feel confident in their choice.
                </Typography>
              </CardBody>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className="flex flex-col items-center">
              <CardHeader
                className="w-full h-48 overflow-hidden p-4"
                floated={false}
                shadow={false}
              >
                <img
                  src="https://plus.unsplash.com/premium_photo-1664304041357-9ee3070abe68?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Quality"
                  className="w-full h-full object-cover rounded-md"
                />
              </CardHeader>
              <CardBody className="p-8">
                <Typography variant="h4" className="text-gray-800 mb-4">
                  Quality
                </Typography>
                <Typography className="text-gray-700 text-lg leading-relaxed">
                We are committed to providing top-quality mobile repair and phone sales services. From using premium parts in repairs to offering the latest, most reliable devices, ensuring quality is always our highest priority.
               
                </Typography>
              </CardBody>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className="flex flex-col items-center">
              <CardHeader
                className="w-full h-48 overflow-hidden p-4"
                floated={false}
                shadow={false}
              >
                <img
                  src="https://plus.unsplash.com/premium_photo-1664297557561-6e7a951cb1dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Innovation"
                  className="w-full h-full object-cover rounded-md"
                />
              </CardHeader>
              <CardBody className="p-8">
                <Typography variant="h4" className="text-gray-800 mb-4">
                  Innovation
                </Typography>
                <Typography className="text-gray-700 text-lg leading-relaxed">
                   We stay ahead of the curve by embracing the latest mobile technologies and repair techniques. From advanced diagnostics to cutting-edge repair solutions, we ensure that your devices receive the best care. Our forward-thinking approach also allows us to offer the latest smartphones and accessories to keep you connected in style.

                </Typography>
              </CardBody>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className="flex flex-col items-center">
              <CardHeader
                className="w-full h-48 overflow-hidden p-4"
                floated={false}
                shadow={false}
              >
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Customer-Centricity"
                  className="w-full h-full object-cover rounded-md"
                />
              </CardHeader>
              <CardBody className="p-8">
                <Typography variant="h4" className="text-gray-800 mb-4">
                Customer-Centric Approach
                </Typography>
                <Typography className="text-gray-700 text-lg leading-relaxed">
                Our customers are our top priority. We take the time to understand your needs, whether it's finding the perfect phone, fixing a device, or offering expert advice. We are committed to providing personalized service, transparent pricing, and reliable solutions that ensure your satisfaction and keep you connected.

                </Typography>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Expertise Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
      <Card className="p-8 max-w-4xl mx-auto shadow-lg rounded-lg">
  <Typography variant="h2" className="text-gray-800 text-center mb-6">
    Our Expertise
  </Typography>
  <Typography className="text-gray-700 text-lg leading-relaxed text-center mb-6">
    With years of experience in mobile repair and phone sales, we provide expert solutions to keep you connected. Our services include:
  </Typography>
  <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mt-4 space-y-4">
    <li>
      <strong>Mobile Repairs:</strong> Fast and reliable repairs for all smartphone brands, including screen replacements, battery changes, and water damage fixes.
    </li>
    <li>
      <strong>Phone Sales:</strong> A wide selection of new and pre-owned smartphones at competitive prices, with warranty options available.
    </li>
    <li>
      <strong>Accessories & Protection:</strong> High-quality phone cases, screen protectors, chargers, and other essential accessories.
    </li>
    <li>
      <strong>Software & Unlocking Services:</strong> Expert solutions for software issues, phone unlocking, and system updates.
    </li>
    <li>
      <strong>Trade-In & Buyback:</strong> Upgrade to a new device with our trade-in program, offering fair prices for your old phone.
    </li>
  </ul>
</Card>

      </motion.section>
    </div>
  );
};

export default AboutUs;
