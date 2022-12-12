import React from "react";

const Button = ({ label, handleClick }) => {

  return (
    <button data-testid="button" onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
