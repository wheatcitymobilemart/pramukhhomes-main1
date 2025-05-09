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
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedRepairOption, setSelectedRepairOption] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [screenOption, setScreenOption] = useState(""); // State for screen option


  const devices = [
    { name: "Apple iPhone", image: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fac839d283c0da1e41ccacc88b32954a7.cdn.bubble.io%2Ff1591657323342x484592459219140000%2Fip11%2520promax.png?w=96&h=96&auto=compress&dpr=1&fit=max" },
    { name: "Apple iPad", image: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fac839d283c0da1e41ccacc88b32954a7.cdn.bubble.io%2Ff1650386652456x461199547174957700%2Fimages.jpg?w=96&h=96&auto=compress&dpr=1&fit=max" },
    { name: "Samsung", image: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fac839d283c0da1e41ccacc88b32954a7.cdn.bubble.io%2Ff1591657344506x998662844535159900%2FNote10plus.png?w=96&h=96&auto=compress&dpr=1&fit=max" },
    { name: "Battery", image: "https://tse3.mm.bing.net/th?id=OIP.WeBVUnTk8T0wCVKTXh89yAHaFU&w=340&h=340&c=7" },
    { name: "Screen", image: "https://d3nevzfk7ii3be.cloudfront.net/igi/nKTJX11kD1JwUlnk.full" },
    { name: "Charging Port", image: "https://i.ytimg.com/vi/qROumL9LLUM/maxresdefault.jpg" },
    { name: "Other", image: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fac839d283c0da1e41ccacc88b32954a7.cdn.bubble.io%2Ff1655754652858x551740936354916000%2F515588-200.png?w=96&h=96&auto=compress&dpr=1&fit=max" },

  ];

  const models = {
    "Apple iPhone": [
      { name: "iPhone 15 Series", image: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fac839d283c0da1e41ccacc88b32954a7.cdn.bubble.io%2Ff1650484113460x817168539646562000%2FiPhone-13.png-img?w=384&h=&auto=compress&dpr=1&fit=max" },
      { name: "iPhone 14 Series", image: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fac839d283c0da1e41ccacc88b32954a7.cdn.bubble.io%2Ff1650484113460x817168539646562000%2FiPhone-13.png-img?w=384&h=&auto=compress&dpr=1&fit=max" },
      { name: "iPhone 13 Series", image: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fac839d283c0da1e41ccacc88b32954a7.cdn.bubble.io%2Ff1650484068941x299680912284330940%2FiPhone-13-ProMax.png-img?w=384&h=&auto=compress&dpr=1&fit=max" },
      { name: "iPhone 12/12 PRO Series", image: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fac839d283c0da1e41ccacc88b32954a7.cdn.bubble.io%2Ff1634225187354x425636073260317700%2F1-513da45be2-iphone-12-pro-max-graphite.jpg-img?w=384&h=&auto=compress&dpr=1&fit=max" },
      { name: "iPhone 12 MINI Series", image: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fac839d283c0da1e41ccacc88b32954a7.cdn.bubble.io%2Ff1634225187354x425636073260317700%2F1-513da45be2-iphone-12-pro-max-graphite.jpg-img?w=384&h=&auto=compress&dpr=1&fit=max" },
      { name: "iPhone 12 PRO MAX", image: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fac839d283c0da1e41ccacc88b32954a7.cdn.bubble.io%2Ff1634225187354x425636073260317700%2F1-513da45be2-iphone-12-pro-max-graphite.jpg-img?w=384&h=&auto=compress&dpr=1&fit=max" },
      { name: "iPhone 11/11 Pro Series", image: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fac839d283c0da1e41ccacc88b32954a7.cdn.bubble.io%2Ff1591216754478x856860427574645600%2Fiphone-11-pro-max-midnight-green-select-2019.png-img?w=384&h=&auto=compress&dpr=1&fit=max" },
      { name: "iPhone 11 Pro MAX Series", image: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fac839d283c0da1e41ccacc88b32954a7.cdn.bubble.io%2Ff1591216754478x856860427574645600%2Fiphone-11-pro-max-midnight-green-select-2019.png-img?w=384&h=&auto=compress&dpr=1&fit=max" },
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
  const repairOptions = [
    {
      name: "Screen Replacement",
      image: "https://tse2.mm.bing.net/th?id=OIP.mxcA3bLfAvR5bGSMp1WUKwHaFj&w=355&h=355&c=7"
    },
    {
      name: "Charging Port Replacement",
      image: "https://tse3.mm.bing.net/th?id=OIP.B1ruV6qgWUK599Epyx1AVAHaFj&w=355&h=355&c=7"
    },
    {
      name: "Back Glass Replacement",
      image: "https://via.placeholder.com/150?text=Back+Glass"
    },
    {
      name: "Battery Replacement",
      image: "https://tse1.mm.bing.net/th?id=OIP.VM17EDx5ja0ckMUV1wX0MwHaHa&w=474&h=474&c=7"
    },

  ];
  const repairPrices = {
    "iPhone 5 Series": {
      "Back Glass Replacement": "$100",
      "Charging Port Replacement": "$59",
      "Battery Replacement": "$59",
      "Screen Replacement": "Depends on the type of screen",
    },
    "iPhone 6 Series": {
      "Back Glass Replacement": "$115",
      "Charging Port Replacement": "$59",
      "Battery Replacement": "$65",
      "Screen Replacement": "Depends on the type of screen",
    },
    "iPhone 7 Series": {
      "Back Glass Replacement": "$139",
      "Charging Port Replacement": "$69",
      "Battery Replacement": "$65",
      "Screen Replacement": "Depends on the type of screen",
    },
    "iPhone 8 Series": {
      "Back Glass Replacement": "$139",
      "Charging Port Replacement": "$69",
      "Battery Replacement": "$65",
      "Screen Replacement": "Depends on the type of screen",
    },
    "iPhone 7+, 8+": {
      "Back Glass Replacement": "$149",
      "Charging Port Replacement": "$79",
      "Battery Replacement": "$69",
      "Screen Replacement": "Depends on the type of screen",
    },
    "iPhone X Series(X,XR,XS,XS Max)": {
      "Back Glass Replacement": "$179",
      "Charging Port Replacement": "$89",
      "Battery Replacement": "$79",
      "Screen Replacement": "Depends on the type of screen",
    },
    "iPhone 11/11 Pro Series": {
      "Back Glass Replacement": "$199",
      "Charging Port Replacement": "$119",
      "Battery Replacement": "$85",
      "Screen Replacement": "Depends on the type of screen",
    },
    "iPhone 11 PRO MAX Series": {
      "Back Glass Replacement": "$209",
      "Charging Port Replacement": "$129",
      "Battery Replacement": "$85",
      "Screen Replacement": "Depends on the type of screen",
    },
    "iPhone 12, 12 PRO Series": {
      "Back Glass Replacement": "$209",
      "Charging Port Replacement": "$109",
      "Battery Replacement": "$89",
      "Screen Replacement": "Depends on the type of screen",
    },
    "iPhone 12 MINI Series": {
      "Back Glass Replacement": "$209",
      "Charging Port Replacement": "$109",
      "Battery Replacement": "$85",
      "Screen Replacement": "Depends on the type of screen",
    },
    "iPhone 12 PRO MAX": {
      "Back Glass Replacement": "$249",
      "Charging Port Replacement": "$129",
      "Battery Replacement": "$95",
      "Screen Replacement": "Depends on the type of screen",
    },
    "iPhone 13, 13 MINI": {
      "Back Glass Replacement": "$279",
      "Charging Port Replacement": "$119",
      "Battery Replacement": "$95",
      "Screen Replacement": "Depends on the type of screen",
    },
    "iPhone 13 PRO, 13 PRO MAX": {
      "Back Glass Replacement": "$299",
      "Charging Port Replacement": "$129",
      "Battery Replacement": "$99",
      "Screen Replacement": "Depends on the type of screen",
    },
    "iPhone 14, 14 PLUS": {
      "Back Glass Replacement": "N/A",
      "Charging Port Replacement": "$119",
      "Battery Replacement": "$99",
      "Screen Replacement": "Depends on the type of screen",
    },
    "iPhone 14 PRO, 14 PRO MAX": {
      "Back Glass Replacement": "$319",
      "Charging Port Replacement": "$129",
      "Battery Replacement": "$109",
      "Screen Replacement": "Depends on the type of screen",
    },
  };
  

  const handleProceedToForm = () => {
    setShowForm(true);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      phone,
      date,
      time,
      screenOption: selectedRepairOption === "Screen Replacement" ? screenOption : null, 
      selectedDevice, 
      selectedModel, 
      selectedRepairOption, 
      repairPrices: repairPrices[selectedModel]?.[selectedRepairOption] || "N/A",
    };
    console.log("Form Data:", formData); // Debugging: Log formData to ensure values are correct
    try {
      const response = await fetch("http://localhost:5000/api/send-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Booking submitted and email sent!");
      } else {
        alert("Failed to send booking email.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred.");
    }
  };

  
  return (
    <div className="max-w-5xl mx-auto p-6 sm:p-8 md:p-10 bg-gradient-to-b from-gray-100 to-white rounded-lg shadow-lg">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">
        Get A Quote - Book A Repair
      </h1>
      {/* <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">
      Get A Quote - Book A Repair
    </h1>
    <div className="flex flex-col sm:flex-row justify-between text-center my-6 gap-6">
      <div className="flex-1">
        <span className="text-blue-500 text-3xl font-bold">1</span>
        <p className="text-gray-700 mt-2">Choose a location.</p>
      </div>
      <div className="flex-1">
        <span className="text-blue-500 text-3xl font-bold">2</span>
        <p className="text-gray-700 mt-2">Tell us about your device for an instant quote.</p>
      </div>
      <div className="flex-1">
        <span className="text-blue-500 text-3xl font-bold">3</span>
        <p className="text-gray-700 mt-2">Choose a time and date.</p>
      </div>
    </div> */}
      {showForm ? (
        <div>
              <button
      onClick={() => setShowForm(false)}
      className="mt-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
    >
      ← Back
    </button>
          <h2 className="text-lg sm:text-xl font-semibold text-center text-gray-800 mb-6">
            Confirm Your Booking
          </h2>
          <div className="mb-4">
            <p className="text-gray-700">
              <strong>Selected Device:</strong> {selectedDevice}
            </p>
            <p className="text-gray-700">
              <strong>Selected Model:</strong> {selectedModel}
            </p>
            <p className="text-gray-700">
              <strong>Selected Repair Option:</strong> {selectedRepairOption}
            </p>
       
            <p className="text-gray-700">
            <strong>Repair Cost:</strong>{" "}
            {repairPrices[selectedModel]?.[selectedRepairOption] || "Select a valid model and repair option"}
          </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
          {selectedRepairOption === "Screen Replacement" && (
        <div>
          <label className="block text-gray-700 font-medium">Screen Options</label>
          <select
            value={screenOption}
            onChange={(e) => setScreenOption(e.target.value)} // Bind to state
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Standard Screen">Standard Screen - $75</option>
            <option value="Premium Screen">Premium Screen - $85</option>
            <option value="Ultra Screen">Ultra Screen - $150</option>
          </select>
        </div>
      )}
             <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Time</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      ) : selectedDevice && selectedModel ? (
        <div>
          <button
            onClick={() => setSelectedModel(null)}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg mb-4 hover:bg-gray-300 transition"
          >
            ← Back
          </button>
          <h2 className="text-lg sm:text-xl font-semibold text-center text-gray-800 mb-6">
            Select Repair Type for {selectedModel}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {repairOptions.map((option) => (
              <Card
                key={option.name}
                className="p-4 text-center shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 rounded-2xl"
              >
                <CardHeader
                  floated={false}
                  shadow={false}
                  className="h-48 flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg"
                >
                  <img
                    src={option.image}
                    alt={option.name}
                    className="w-full h-full object-contain rounded-md"
                  />
                </CardHeader>
                <CardBody>
                  <Typography className="font-medium text-gray-800">
                    {option.name}
                  </Typography>
                  <button
              onClick={() => {
                setSelectedRepairOption(option.name); // Set the selected repair option
                setShowForm(true); // Proceed to the form
              }}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Select Repair Option
            </button>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      ) : selectedDevice && models[selectedDevice] ? (
        <div>
          <button
            onClick={() => setSelectedDevice(null)}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg mb-4 hover:bg-gray-300 transition"
          >
            ← Back
          </button>
          <h2 className="text-lg sm:text-xl font-semibold text-center text-gray-800 mb-6">
            Select Your Model
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {models[selectedDevice].map((model) => (
              <Card
                key={model.name}
                className="p-4 text-center shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 rounded-2xl"
              >
                <CardHeader
                  floated={false}
                  shadow={false}
                  className="h-48 flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg"
                >
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-contain rounded-md"
                  />
                </CardHeader>
                <CardBody>
                  <Typography className="font-medium text-gray-800">
                    {model.name}
                  </Typography>
                  <button
                    onClick={() => setSelectedModel(model.name)}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                  >
                    Select Service
                  </button>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-6 text-center text-gray-800">
            What type of device do you have?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {devices.map((device) => (
              <button
                key={device.name}
                onClick={() => setSelectedDevice(device.name)}
                className="w-full flex items-center p-4 border rounded-lg bg-gradient-to-b from-gray-100 to-white shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={device.image}
                    alt={device.name}
                    className="w-16 h-16 rounded-full shadow-md transform hover:scale-110 transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <span className="text-lg font-medium text-gray-800 ml-4">
                  {device.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
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
