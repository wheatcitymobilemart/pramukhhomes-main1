import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ForCardComponent, ProductCardComponent } from "../elements";
import { useNavigate } from "react-router-dom";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const itemsPerPage = 6;

const products = [
  {
    images: [
      "https://example.com/product1-image1.jpg",
      "https://example.com/product1-image2.jpg",
      "https://example.com/product1-image3.jpg",
    ],
    name: "Wireless Headphones",
    price: "$199",
    description: "High-quality wireless headphones with noise cancellation.",
    tag: "New Arrival",
  },
  {
    images: [
      "https://example.com/product2-image1.jpg",
      "https://example.com/product2-image2.jpg",
      "https://example.com/product2-image3.jpg",
    ],
    name: "Smartphone",
    price: "$999",
    description: "Latest smartphone with cutting-edge features.",
    tag: "Best Seller",
  },
  {
    images: [
      "https://example.com/product3-image1.jpg",
      "https://example.com/product3-image2.jpg",
      "https://example.com/product3-image3.jpg",
    ],
    name: "Gaming Laptop",
    price: "$1,499",
    description: "Powerful gaming laptop with high-end graphics.",
    tag: "Limited Edition",
  },{
    images: [
      "https://example.com/product1-image1.jpg",
      "https://example.com/product1-image2.jpg",
      "https://example.com/product1-image3.jpg",
    ],
    name: "Wireless Headphones",
    price: "$199",
    description: "High-quality wireless headphones with noise cancellation.",
    tag: "New Arrival",
  },
  {
    images: [
      "https://example.com/product2-image1.jpg",
      "https://example.com/product2-image2.jpg",
      "https://example.com/product2-image3.jpg",
    ],
    name: "Smartphone",
    price: "$999",
    description: "Latest smartphone with cutting-edge features.",
    tag: "Best Seller",
  },
  {
    images: [
      "https://example.com/product3-image1.jpg",
      "https://example.com/product3-image2.jpg",
      "https://example.com/product3-image3.jpg",
    ],
    name: "Gaming Laptop",
    price: "$1,499",
    description: "Powerful gaming laptop with high-end graphics.",
    tag: "Limited Edition",
  },{
    images: [
      "https://example.com/product1-image1.jpg",
      "https://example.com/product1-image2.jpg",
      "https://example.com/product1-image3.jpg",
    ],
    name: "Wireless Headphones",
    price: "$199",
    description: "High-quality wireless headphones with noise cancellation.",
    tag: "New Arrival",
  },
  {
    images: [
      "https://example.com/product2-image1.jpg",
      "https://example.com/product2-image2.jpg",
      "https://example.com/product2-image3.jpg",
    ],
    name: "Smartphone",
    price: "$999",
    description: "Latest smartphone with cutting-edge features.",
    tag: "Best Seller",
  },
  {
    images: [
      "https://example.com/product3-image1.jpg",
      "https://example.com/product3-image2.jpg",
      "https://example.com/product3-image3.jpg",
    ],
    name: "Gaming Laptop",
    price: "$1,499",
    description: "Powerful gaming laptop with high-end graphics.",
    tag: "Limited Edition",
  },
  // Add more products as needed
];

const ProductShowcase = () => {
  const [productsData, setProductsData] = useState(products);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [currentImageIndexes, setCurrentImageIndexes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Initial data setup
    setVisibleProducts(products.slice(0, itemsPerPage));
    setCurrentImageIndexes(products.slice(0, itemsPerPage).map(() => 0));
    setIsLoading(false);
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const startIndex = (page - 1) * itemsPerPage;
    const newVisibleProducts = productsData.slice(
      startIndex,
      startIndex + itemsPerPage
    );
    setVisibleProducts(newVisibleProducts);
    setCurrentImageIndexes(newVisibleProducts.map(() => 0));

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  };

  const handleNextImage = (index) => {
    setCurrentImageIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      newIndexes[index] =
        (newIndexes[index] + 1) % visibleProducts[index].images.length;
      return newIndexes;
    });
  };

  const handlePrevImage = (index) => {
    setCurrentImageIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      newIndexes[index] =
        (newIndexes[index] - 1 + visibleProducts[index].images.length) %
        visibleProducts[index].images.length;
      return newIndexes;
    });
  };

  const handleClick = () => {
    navigate("/ProductDetails");
  };

  const totalPages = Math.ceil(productsData.length / itemsPerPage);

  return (
    <motion.div
      className="flex flex-col gap-6 p-8 md::p-12 lg:p-16 mt-12 md:mt-16 lg:mt-16 bg-gradient-to-t from-blue-400 to-blue-100"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Card Grid */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0, x: -90 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        {isLoading ? (
          <div>Loading...</div> // Loader component
        ) : (
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center text-center font-black text-3xl -mt-4 mb-4">
              Featured Products
            </div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleProducts.map((product, index) => (
                <ProductCardComponent
                  key={index}
                  images={product.images}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  tag={product.tag}
                  currentImage={currentImageIndexes[index]}
                  nextImage={() => handleNextImage(index)}
                  prevImage={() => handlePrevImage(index)}
                  onClick={handleClick} // Navigate only when clicking inside the card
                />
              ))}
            </div>
          </div>
        )}
        {/* Pagination */}
        <div className="flex justify-center items-center gap-8 mt-6">
          <IconButton
            size="sm"
            variant="outlined"
            color="white"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4 text-white" />
          </IconButton>
          <Typography color="white" className="font-normal">
            Page <strong className="text-white">{currentPage}</strong> of{" "}
            <strong className="text-white">{totalPages}</strong>
          </Typography>
          <IconButton
            size="sm"
            variant="outlined"
            color="white"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ArrowRightIcon strokeWidth={2} className="h-4 w-4 text-white" />
          </IconButton>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductShowcase;
