import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">Innovation in Motion!</div>

      <div className="bar-items">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#collections">Collections</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}
