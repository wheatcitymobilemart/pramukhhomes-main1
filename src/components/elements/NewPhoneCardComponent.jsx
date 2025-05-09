import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { FaShareAlt, FaRegStar } from "react-icons/fa";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const NewPhoneCardComponent = ({
  images,
  name,
  price,
  model,
  company,
  tag,
  currentImage,
  nextImage,
  prevImage,
}) => {
  return (
    <Card className="max-w-[24rem] w-full overflow-hidden h-[30rem]">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="relative"
      >
        <div className="relative h-[16rem] w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={images[currentImage]}
              alt="Phone"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4 }}
              className="h-full w-full object-cover"
            />
          </AnimatePresence>

          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          >
            <MdOutlineArrowBackIos className="text-black" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          >
            <MdOutlineArrowForwardIos className="text-black" />
          </button>
        </div>
      </CardHeader>
      <CardBody className="flex-grow">
        <Typography variant="h4" color="blue-gray">
          {name}
        </Typography>
        <Typography variant="small" color="gray" className="mt-3 font-normal">
          Price: {price}
        </Typography>
        <Typography variant="small" color="gray" className="mt-1 font-normal">
          Model: {model}
        </Typography>
        <Typography variant="small" color="gray" className="mt-1 font-normal">
          Company: {company}
        </Typography>
        <Typography variant="small" color="blue" className="mt-3 font-semibold">
          {tag}
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <FaShareAlt className="text-gray-600" />
          <FaRegStar className="text-gray-600" />
        </div>
      </CardFooter>
    </Card>
  );
};

export default NewPhoneCardComponent;
