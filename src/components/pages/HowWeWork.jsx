import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const steps = [
  {
    title: "1. Customer Reception & Issue Diagnosis",
    content: [
      "Greet the customer and listen carefully to their phone issue.",
      "Perform an initial diagnostic check to identify the problem (physical damage, battery issues, software errors, etc.).",
      "Provide an estimated repair cost and turnaround time based on the diagnosis.",
    ],
  },
  {
    title: "2. Data Backup & Security Check",
    content: [
      "Inform the customer about potential data loss and offer backup options.",
      "Ensure customer privacy and data security during the repair process.",
      "Obtain customer approval to proceed with the repair, especially if data reset is required.",
    ],
  },
  {
    title: "3. Repair Process Execution",
    content: [
      "Disassemble the phone using proper tools and techniques.",
      "Replace or repair the faulty components (screen, battery, charging port, motherboard, etc.).",
      "For software issues, perform necessary fixes such as updates, resets, or OS reinstallations.",
    ],
  },
  {
    title: "4. Quality Testing Before Delivery",
    content: [
      "Conduct thorough functionality tests (screen, buttons, charging, sound, network, camera, etc.).",
      "Ensure there are no additional issues caused during the repair process.",
      "Clean the phone to remove dust, fingerprints, and debris before returning it to the customer.",
    ],
  },
  {
    title: "5. Customer Notification & Pick-up",
    content: [
      "Inform the customer once the repair is completed and ready for pick-up.",
      "Show the customer the repaired phone and allow them to test it.",
      "Explain the repair work done and provide tips to maintain the phone's performance.",
    ],
  },
  {
    title: "6. Payment & Warranty Service",
    content: [
      "Provide an invoice detailing the repair service and parts used.",
      "Offer a warranty on the repaired parts and labor (typically 30-90 days).",
      "Ensure the customer is aware of after-service support in case of issues within the warranty period.",
    ],
  },
  {
    title: "7. Follow-up for Customer Satisfaction",
    content: [
      "Follow up with the customer after a few days to ensure the phone is working properly.",
      "Encourage customers to provide feedback and leave reviews for service improvement.",
      "Offer discounts or loyalty programs to retain customers for future repairs.",
    ],
  },
];

const HowWeWork = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gradient-to-t from-blue-400 to-gray-100"
    >
      <div className="max-w-4xl mx-auto p-4 mt-4 md:mt-12 lg:mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">HOW WE WORKS?</h2>
        <p className="text-center text-lg font-semibold mb-4">
          CRUCIAL STEPS THAT WE FOLLOW
        </p>
        <div>
          {steps.map((step, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center w-full p-4 bg-gray-200 rounded-md focus:outline-none"
              >
                <span className="font-bold text-xl">{step.title}</span>
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: expandedIndex === index ? "auto" : 0,
                  opacity: expandedIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden bg-transparent rounded-md"
              >
                <div className="p-4 text-black">
                  {step.content.map((line, lineIndex) => (
                    <p key={lineIndex} className="mb-2">
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default HowWeWork;
