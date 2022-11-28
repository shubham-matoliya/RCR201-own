import { login } from "../redux/auth/auth.actions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { store } from "../redux/store";

const Login = () => {
  const [loginCreds, setLoginCreds] = useState({});
  const { isAuthenticated } = useSelector((store) => store.authManager.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email: "eve.holt@reqres.in", password: "cityslicka" }));
  };
  useEffect(() => {
    if (isAuthenticated) {
      if (state.from) {
        navigate(state.from, { replace: true });
      } else {
        navigate("/");
      }
    }
  }, [isAuthenticated, navigate]);
  return (
    <div>
      Login
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          maxWidth: "200px",
          gap: "10px",
        }}
      >
        <input
          data-cy="login-email"
          name="email"
          type="email"
          placeholder="Enter Email"
          onChange={hanldeChange}
        />
        <input
          data-cy="login-password"
          name="password"
          type="password"
          placeholder="Enter Password..."
          onChange={hanldeChange}
        />
        <button data-cy="login-submit" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
