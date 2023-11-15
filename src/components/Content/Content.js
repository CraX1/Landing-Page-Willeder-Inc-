import React from "react";
import "./Content.scss";
import Image1 from "../../assets/Images/image-with-description.jpeg";
import Image2 from "../../assets/Images/hero-e-2.png";
import Image3 from "../../assets/Images/hero-e-3.png";

const Content = () => {
  return (
    <div className="content-container">
      <div className="content-bar" />
      <div>
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
    </div>
  );
};

export default Content;
