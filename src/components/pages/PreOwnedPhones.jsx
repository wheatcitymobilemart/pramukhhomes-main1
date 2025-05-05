import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { PiCertificateFill } from "react-icons/pi";
import { GiCheckedShield,GiNetworkBars  } from "react-icons/gi";

const lookingOptions = [
  { icon: RiMoneyDollarBoxLine, title: "SAVE MONEY", description: "A pre-owned cell phone will cost considerably less than buying a brand new device. A pre-owned device is also a good option to consider before changing wireless plans that may be more expensive or on longer terms." },
  { icon: PiCertificateFill, title: "CERTIFIED BY PROS", description: "All of our pre-owned cell phones have been examined and refurbished by a Certified Cell Mechanic. All parts are tested for performance to ensure the device is working as intended by the manufacturer." },
  { icon: GiCheckedShield, title: "6 MONTH WARRANTY", description: "We offer a 6 month warranty on all of our devices. In the unlikely event your device should not operate correctly, we’ll make it right. Learn More." },
  { icon: GiNetworkBars , title: "ACTIVATE ON ANY NETWORK", description: "We only sell unlocked, IMEI-verified cell phones. Our cell phones can be activated on any cellular network and have been verified as never lost or stolen." },
];

const PreOwnedPhones = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <div
        className="relative text-center bg-cover bg-center  py-16 h-42 px-4"
        style={{
          backgroundImage:
            'url("https://cellmechanics.ca/wp-content/uploads/2022/04/PhoneMix-New.webp")',
        }}
      >
        <h1 className="text-2xl md:text-4xl font-bold text-white mt-4">
          Certified Pre-Owned Cell Phones
        </h1>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-10 text-center">
        <h2 className="text-xl md:text-2xl font-semibold">
          Buy A Certified Pre-Owned Cell Phone
        </h2>
        <p className="text-gray-700 mt-4 text-sm md:text-base">
          New phones today are becoming more and more expensive. Save some
          money and buy a refurbished cell phone that will cost considerably
          less than buying new. All cell phones have been inspected by one of
          our Wheat City Mobile Martand come with a 6-month warranty. Shop online or
          in one of our stores with the confidence of knowing you’re buying a
          tested device from a reputable seller. We offer refurbished iPhones,
          refurbished Samsungs, and more.
        </p>
      </div>

      {/* Product Categories - Redesigned */}
<div className="container mx-auto px-4 py-12">
  <h2 className="text-xl md:text-2xl font-semibold text-center mb-8">
    Explore Our Products
  </h2>
  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {[
      {
        src: "https://cellmechanics.ca/wp-content/uploads/2024/11/iPhones.webp",
        alt: "iPhones",
        label: "SHOP IPHONES",
      },
      {
        src: "https://cellmechanics.ca/wp-content/uploads/2024/11/Androids.webp",
        alt: "Android Phones",
        label: "SHOP ANDROID PHONES",
      },
      {
        src: "https://cellmechanics.ca/wp-content/uploads/2024/11/Accessories.webp",
        alt: "Accessories",
        label: "SHOP ACCESSORIES",
      },
    ].map((item, index) => (
      <motion.div
        key={index}
        className="relative overflow-hidden rounded-2xl shadow-md group transition-transform duration-500 hover:-translate-y-1"
        whileHover={{ scale: 1.03 }}
      >
        <img
          src={item.src}
          alt={item.alt}
          className="w-full h-64 object-cover transition-opacity duration-500 group-hover:opacity-80"
        />
        <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/70 to-transparent p-4">
          <button className="bg-white text-blue-700 font-semibold px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-yellow-500 hover:text-white shadow">
            {item.label}
          </button>
        </div>
      </motion.div>
    ))}
  </div>
</div>


      {/* Why Buy Section */}
      <div className="bg-white py-10 px-4">
        <h2 className="text-xl md:text-2xl font-semibold text-center">
          Why Buy A Wheat City Mobile MartCertified Pre-Owned Cell Phone?
        </h2>
        <motion.div
          ref={ref}
          className="flex flex-wrap justify-center items-center mt-12 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {lookingOptions.map((option, index) => (
            <motion.div
              key={index}
              className="text-center p-4 group w-full sm:w-1/2 lg:w-1/4"
              variants={itemVariants}
            >
              <div className="flex justify-center items-center mb-4">
                <div className="rounded-3xl shadow-xl bg-blue-700 transition-colors duration-700 ease-out group-hover:bg-yellow-600 p-4">
                  <option.icon className="text-white text-3xl md:text-4xl" />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold">{option.title}</h3>
              <p className="text-sm md:text-base mt-2">{option.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-6">
          <button className="bg-blue-700 transition-colors duration-700 ease-out hover:bg-yellow-600 text-white px-6 py-2 rounded">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreOwnedPhones;