import React from "react";
import Image from "next/image";
import car from "@/public/car.avif";

export default function Hero() {
  return (
    <div className="main">
      <div className="content-wrapper">
        <div className="image-div">
          <Image src={car} alt="Car Image" layout="fill" objectFit="cover" />
        </div>

        <div className="content">
          <h1 className="h1">
            Welcome to! <br /> <i className="italic">DRIVE AURA</i>
          </h1>
          <p>Experience the Art of Luxury, Drive with Class</p>
        </div>
      </div>
    </div>
  );
}
