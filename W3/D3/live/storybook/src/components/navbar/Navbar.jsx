import React from "react";
import PropTypes from "prop-types";

const Navbar = ({
  links,
  logo,
  color = "white",
  bgColor = "black",
  userImage = "https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638__340.png",
}) => {
  return <nav></nav>;
};

Navbar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
  logo: PropTypes.string.isRequired,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  userImage: PropTypes.string,
};

Navbar.defaultProps = {
  color: "white",
  bgColor: "black",
  userImage: "",
};

export default Navbar;
