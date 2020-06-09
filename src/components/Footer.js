import React from "react";
import "./Footer.scss";
import { useScrollThreshold } from "../utils/hooks";

const Footer = () => {
  const showFooter = useScrollThreshold(200);
  return (
    <footer className={"footer" + (showFooter ? "" : " hidden")}>
      {/* <p style={{ gridArea: "github" }}>
        <a href="https://github.com/leonbusse">Github</a>
      </p> */}
      <p>Copyright &copy; Leon Busse 2020</p>
      <p style={{ gridArea: "madeby" }}>
        Made by <a href="https://www.gatsbyjs.org/">Gadsby</a> with &hearts;
      </p>
    </footer>
  );
};

export default Footer;
