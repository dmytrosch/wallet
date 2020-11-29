import React from "react";
import css from './CurrencyRates.module.css'

export default function CurrencyGraphSVG() {
  return (
    <>
      <svg
       className={css.svg}
        width="348"
        height="134"
        viewBox="0 0 348 134"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.84 47.8127L0 76.719V114C0 125.046 8.95431 134 20 134H318C334.569 134 348 120.569 348 104V25.0151C346.732 24.2279 344.886 23.9649 344.102 23.9033C338 23.4236 334.5 28 329.626 32.2417L329.565 32.2944C328.124 33.5493 324.52 36.6888 317.933 36.6888C311.251 36.6888 306.611 33.7241 305.126 32.2417L282.854 8.89426C279.885 5.92951 273.389 0 266.15 0C258.912 0 253.158 5.92951 250.56 8.89426L147.552 108.405C145.882 110.258 140.759 113.964 133.632 113.964C126.505 113.964 121.382 110.258 119.712 108.405L60.1344 45.0332C58.0928 42.8097 52.1165 38.3625 44.544 38.3625C36.9715 38.3625 30.2528 44.6626 27.84 47.8127Z"
          fill="url(#paint0_linear)"
          fillOpacity="0.2"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="174"
            y1="-10"
            x2="174"
            y2="134"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
}
