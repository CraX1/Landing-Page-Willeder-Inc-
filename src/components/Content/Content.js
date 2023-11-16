import React from "react";
import "./Content.scss";
import Image1 from "../../assets/Images/image-with-description.jpeg";
import Image2 from "../../assets/Images/hero-e-2.png";
import Image3 from "../../assets/Images/hero-e-3.png";
import Image4 from "../../assets/Images/hero-e-4.jpeg";
import Arrow from "../../assets/Arrow";

const Content = () => {
  return (
    <div className="content-container">
      <div className="content-bar" />
      <div className="content-bar-text">
        <p className="main-title">Lorem</p>
        <p className="sub-title">subtitle</p>
      </div>

      <div className="images-with-description">
        <div className="image-description-item">
          <img src={Image1} alt="desc" srcset="" />
          <div className="description">
            <p className="item-number">01</p>
            <p className="item-title">Lorem ipsum dolor sit</p>
            <p className="item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </div>
        <div className="image-description-item">
          <img src={Image2} alt="" srcset="" />
          <div className="description">
            <p className="item-number">02</p>
            <p className="item-title">Lorem ipsum dolor sit</p>
            <p className="item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </div>
        <div className="image-description-item">
          <img src={Image3} alt="" srcset="" />
          <div>
            <p className="item-number">03</p>
            <p className="item-title">Lorem ipsum dolor sit</p>
            <p className="item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="bottom-content">
        <div className="overlay-image">
          <img src={Image4} alt="" srcset="" />
        </div>

        <div className="content">
          <p className="content-title">Lorem ipsum</p>
          <p className="content-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="content-with-button">
            <p>Lorem ipsum</p>
            <button>
              <Arrow />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
