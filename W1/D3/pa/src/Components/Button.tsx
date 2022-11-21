import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  handleClick?: () => void;
};
function Button(props: ButtonProps) {
  const { children, handleClick } = props;
  return <div onClick={() => handleClick && handleClick()}>{children}</div>;
  // we have provided null check --> means if handleclick exist then execute this function
}

export default Button;
