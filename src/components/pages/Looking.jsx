import React from "react";
import { FaTools } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaHeadphones, FaMobile, FaTablet } from "react-icons/fa6";

const lookingOptions = [
  { icon: FaMobile, title: "Mobile Phones", description: "Discover the latest smartphones with cutting-edge technology and unbeatable prices." },
  { icon: FaHeadphones, title: "Mobile Accessories", description: "Enhance your mobile experience with top-quality accessories and gadgets." },
  { icon: FaTablet, title: "iPads & Tablets", description: "Find the perfect tablet or iPad for work, play, and everything in between." },
  { icon: FaTools, title: "Phone & Tablet Repairs", description: "Fast and reliable repair services for all mobile phones and tablets." },
]
;

const Looking = () => {
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
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <div className="relative h-auto bg-gradient-to-t from-teal-500 to-teal-200 rounded-t-2xl -mt-3 pb-4 md:pb-12 lg:pb-16 border-t-2 border-white z-10">
      <div className="absolute top-0 left-0 w-full">
        <div className="flex justify-center items-center -mt-8 -mb-4">
          <div className="p-4 flex-wrap flex justify-center items-center border-t-2 border-white text-center bg-black text-white font-bold text-2xl md:text-4xl rounded-xl shadow-[0_4px_10px_rgba(255,255,255,0.5)]">
            What Are You Looking For?
          </div>
        </div>
      </div>

      <motion.div
        ref={ref}
        className="flex flex-wrap justify-around items-center mt-12 md:mt-28 overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {lookingOptions.map((option, index) => (
          <motion.div key={index} className="text-center p-4 group mb-8 md:mb-0 w-full md:w-1/2 lg:w-1/4" variants={itemVariants}>
            <div className="flex justify-center items-center mb-4">
              <div className="rounded-3xl shadow-xl bg-blue-700 transition-colors duration-700 ease-out group-hover:bg-yellow-600 p-4 md:p-6">
                <option.icon className="text-white text-3xl md:text-4xl" />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl text-white font-bold">{option.title}</h3>
            <p className="text-sm md:text-base text-white mt-2">{option.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Looking;
