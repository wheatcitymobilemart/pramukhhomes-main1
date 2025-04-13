import React from "react";

const WarrantyPage = () => {
  return (
    <div className="container mx-auto px-4 py-10 mt-10 text-gray-800 max-w-5xl">
      <h1 className="text-2xl md:text-4xl font-bold text-black mb-6 text-center">Our Warranty</h1>
      
      {/* Repair Warranty */}
      <div className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-brown-500">Repair Warranty</h2>
        <h3 className="text-lg md:text-xl font-semibold mt-4">Limited Lifetime Warranty</h3>
        <p className="mt-2 text-gray-700 text-sm md:text-base">
          At wheatcitymobilemart, all of our repairs are covered by our Limited Lifetime Warranty. This warranty covers both the parts and labor of the repair we performed. In the unlikely event that one of our parts or repairs fails, we will fix it free of charge.
        </p>
        <p className="mt-2 text-gray-700 text-sm md:text-base">
          Our warranty does not cover supplemental damage after our repair. This includes accidental damage, liquid damage, or damage from another repair center. Battery replacements are covered by a 6-month warranty. This warranty is non-transferable.
        </p>
      </div>
      
      {/* Refurbished Phone Warranty */}
      <div className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-amber-300">Used Phone Warranty</h2>
        <h3 className="text-lg md:text-xl font-semibold mt-4">6-Month Warranty</h3>
        <p className="mt-2 text-gray-700 text-sm md:text-base">
          We offer a 6-month warranty on all of our devices. If your device does not operate correctly, we will make it right.
        </p>
        <h3 className="text-lg md:text-xl font-semibold mt-4">What Is Covered Under Warranty?</h3>
        <p className="mt-2 text-gray-700 text-sm md:text-base">
          Our 6-month limited warranty ensures that devices are free of defects in materials and workmanship, subject to the conditions below.
        </p>
        <h3 className="text-lg md:text-xl font-semibold mt-4">What Is NOT Covered Under Warranty?</h3>
        <p className="mt-2 text-gray-700 text-sm md:text-base">
          The warranty only applies to hardware components and does not include software, accessories, or peripheral equipment. It does not cover liquid damage, physical damage, or wear and tear, including cracks or scratches.
        </p>
      </div>
      
      {/* Limitations */}
      <div className="mb-8">
        <h2 className="text-lg md:text-xl font-semibold mt-4">Limitations</h2>
        <ul className="list-disc ml-4 md:ml-6 mt-2 text-gray-700 text-sm md:text-base">
          <li>The device serial number, IMEI, or water indicator has been altered, erased, or is illegible.</li>
          <li>The defect was caused by unauthorized modifications or repairs.</li>
          <li>The defect was caused by a battery short circuit.</li>
          <li>The defect was caused by a faulty accessory not approved by Cell Mechanics.</li>
        </ul>
      </div>
      
      {/* Transferability */}
      <div className="mb-8">
        <h2 className="text-lg md:text-xl font-semibold mt-4">Transferability</h2>
        <p className="mt-2 text-gray-700 text-sm md:text-base">The warranty is valid only for the original purchaser and is non-transferable.</p>
      </div>
      
      {/* Filing A Warranty Claim */}
      <div>
        <h2 className="text-lg md:text-xl font-semibold mt-4">Filing A Warranty Claim</h2>
        <p className="mt-2 text-gray-700 text-sm md:text-base">
          If your device fails within 6 months of purchase, bring it to any <span className="text-amber-300 font-semibold">wheatcitymobilemart location</span> for testing. If purchased online, call us at <span className="font-semibold">204-725-0858</span>, and we will arrange shipping at no cost if covered under warranty.
        </p>
        <p className="mt-2 text-gray-700 text-sm md:text-base">
          If we cannot repair your device, it will be replaced with the same or an equivalent model.
        </p>
      </div>
    </div>
  );
};

export default WarrantyPage;
