import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { useScrollThreshold } from "../utils/hooks";
import AnimatedLogo from "./AnimatedLogo";
import AnimatedBurgerIcon from "./AnimatedBurgerIcon";

const Navbar = () => {
  const scrolled = useScrollThreshold(10);
  const [logoVisible, setLogoVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setLogoVisible(true), 100);
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
          <AnimatedBurgerIcon active={logoVisible} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
