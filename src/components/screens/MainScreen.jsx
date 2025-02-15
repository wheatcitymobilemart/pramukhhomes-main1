import React from "react";
import { Home, NewAdded, Looking, ClientTestimonials } from "../pages";
import { useNavigate } from "react-router-dom";

const MainScreen = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/ContactUs");
  };

  return (
    <div>
      <Home />
      <div className="flex justify-center items-center bg-blue-800 font-body text-3xl text-white py-2 underline underline-offset-4 rounded-t-2xl -mt-4">
        Recent Products
      </div> 
       <NewAdded />
      <div className="h-12 bg-gradient-to-t from-blue-500 to-blue-500"></div>
      <Looking />
      <div className="container mx-auto p-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">
        Ready to get your phone fixed?
        </h2>
        <button onClick={handleClick} className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700">
          Request Quote
        </button>
      </div>
      <div>
        <ClientTestimonials />
      </div>
    </div>
  );
};

export default MainScreen;
