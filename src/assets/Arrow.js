import React from "react";
import "../components/Carousel/Carousel.scss";
import "../components/Content/Content.scss";

const Arrow = ({ fill, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="53"
      className="arrow-svg"
      viewBox="0 0 52 53"
      fill={fill || "none"}
    >
      <g clip-path="url(#clip0_122_258)">
        <path
          d="M51.25 26.5C51.25 40.4452 39.9452 51.75 26 51.75C12.0548 51.75 0.75 40.4452 0.75 26.5C0.75 12.5548 12.0548 1.25 26 1.25C39.9452 1.25 51.25 12.5548 51.25 26.5Z"
          stroke={color || "#6A45FF"}
          stroke-width="1.5"
        />
        <path
          d="M16 26.5L36 26.5M36 26.5L28.5 34.5M36 26.5L28.5 18.5"
          stroke={color || "#6A45FF"}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_122_258">
          <rect
            width="52"
            height="52"
            fill="white"
            transform="translate(52 0.5) rotate(90)"
            className="vector-transform"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Arrow;
