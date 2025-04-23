import React, { useState, useEffect } from "react";
import { Carousel } from "@material-tailwind/react";
import { NewPhoneCardComponent } from "../elements";

const NewPhoneAdd = () => {
  const data = [
    {
        "images": [
          "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-9-pro-1.jpg",
          "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-9-pro-2.jpg",
          "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-9-pro-3.jpg"
        ],
        "name": "Google Pixel 9 Pro",
        "price": "$999",
        "model": "Pixel 9 Pro",
        "company": "Google",
        "tag": "Flagship"
      }
,      

{
    "images": [
      "https://www.samsungmobilepress.com/media-assets/galaxy-s25/001-galaxy-s25-icyblue-front.jpg",
      "https://www.samsungmobilepress.com/media-assets/galaxy-s25/001-product-galaxy-s25-icyblue.jpg",
      "https://www.samsungmobilepress.com/media-assets/galaxy-s25/002-galaxy-s25-icyblue-front2.jpg"
    ],
    "name": "Samsung Galaxy S25",
    "price": "$799",
    "model": "Galaxy S25",
    "company": "Samsung",
    "tag": "New Arrival"
  },
   {
        images: [
          "https://example.com/phone1-image1.jpg",
          "https://example.com/phone1-image2.jpg",
          "https://example.com/phone1-image3.jpg",
        ],
        name: "Phone Model A",
        price: "$699",
        model: "Model A",
        company: "Company X",
        tag: "New Arrival",
      },
      {
        images: [
          "https://example.com/phone2-image1.jpg",
          "https://example.com/phone2-image2.jpg",
          "https://example.com/phone2-image3.jpg",
        ],
        name: "Phone Model B",
        price: "$799",
        model: "Model B",
        company: "Company Y",
        tag: "Best Seller",
      },
      {
        images: [
          "https://example.com/phone3-image1.jpg",
          "https://example.com/phone3-image2.jpg",
          "https://example.com/phone3-image3.jpg",
        ],
        name: "Phone Model C",
        price: "$899",
        model: "Model C",
        company: "Company Z",
        tag: "Limited Edition",
      }, {
        images: [
          "https://example.com/phone1-image1.jpg",
          "https://example.com/phone1-image2.jpg",
          "https://example.com/phone1-image3.jpg",
        ],
        name: "Phone Model A",
        price: "$699",
        model: "Model A",
        company: "Company X",
        tag: "New Arrival",
      },
      {
        "images": [
          "https://cdn.pixabay.com/photo/2023/07/01/10/30/galaxy-s23-front.jpg",
          "https://cdn.pixabay.com/photo/2023/07/01/10/31/galaxy-s23-back.jpg",
          "https://cdn.pixabay.com/photo/2023/07/01/10/32/galaxy-s23-side.jpg"
        ],
        "name": "Samsung Galaxy S23",
        "price": "$799",
        "model": "Galaxy S23",
        "company": "Samsung",
        "tag": "Compact"
      },
      {
        "images": [
          "https://cdn.pixabay.com/photo/2025/03/17/12/00/nothing-phone-3a-pro-front.jpg",
          "https://cdn.pixabay.com/photo/2025/03/17/12/01/nothing-phone-3a-pro-back.jpg",
          "https://cdn.pixabay.com/photo/2025/03/17/12/02/nothing-phone-3a-pro-side.jpg"
        ],
        "name": "Nothing Phone 3a Pro",
        "price": "$344",
        "model": "Phone 3a Pro",
        "company": "Nothing",
        "tag": "Mid-Range"
      },
      {
        "images": [
          "https://cdn.pixabay.com/photo/2023/07/14/15/00/nothing-phone-2-front.jpg",
          "https://cdn.pixabay.com/photo/2023/07/14/15/01/nothing-phone-2-back.jpg",
          "https://cdn.pixabay.com/photo/2023/07/14/15/02/nothing-phone-2-side.jpg"
        ],
        "name": "Nothing Phone 2",
        "price": "$599",
        "model": "Phone 2",
        "company": "Nothing",
        "tag": "Unique Design"
      },
    // Add more phone data as needed
  ];

  // ...existing code for chunk size determination, state management, and lifecycle hooks...

  const getChunkSize = () => {
    if (window.innerWidth >= 1024) return 3; // Large screens: 3 cards
    if (window.innerWidth >= 768) return 2; // Tablet screens: 2 cards
    return 1; // Mobile screens: 1 card
  };

  const [chunkSize, setChunkSize] = useState(getChunkSize());

  useEffect(() => {
    const handleResize = () => {
      setChunkSize(getChunkSize());
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const chunkData = (arr, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const dataChunks = chunkData(data, chunkSize);

  const [currentImageIndex, setCurrentImageIndex] = useState(
    Array(data.length).fill(0)
  );

  const [loadedChunks, setLoadedChunks] = useState([dataChunks[0]]);
  const [chunkIndex, setChunkIndex] = useState(0);

  const nextImage = (index) => {
    setCurrentImageIndex((prevIndex) => {
      const newIndex = [...prevIndex];
      newIndex[index] = (newIndex[index] + 1) % data[index].images.length;
      return newIndex;
    });
  };

  const prevImage = (index) => {
    setCurrentImageIndex((prevIndex) => {
      const newIndex = [...prevIndex];
      newIndex[index] =
        (newIndex[index] - 1 + data[index].images.length) %
        data[index].images.length;
      return newIndex;
    });
  };

  useEffect(() => {
    if (chunkIndex < dataChunks.length - 1) {
      const handleLoadNextChunk = () => {
        setChunkIndex((prevChunkIndex) => {
          const newChunkIndex = prevChunkIndex + 1;
          setLoadedChunks((prevChunks) => [
            ...prevChunks,
            dataChunks[newChunkIndex],
          ]);
          return newChunkIndex;
        });
      };

      if (chunkIndex >= loadedChunks.length - 1) {
        handleLoadNextChunk();
      }
    }
  }, [chunkIndex, dataChunks, loadedChunks]);

  return (
    <Carousel
      className="bg-gray-300  py-8"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-2 left-2/4 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      loop
      showIndicators={false}
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      swipeable
      emulateTouch
      transitionTime={500}
    >
      {loadedChunks.map((chunk, chunkIndex) => (
        <div
          className={`flex justify-center w-full ${
            chunkSize === 1 ? "flex-col" : "flex-row"
          }`}
          key={chunkIndex}
        >
          {chunk.map((phone, index) => (
            <div
              className={`w-full ${
                chunkSize === 1
                  ? "mb-4 px-16"
                  : chunkSize === 2
                  ? "w-1/2 px-16"
                  : "w-1/3 px-16"
              }`}
              key={index}
            >
              <NewPhoneCardComponent
                images={phone.images}
                name={phone.name}
                price={phone.price}
                model={phone.model}
                company={phone.company}
                currentImage={currentImageIndex[index]}
                nextImage={() => nextImage(index)}
                prevImage={() => prevImage(index)}
                tag={phone.tag}
              />
            </div>
          ))}
        </div>
      ))}
    </Carousel>
  );
};

export default NewPhoneAdd;
