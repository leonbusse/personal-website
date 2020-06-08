import React from "react";
import "./Navbar.scss";
import useScrollThreshold from "../utils/hooks";

const Navbar = () => {
  const scrolled = useScrollThreshold(10);
  return (
    <nav
      className={`navbar${scrolled ? " floating" : ""}`}
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <img src="/img/logo.svg" className="logo"></img>
        <ul className="links hidden">
          <li>About</li>
          <li>Experience</li>
          <li>Contact</li>
        </ul>
        <div className="burgermenu">
          <img src="/img/burger.svg"></img>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
