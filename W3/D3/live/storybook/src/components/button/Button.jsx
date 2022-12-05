import React from "react";
import PropTypes from "prop-types";
import "./button.css";

/**
 * Primary UI component for user interaction
 */
const Button = ({ backgroundColor, size, label, handleClick }) => {
  const paddingValue =
    size === "medium" ? "10px" : size === "large" ? "12px" : "6px";
  return (
    <button
      type="button"
      style={{
        padding: paddingValue,
        backgroundColor,
        border: "none",
        borderRadius: "5px",
      }}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,

  backgroundColor: PropTypes.string,

  size: PropTypes.oneOf(["small", "medium", "large"]),

  label: PropTypes.string.isRequired,

  handleClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};

export default Button;
