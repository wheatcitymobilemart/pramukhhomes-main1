import React, { useState } from "react";
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

const DeviceRepairBooking = () => {
  const [selectedDevice, setSelectedDevice] = useState(null);

  const devices = [
    { name: "Other", image: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fac839d283c0da1e41ccacc88b32954a7.cdn.bubble.io%2Ff1655754652858x551740936354916000%2F515588-200.png?w=96&h=96&auto=compress&dpr=1&fit=max" },
    { name: "Apple iPhone", image: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fac839d283c0da1e41ccacc88b32954a7.cdn.bubble.io%2Ff1591657323342x484592459219140000%2Fip11%2520promax.png?w=96&h=96&auto=compress&dpr=1&fit=max" },
    { name: "Apple iPad", image: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fac839d283c0da1e41ccacc88b32954a7.cdn.bubble.io%2Ff1650386652456x461199547174957700%2Fimages.jpg?w=96&h=96&auto=compress&dpr=1&fit=max" },
    { name: "Samsung", image: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fac839d283c0da1e41ccacc88b32954a7.cdn.bubble.io%2Ff1591657344506x998662844535159900%2FNote10plus.png?w=96&h=96&auto=compress&dpr=1&fit=max" },
    { name: "Battery", image: "https://tse3.mm.bing.net/th?id=OIP.WeBVUnTk8T0wCVKTXh89yAHaFU&w=340&h=340&c=7" },
    { name: "Screen", image: "https://d3nevzfk7ii3be.cloudfront.net/igi/nKTJX11kD1JwUlnk.full" },
    { name: "Charging Port", image: "https://i.ytimg.com/vi/qROumL9LLUM/maxresdefault.jpg" },
  ];

  const models = {
    "Apple iPhone": [
      { name: "iPhone 15 Series", image: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fac839d283c0da1e41ccacc88b32954a7.cdn.bubble.io%2Ff1650484113460x817168539646562000%2FiPhone-13.png-img?w=384&h=&auto=compress&dpr=1&fit=max" },
      { name: "iPhone 14 Series", image: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fac839d283c0da1e41ccacc88b32954a7.cdn.bubble.io%2Ff1650484113460x817168539646562000%2FiPhone-13.png-img?w=384&h=&auto=compress&dpr=1&fit=max" },
      { name: "iPhone 13 Series", image: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fac839d283c0da1e41ccacc88b32954a7.cdn.bubble.io%2Ff1650484068941x299680912284330940%2FiPhone-13-ProMax.png-img?w=384&h=&auto=compress&dpr=1&fit=max" },
      { name: "iPhone 12 Series", image: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fac839d283c0da1e41ccacc88b32954a7.cdn.bubble.io%2Ff1634225187354x425636073260317700%2F1-513da45be2-iphone-12-pro-max-graphite.jpg-img?w=384&h=&auto=compress&dpr=1&fit=max" },
      { name: "iPhone 11 Series", image: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fac839d283c0da1e41ccacc88b32954a7.cdn.bubble.io%2Ff1591216754478x856860427574645600%2Fiphone-11-pro-max-midnight-green-select-2019.png-img?w=384&h=&auto=compress&dpr=1&fit=max" },
      { name: "iPhone X Series(X,XR,XS,XS Max)", image: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fac839d283c0da1e41ccacc88b32954a7.cdn.bubble.io%2Ff1591631754228x965867076669263400%2Fip%2520x%2520B.PNG-img?w=384&h=&auto=compress&dpr=1&fit=max" },
      { name: "iPhone 8 Series", image: "https://i5.walmartimages.com/asr/8c18c65e-4ca5-4a79-81d5-a86fa08e485e_1.0913880f10329a61618a972dc2ddccdd.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff" },
      { name: "iPhone 7 Series", image: "https://tse4.mm.bing.net/th?id=OIP.4AamZYllu-p9MzdVjOdkTgHaHa&pid=Api&P=0&h=180" },
      { name: "iPhone 6 Series", image: "https://images.pexels.com/photos/8204032/pexels-photo-8204032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { name: "iPhone 5 Series", image: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fac839d283c0da1e41ccacc88b32954a7.cdn.bubble.io%2Ff1591631809456x680470929609558800%2Fip8%2520B.PNG-img?w=384&h=&auto=compress&dpr=1&fit=max" },

    ],
    "Apple iPad": [
      { name: "iPad Pro", image: "https://via.placeholder.com/150" },
      { name: "iPad Air", image: "https://via.placeholder.com/150" },
      { name: "iPad Mini", image: "https://via.placeholder.com/150" },
    ],
    "Samsung": [
      { name: "Galaxy S23", image: "https://via.placeholder.com/150" },
      { name: "Galaxy Note 20", image: "https://via.placeholder.com/150" },
      { name: "Galaxy Z Fold", image: "https://via.placeholder.com/150" },
    ],
    "Battery": [
      { name: "Battery Replacement", image: "https://via.placeholder.com/150" },
    ],
    "Screen": [
      { name: "Screen Replacement", image: "https://via.placeholder.com/150" },
    ],
    "Charging Port": [
      { name: "Charging Port Repair", image: "https://via.placeholder.com/150" },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 lg:p-10">
      <h1 className="text-xl sm:text-2xl font-bold text-center">Get A Quote - Book A Repair</h1>
      <div className="flex flex-col sm:flex-row justify-between text-center my-6 gap-4">
        <div className="flex-1">
          <span className="text-orange-500 text-2xl font-bold">1</span>
          <p>Choose a location.</p>
        </div>
        <div className="flex-1">
          <span className="text-orange-500 text-2xl font-bold">2</span>
          <p>Tell us about your device for an instant quote.</p>
        </div>
        <div className="flex-1">
          <span className="text-orange-500 text-2xl font-bold">3</span>
          <p>Choose a time and date.</p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 sm:p-6">
        {selectedDevice && models[selectedDevice] ? (
          <div>
            <button
              onClick={() => setSelectedDevice(null)}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg mb-4"
            >
              ← Back
            </button>
            <h2 className="text-lg sm:text-xl font-semibold text-center">Select Your Model</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-96 overflow-y-auto">
              {models[selectedDevice].map((model) => (
                <Card key={model.name} className="p-4 text-center">
                  <CardHeader floated={false} shadow={false} className="h-32">
                    <img src={model.image} alt={model.name} className="w-full h-full object-cover" />
                  </CardHeader>
                  <CardBody>
                    <Typography className="font-medium">{model.name}</Typography>
                    <button className="mt-2 px-4 py-2 bg-orange-500 text-white rounded-lg">
                      Select Service
                    </button>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center">What type of device do you have?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-96 overflow-y-auto">
              {devices.map((device) => (
                <button
                  key={device.name}
                  onClick={() => setSelectedDevice(device.name)}
                  className="w-full flex items-center p-4 border rounded-lg hover:bg-gray-100 transition"
                >
                  <img src={device.image} alt={device.name} className="w-12 h-12 rounded-md mr-4" />
                  <span className="text-lg font-medium">{device.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const CellPhoneShop = () => {
  return (
    <div className="bg-gradient-to-t from-blue-400 to-gray-100 py-16 px-6 lg:px-24 mt-4 md:mt-12 lg:mt-16">
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
      <DeviceRepairBooking />
    </div>
  );
};

export default CellPhoneShop;
