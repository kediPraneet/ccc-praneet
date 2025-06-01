import React from "react";
import "./LogoSlider.css";

// List your logo filenames here (add all your PNGs)
const logos = [
  "adityabirla.png",
  "hul.png",
  "kodak.jpg",
  "mahi.jpg",
  "nike.png",
  "nokiaa.jpg",
  "sbi .png",
  "tata .png"
];

const LogoSlider = () => (
  <div className="logo-slider-outer">
    <div className="logo-slider-track">
      {logos.concat(logos).map((logo, idx) => (
        <div className="logo-slide" key={idx}>
          <img
            src={`/imagy-images/${logo}`}
            alt={`Logo ${idx + 1}`}
            className="logo-img"
            draggable="false"
          />
        </div>
      ))}
    </div>
  </div>
);

export default LogoSlider;
