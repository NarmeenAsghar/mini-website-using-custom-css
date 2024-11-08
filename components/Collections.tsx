"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Collections() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/car1.jpeg",
    "/car2.jpeg",
    "/car3.jpeg",
    "/car4.jpeg",
    "/car5.jpeg",
    "/car7.webp",
    "/car8.jpeg",
    "/car9.jpeg",
    "/car10.jpeg",
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="collection-container" id="collections">
      <div className="carousel">
        <div
          className="carousel-content"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {images.map((src, index) => (
            <div key={index} className="carousel-item">
              <Image
                src={src}
                alt={`Car ${index + 1}`}
                className="coll-image"
                width={600}
                height={300}
              />
            </div>
          ))}
        </div>

        <button className="carousel-button prev-button" onClick={prevImage}>
          &#60; Prev
        </button>
        <button className="carousel-button next-button" onClick={nextImage}>
          Next &#62;
        </button>
      </div>
    </div>
  );
}
