import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { logo } from "../../assets";
import { logo2 } from "../../assets";

const currentYear = new Date().getFullYear();

const Footer = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/Projects" },
    { name: "How We Work", href: "/HowWeWork" },
    { name: "Blogs", href: "/Blogs" },
    { name: "Contact Us", href: "/ContactUs" },
  ];

  // Scroll to top on route change
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <footer className="bg-[#0b1121] text-white py-10 px-5 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1: About Section */}
        <div>
          <img src={logo2} alt="Wheat City Mobile Mart" className="h-16 w-40 md:mb-4" />

          <h2 className="text-2xl font-bold mb-5">Wheat City Mobile Mart</h2>
          <p className="mb-4">
            Thank you for visiting our website. Connect with us over socials.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h2 className="text-2xl font-bold mb-5">Quick Links</h2>
          <ul className="space-y-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.href} className="hover:text-amber-500">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-5">Contact Info</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <div className="text-white text-center sm:text-left mb-4 sm:mb-0">
                <span className="font-bold text-yellow-600"> Phone:</span>
                <span className="transition duration-700 ease-in-out hover:text-yellow-600">
                  <a href="tel:+12047250858"> +12047250858</a>
                </span>{" "}
              </div>
            </li>
            <li className="flex items-center">
              <span className="font-bold text-yellow-600"> Email:</span> <br />
              <span className="transition duration-700 ease-in-out hover:text-yellow-600">
                <a href="mailto:wheatcitymobilemart@gmail.com">&nbsp;wheatcitymobilemart@gmail.com</a>
              </span>
            </li>
            <li className="flex items-center">
              <div className="text-white group sm:text-left mb-4 sm:mb-0 ml-0">
                <span className="font-bold   text-yellow-600"> Address:</span>
                <br />{" "}
                <a
                  href="/"
                  target="_blank"
                  className="transition-all  ease-in-out group-hover:text-yellow-600"
                >
                  <span className="transition-all  ease-in-out group-hover:text-yellow-600">
                  710 18th St, Brandon, MB R7B1K7
                  <br />
                  </span>
                  Wheat City Mobile Mart
                  <br />
                  <span className="transition-all  ease-in-out group-hover:text-yellow-600">
                    Canada
                  </span>
                </a>
              </div>
            </li>
          </ul>
          <div className="flex mt-4 space-x-4">
            <div className=" flex flex-col justify-center items-center space-y-2 group">
              <a
                href="https://www.facebook.com/people/Wheat-City-Mobile-Mart/61560754343633/"
                target="_new"
                className="transition-all ease-out duration-500 group-hover:text-blue-900"
              >
                <FaFacebookF size={24} />
              </a>
            </div>
            <div className=" flex flex-col justify-center items-center space-y-2 group mt-2">
              <a
                href="https://www.instagram.com/"
                target="_new"
                className="group-hover:text-pink-500"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-5 text-center">
        <div
          variant="small"
          className="-mb-1 mt-3 text-center font-normal text-white md:mb-0"
        >
          &copy; {currentYear}{" "}
          <span className="text-lime-300 transition duration-700 hover:text-lime-600">
            <a href="https://www.dreamitinfotech.in/" target="new">Wheat City Mobile Mart</a>.
          </span>{" "}
          All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
