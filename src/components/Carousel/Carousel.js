import React, { useEffect, useState } from "react";
import "./Carousel.scss";
import HeroImage from "../../assets/Images/hero-e.png";
import HeroImage2 from "../../assets/Images/hero-e-2.png";
import HeroImage3 from "../../assets/Images/hero-e-3.png";
import Logo from "../../assets/Logo";
import Vector from "../../assets/Vector";
import Arrow from "../../assets/Arrow";
const Carousel = () => {
  const images = [HeroImage, HeroImage2, HeroImage3];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 4000);

    return () => clearInterval(interval);
  });

  return (
    <div className="carousel">
      <div
        className="hero-image"
        style={{
          background: `linear-gradient(
            rgba(0, 0, 0, 0.00) 26.56%,
            rgba(0, 0, 0, 0.75) 71.35%
          ),
          url(${images[currentImage]}),
          lightgray 50% / cover no-repeat`,
        }}
      />
      <div>
        <button className="arrows left-arrow" onClick={prevImage}>
          <Arrow fill={"#dce1e6"} color={"#000"} />
        </button>
        <button className="arrows right-arrow" onClick={nextImage}>
          <Arrow fill={"#dce1e6"} color={"#000"} />
        </button>
      </div>

      <div className="bottom-body">
        <div className="logo-body">
          <Logo />
          <span>LOGO</span>
        </div>
        <div className="text-lorem">
          <p className="blue-title">Lorem ipsum dolor sit amet </p>
          <p className="normal-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="scroll-text">
          <span>scroll</span>
          <Vector />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
