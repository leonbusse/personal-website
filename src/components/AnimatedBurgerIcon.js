import React from "react";
import "./AnimatedBurgerIcon.scss";

const AnimatedBurgerIcon = ({ active }) => {
  return (
    <div className="AnimatedBurgerIcon">
      <svg
        width="40"
        height="28"
        viewBox="0 0 40 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={active ? "active" : ""}
      >
        <line
          y1="14.5"
          x2="40"
          y2="14.5"
          stroke="#F35321"
          strokeWidth="3"
          className="svg-elem-1"
        ></line>
        <line
          y1="26.5"
          x2="40"
          y2="26.5"
          stroke="#F35321"
          strokeWidth="3"
          className="svg-elem-2"
        ></line>
        <line
          y1="1.5"
          x2="40"
          y2="1.5"
          stroke="#F35321"
          strokeWidth="3"
          className="svg-elem-3"
        ></line>
      </svg>
    </div>
  );
};

export default AnimatedBurgerIcon;
