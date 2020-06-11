import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { useScrollThreshold } from "../utils/hooks";
import AnimatedLogo from "./AnimatedLogo";

const Navbar = () => {
  const scrolled = useScrollThreshold(10);
  const [logoVisible, setLogoVisible] = useState(false);
  useEffect(() => {
    setTimeout(setLogoVisible(true), 100);
    return () => {};
  });
  return (
    <nav
      className={`navbar${scrolled ? " floating" : ""}`}
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <AnimatedLogo active={logoVisible} />
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
