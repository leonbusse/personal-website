import React from "react";
import "./Button.scss";
// import PropTypes from "prop-types";

const Button = ({ children }) => <button className="button">{children}</button>;

// Testimonials.propTypes = {
//   testimonials: PropTypes.arrayOf(
//     PropTypes.shape({
//       quote: PropTypes.string,
//       author: PropTypes.string
//     })
//   )
// };

export default Button;
