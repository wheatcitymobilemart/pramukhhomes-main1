import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { Link, useLocation } from "react-router-dom";
import { navbarStyles } from "../../styles/styles";
import { logo2 } from "../../assets";

const sidebarVariants = {
  hidden: { x: "-100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 18,
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const Navbar = () => {
  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Get Quotation ",
      href: "#",
      dropdown: [
        { name: "Iphone", href: "/DeviceRepairBooking" },
        { name: "Samsung", href: "/Samsung" },
        { name: "Battery", href: "/WhatWeDo" },
        { name: "Screen", href: "/WhatWeDo" },
        { name: "Charging Port", href: "/WhatWeDo" },
      
      ],
    },
    { name: "Accessories", href: "/Projects" },
    { name: "Our Services", href: "/OurServices" },
    { name: "Cell Phone", href: "/CellPhoneShop" },
    {
      name: "Our Company",
      href: "#",
      dropdown: [
        { name: "Why Us", href: "/WhyUs" },
        { name: "What We Do", href: "/WhatWeDo" },
        { name: "How We Work", href: "/HowWeWork" },
        { name: "About Us", href: "/AboutUs" },
        { name: "Blogs", href: "/Blogs" },
      ],
    },
    { name: "Contact Us", href: "/ContactUs" },
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [dropdownStates, setDropdownStates] = useState({});
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = (index) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const closeDropdown = (index) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [index]: false,
    }));
  };

  const closeAllDropdowns = () => {
    setDropdownStates({});
  };

  const [scrollY, setScrollY] = useState(0);
  const [hideExtraNavbar, setHideExtraNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setHideExtraNavbar(true);
      } else if (currentScrollY > scrollY) {
        setHideExtraNavbar(false);
      }

      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  // Helper function to check if the current path matches any dropdown item
  const isDropdownActive = (dropdown) => {
    return dropdown.some((subItem) => location.pathname === subItem.href);
  };

  return (
    <header className={navbarStyles.backgroundColor}>
      <div
        className={`${navbarStyles.backgroundColor} container mx-auto flex justify-center border-b-2 border-blue-100 items-center p-4 ${
          hideExtraNavbar ? "hidden" : ""
        }`}
      >
        <img src={logo2} alt="Better Business Sales" className="h-28 w-1/2 bg-blue-50 " />
      </div>
      {isMobileOrTablet ? (
        <nav className={navbarStyles.backgroundColor}>
          <div className="container mx-auto flex justify-between items-center p-4">
            <FaBars
              className={`${navbarStyles.headerTextColor} h-6 w-6`}
              onClick={toggleSidebar}
            />

            <motion.div
              className={`fixed top-0 left-0 h-full w-3/4 ${navbarStyles.backgroundColor} z-50 p-4 ${
                isSidebarOpen ? "block" : "hidden"
              }`}
              initial="hidden"
              animate={isSidebarOpen ? "visible" : "hidden"}
              variants={sidebarVariants}
            >
              <div className="flex justify-end mb-4">
                <FaTimes
                  className={`${navbarStyles.headerTextColor} h-6 w-6`}
                  onClick={toggleSidebar}
                />
              </div>
              <motion.ul
                className={`${navbarStyles.headerTextColor} space-y-4`}
              >
                {navItems.map((item, index) => (
                  <motion.li
                    key={index}
                    className="relative"
                    variants={itemVariants}
                  >
                    {item.dropdown ? (
                      <div className="relative">
                        <button
                          className={`block px-4 py-2 rounded-lg transition-all duration-500 ease-in-out ${
                            isDropdownActive(item.dropdown)
                              ? `${navbarStyles.activeTextColor} ${navbarStyles.activeBgColor}`
                              : `${navbarStyles.headerTextColor} ${navbarStyles.defaultBgColor} hover:${navbarStyles.hoverTextColor} hover:${navbarStyles.hoverBgColor}`
                          }`}
                          onClick={() => toggleDropdown(index)}
                        >
                          {item.name}
                          <FaChevronDown className="inline-block ml-2" />
                        </button>
                        {dropdownStates[index] && (
                          <motion.ul
                            className="absolute left-0 top-full mt-2 bg-transparent shadow-lg rounded-lg w-full z-50"
                            initial="hidden"
                            animate={
                              dropdownStates[index] ? "visible" : "hidden"
                            }
                            variants={sidebarVariants}
                          >
                            {item.dropdown.map((subItem, subIndex) => (
                              <motion.li key={subIndex} variants={itemVariants}>
                                <Link
                                  to={subItem.href}
                                  className={`block px-4 py-2 rounded-md transition-all duration-500 ease-in-out ${
                                    location.pathname === subItem.href
                                      ? `${navbarStyles.activeTextColor} ${navbarStyles.activeBgColor}`
                                      : `${navbarStyles.headerTextColor} ${navbarStyles.defaultBgColor} hover:${navbarStyles.hoverTextColor} hover:${navbarStyles.hoverBgColor}`
                                  }`}
                                  onClick={() => {
                                    closeAllDropdowns();
                                    toggleSidebar();
                                  }}
                                >
                                  {subItem.name}
                                </Link>
                              </motion.li>
                            ))}
                          </motion.ul>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className={`block px-4 py-2 rounded-lg transition-all duration-500 ease-in-out ${
                          location.pathname === item.href
                            ? `${navbarStyles.activeTextColor} ${navbarStyles.activeBgColor}`
                            : `${navbarStyles.headerTextColor} ${navbarStyles.defaultBgColor} hover:${navbarStyles.hoverTextColor} hover:${navbarStyles.hoverBgColor}`
                        }`}
                        onClick={() => {
                          closeAllDropdowns();
                          toggleSidebar();
                        }}
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </nav>
      ) : (
        <nav className={navbarStyles.backgroundColor}>
          <motion.div
            className="container mx-auto flex justify-center items-center p-4"
            initial="hidden"
            animate="visible"
            variants={sidebarVariants}
          >
            <div className="flex items-center relative">
              <motion.ul
                className="flex space-x-6"
                initial="hidden"
                animate="visible"
                variants={sidebarVariants}
              >
                {navItems.map((item, index) => (
                  <motion.li
                    key={index}
                    className="relative"
                    variants={itemVariants}
                  >
                    {item.dropdown ? (
                      <div className="relative">
                        <button
                          className={`block px-4 py-2 rounded-full bg-transparent transition-all duration-700 ease-in-out ${
                            isDropdownActive(item.dropdown)
                              ? `${navbarStyles.activeTextColor} ${navbarStyles.activeBgColor}`
                              : `${navbarStyles.headerTextColor} ${navbarStyles.defaultBgColor} hover:text-white hover:bg-gray-800`
                          }`}
                          onClick={() => toggleDropdown(index)}
                        >
                          {item.name}
                          <FaChevronDown className="inline-block ml-2" />
                        </button>
                        {dropdownStates[index] && (
                          <motion.ul
                            className="absolute left-0 top-full mt-2 bg-transparent shadow-lg rounded-lg w-48 z-50"
                            initial="hidden"
                            animate={
                              dropdownStates[index] ? "visible" : "hidden"
                            }
                            variants={sidebarVariants}
                          >
                            {item.dropdown.map((subItem, subIndex) => (
                              <motion.li
                                key={subIndex}
                                variants={itemVariants}
                              >
                                <Link
                                  to={subItem.href}
                                  className={`block px-4 py-2 rounded-full transition-all duration-500 ease-in-out ${
                                    location.pathname === subItem.href
                                      ? `${navbarStyles.activeTextColor} ${navbarStyles.activeBgColor}`
                                      : `${navbarStyles.headerTextColor} ${navbarStyles.defaultBgColor} hover:text-white hover:bg-gray-800`
                                  }`}
                                  onClick={closeAllDropdowns}
                                >
                                  {subItem.name}
                                </Link>
                              </motion.li>
                            ))}
                          </motion.ul>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className={`block px-4 py-2 rounded-full bg-transparent transition-all duration-500 ease-in-out ${
                          location.pathname === item.href
                            ? `${navbarStyles.activeTextColor} ${navbarStyles.activeBgColor}`
                            : `${navbarStyles.headerTextColor} ${navbarStyles.defaultBgColor} hover:text-white hover:bg-gray-800`
                        }`}
                        onClick={closeAllDropdowns}
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
