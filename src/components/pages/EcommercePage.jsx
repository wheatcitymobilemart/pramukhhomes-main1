import React, { useState } from "react";
import { FaFilter, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { ProductCard } from "../elements"; // Ensure ProductCard is correctly imported

const productData = [
  {
    name: "iPhone 7",
    price: "From $139.00 CAD",
    images: [
      "https://shop.cellmechanics.ca/cdn/shop/products/iPhone-7-Hero.jpg?v=1624546988&width=533",
      "https://shop.cellmechanics.ca/cdn/shop/products/iphone7-black.jpg?v=1624546988",
      "https://shop.cellmechanics.ca/cdn/shop/products/iphone7-rose-gold.jpg?v=1624546985",
    ],
    daysAgo: 5,
  },
  {
    name: "iPhone 8",
    price: "From $159.00 CAD",
    images: ["/images/iphone8.png"],
    daysAgo: 7,
  },
  {
    name: "iPhone XR",
    price: "From $299.00 CAD",
    images: ["/images/iphonexr.png"],
    daysAgo: 3,
  },  
  {
    name: "iPhone 8",
    price: "From $159.00 CAD",
    images: ["/images/iphone8.png"],
    daysAgo: 7,
  },
  {
    name: "iPhone 7",
    price: "From $139.00 CAD",
    images: [
      "https://shop.cellmechanics.ca/cdn/shop/products/iPhone-7-Hero.jpg?v=1624546988&width=533",
      "https://shop.cellmechanics.ca/cdn/shop/products/iphone7-black.jpg?v=1624546988",
      "https://shop.cellmechanics.ca/cdn/shop/products/iphone7-rose-gold.jpg?v=1624546985",
    ],
    daysAgo: 5,
  },

  {
    name: "iPhone XR",
    price: "From $299.00 CAD",
    images: ["/images/iphonexr.png"],
    daysAgo: 3,
  },{
    name: "iPhone 8",
    price: "From $159.00 CAD",
    images: ["/images/iphone8.png"],
    daysAgo: 7,
  },
  {
    name: "iPhone XR",
    price: "From $299.00 CAD",
    images: ["/images/iphonexr.png"],
    daysAgo: 3,
  },  
  {
    name: "iPhone 7",
    price: "From $139.00 CAD",
    images: [
      "https://shop.cellmechanics.ca/cdn/shop/products/iPhone-7-Hero.jpg?v=1624546988&width=533",
      "https://shop.cellmechanics.ca/cdn/shop/products/iphone7-black.jpg?v=1624546988",
      "https://shop.cellmechanics.ca/cdn/shop/products/iphone7-rose-gold.jpg?v=1624546985",
    ],
    daysAgo: 5,
  },
];

const EcommercePage = () => {
  const [sortOption, setSortOption] = useState("best-selling");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentImageIndexes, setCurrentImageIndexes] = useState(
    productData.map(() => 0)
  );

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3; // Number of products per page
  const totalPages = Math.ceil(productData.length / pageSize);

  // Get products for the current page
  const paginatedProducts = productData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleNextImage = (index) => {
    setCurrentImageIndexes((prevIndexes) =>
      prevIndexes.map((imgIndex, i) =>
        i === index
          ? (imgIndex + 1) % productData[index].images.length
          : imgIndex
      )
    );
  };

  const handlePrevImage = (index) => {
    setCurrentImageIndexes((prevIndexes) =>
      prevIndexes.map((imgIndex, i) =>
        i === index
          ? (imgIndex - 1 + productData[index].images.length) %
            productData[index].images.length
          : imgIndex
      )
    );
  };

  return (
    <div className="p-6 mt-20 flex flex-col justify-center items-center w-full">
      {/* Header & Sort Options */}
      <div className="w-full max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">Apple</h1>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <button
              className="flex items-center px-4 py-2 bg-gray-200 rounded md:hidden"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <FaFilter className="mr-2" /> Filters{" "}
              {isFilterOpen ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
            </button>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border p-2 rounded"
            >
              <option value="featured">Featured</option>
              <option value="best-selling">Best Selling</option>
              <option value="alphabetical-a-z">Alphabetically, A-Z</option>
              <option value="alphabetical-z-a">Alphabetically, Z-A</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="date-old-new">Date, Old to New</option>
              <option value="date-new-old">Date, New to Old</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Layout: Sidebar (Collapsible on Mobile) + Product Grid */}
      <div className="flex w-full max-w-6xl">
         {/*Sidebar Filters (Visible on Desktop, Collapsible on Mobile)
        <aside
          className={`w-full md:w-1/4 border-r pr-4 transition-all duration-300 ${
            isFilterOpen ? "block" : "hidden"
          } md:block`}
        >
          <h2 className="text-lg font-semibold mb-3">Filter:</h2>
          <div className="mb-4">
            <h3 className="font-medium">Availability</h3>
            <label className="block">
              <input type="checkbox" className="mr-2" /> In stock (27)
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" /> Out of stock (27)
            </label>
          </div>
        </aside> */}
 <aside className={`w-full md:w-1/4 border-r pr-4 transition-all duration-300 ${
            isFilterOpen ? "block" : "hidden"
          } md:block`}
        >
          <h2 className="text-lg font-semibold mb-3">Filter:</h2>
          <div className="mb-4">
            <h3 className="font-medium">Availability</h3>
            <label className="block">
              <input type="checkbox" className="mr-2" /> In stock (27)
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" /> Out of stock (27)
            </label>
          </div>
          <div className="mb-4">
            <h3 className="font-medium">Price</h3>
            <p className="text-gray-600">The highest price is $1,119.00</p>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="From"
                className="border p-2 w-1/2 rounded"
              />
              <input
                type="text"
                placeholder="To"
                className="border p-2 w-1/2 rounded"
              />
            </div>
          </div>
          <div className="mb-4">
            <h3 className="font-medium">Brand</h3>
            <label className="block">
              <input type="checkbox" className="mr-2" /> Apple (27)
            </label>
          </div>
          <div className="mb-4">
            <h3 className="font-medium">Product type</h3>
            <label className="block">
              <input type="checkbox" className="mr-2" /> Devices (27)
            </label>
          </div>
        </aside>
        {/* Product Grid */}
        <div className="w-full md:w-3/4 pl-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {paginatedProducts.map((product, index) => (
              <ProductCard
                key={index}
                images={product.images}
                name={product.name}
                price={product.price}
                daysAgo={product.daysAgo}
                currentImage={currentImageIndexes[index]}
                nextImage={() => handleNextImage(index)}
                prevImage={() => handlePrevImage(index)}
                onClick={() => console.log(`Clicked on ${product.name}`)}
              />
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center mt-6 space-x-4">
  {currentPage > 1 && ( // Hide "Previous" on page 1
    <button
      className="px-4 py-2 bg-gray-200 rounded"
      disabled={currentPage === 1}
      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
    >
      Previous
    </button>
  )}
  
  <span>
    Page {currentPage} of {totalPages}
  </span>

  {currentPage < totalPages && ( // Hide "Next" on the last page
    <button
      className="px-4 py-2 bg-gray-200 rounded"
      disabled={currentPage === totalPages}
      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
    >
      Next
    </button>
  )}
</div>

        </div>
      </div>
    </div>
  );
};

export default EcommercePage;
