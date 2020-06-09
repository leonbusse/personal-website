import React from "react";
import "./Button.scss";
// import PropTypes from "prop-types";

const Button = ({ children, className, other }) => (
  <button className={className + " button"} {...other}>
    {children}
  </button>
);

// Testimonials.propTypes = {
//   testimonials: PropTypes.arrayOf(
//     PropTypes.shape({
//       quote: PropTypes.string,
//       author: PropTypes.string
//     })
//   )
// };

export default Button;
