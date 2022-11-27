import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "20vw",
        justifyContent: "center",
      }}
    >
      <NavLink
        to={"/"}
        style={({ isActive }) =>
          isActive
            ? { color: "red", textDecoration: "none" }
            : { color: "black", textDecoration: "none" }
        }
        end
      >
        Products
      </NavLink>
      <NavLink
        to={"/cart"}
        style={({ isActive }) =>
          isActive
            ? { color: "red", textDecoration: "none" }
            : { color: "black", textDecoration: "none" }
        }
      >
        Cart
      </NavLink>
    </div>
  );
};

export default Navbar;
