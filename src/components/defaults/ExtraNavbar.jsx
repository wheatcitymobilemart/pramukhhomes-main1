import React from "react";
import { navbarStyles } from "../../styles/styles";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { logo2 } from "../../assets";

const ExtraNavbar = () => {
  return (
    <>
      <header className={`${navbarStyles.backgroundColor} hidden md:block`}>
        {/* Contact Info */}
        <div>
          <p
            className={`${navbarStyles.contactInfoColor} flex float-end mt-1 space-x-4 mr-4`}
          >
            <a href="tel:+12047250858" className="group">
              Contact Us Today{" "}
              <span className="transition-all duration-300 ease-in-out transform group-hover:text-green-500">
                +12047250858
              </span>
            </a>

            <a
              href="https://www.facebook.com/people/Wheat-City-Mobile-Mart/61560754343633/"
              target="_new"
              className="transition-all ease-out duration-500 hover:text-blue-900"
            >
              <FaFacebookF size={20} />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_new"
              className="transition-all ease-out duration-500 hover:text-pink-500"
            >
              <FaInstagram size={20} />
            </a>
          </p>
        </div>

        {/* Logo Section */}
        <div
          className={`bg-transparent rounded-full container mx-auto flex justify-center items-center p-4`}
        >
          <img
            src={logo2}
            alt="Better Business Sales"
            className="h-28 w-1/2 bg-blue-50"
          />
        </div>
      </header>
    </>
  );
};

export default ExtraNavbar;
