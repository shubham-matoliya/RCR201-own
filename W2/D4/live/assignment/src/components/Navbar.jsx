import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { store } from "../redux/store";

const Navbar = () => {
  const { count } = useSelector((store) => store.cartItemManager);
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
        Cart ({count} items)
      </NavLink>
    </div>
  );
};

export default Navbar;
