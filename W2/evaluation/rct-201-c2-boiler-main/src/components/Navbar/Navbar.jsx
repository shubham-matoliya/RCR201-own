import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { isAuthenticated, token } = useSelector(
    (store) => store.authManager.data
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div
      data-cy="navbar"
      style={{
        width: "70vw",
        margin: "20px auto",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "50%",
          fontSize: "28px",
        }}
      >
        <NavLink
          data-cy="navbar-home-link"
          to="/"
          style={({ isActive }) =>
            isActive
              ? { color: "red", textDecoration: "none" }
              : { color: "black", textDecoration: "none" }
          }
          end
        >
          Home
        </NavLink>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "50%",
          fontSize: "28px",
        }}
      >
        <div data-cy="navbar-cart-items-count">
          <NavLink
            to={"/cartItem"}
            style={({ isActive }) =>
              isActive
                ? { color: "red", textDecoration: "none" }
                : { color: "black", textDecoration: "none" }
            }
          >
            Cart
          </NavLink>
        </div>

        <button data-cy="navbar-login-logout-button">
          {isAuthenticated ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
