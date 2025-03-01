import React, { useEffect, useState } from "react";
import { Navbar, ExtraNavbar, Footer } from "./defaults";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ForSale, ForRent, NewProperty, Blogs, ContactUs, WhyUs, Services, AboutUs, WhatWeDo, HowWeWork, DetailedView, BlogDetail, CellPhoneShop, DeviceRepairBooking, Samsung, PhoneBatteryRepair, PhoneScreenRepair, PhoneChargingPortRepair, IphoneRepair, PreOwnedPhones, WarrantyPage } from "./pages";
import { MainScreen } from "./screens";

const Main = () => {
  const [scrollY, setScrollY] = useState(0);
  const [hideExtraNavbar, setHideExtraNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        // At the top of the page
        setHideExtraNavbar(false);
      } else if (currentScrollY > scrollY) {
        // Scrolling down
        setHideExtraNavbar(true);
      }

      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <Router>
      <div>
        <div
          className={`z-50 top-0 transition-transform duration-300 ${
            hideExtraNavbar ? "-translate-y-full duration-300" : ""
          }`}
        >
          <ExtraNavbar />
        </div>

        <div
          className={`fixed w-full z-40 transition-transform duration-300 ${
            hideExtraNavbar ? "top-0" : ""
          }`}
        >
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/Projects" element={<ForSale />} />
          <Route path="/DetailedView" element={<DetailedView />} />
          <Route path="/OurServices" element={<Services />} />
          <Route path="/WhyUs" element={<WhyUs />} />
          <Route path="/WhatWeDo" element={<WhatWeDo />} />
          <Route path="/HowWeWork" element={<HowWeWork />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/CellPhoneShop" element={<CellPhoneShop />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/DeviceRepairBooking" element={<DeviceRepairBooking />} />
          <Route path="/Samsung" element={<Samsung/>}/>
          <Route path="/PhoneBatteryRepair" element={<PhoneBatteryRepair/>}/>
          <Route path="/PhoneScreenRepair" element={<PhoneScreenRepair/>}/>
          <Route path="/PhoneChargingPortRepair" element={<PhoneChargingPortRepair/>}/>
          <Route path="/IphoneRepair" element={<IphoneRepair/>}/>
          <Route path="/PreOwnedPhones" element={<PreOwnedPhones/>}/>
          <Route path="/WarrantyPage" element={<WarrantyPage/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default Main;
