import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/auth/auth.action";
import { useLocation, useNavigate } from "react-router-dom";
import { store } from "../redux/store";
const Login = () => {
  const [loginCreds, setLoginCreds] = useState({});
  const { isAuth } = useSelector((store) => store.authManager);
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
    // login(dispatch, {
    //   email: "eve.holt@reqres.in",
    //   password: "cityslicka",
    // });
    // after using thunk this can be written as
    dispatch(login({ email: "eve.holt@reqres.in", password: "cityslicka" }));
    // without using thunk we can not pass async functions in dispatch measns a dispatch function can not return a promise and an async function return a promise thats why we can not pass it.
  };

  useEffect(() => {
    if (isAuth) {
      // to redirect user from where he came to login page
      // state is coming from RequireAuth.jsx in which pathname will store url of that address from whr user is redirected. and that url will get stored in state object and from key. So when we login isAuth will be true and it will check if there is some address url in state.from then it will replace the url and it will navigate user there else navigate to home page

      if (state.from) {
        navigate(state.from, { replace: true });
      } else {
        navigate("/");
      }
    }
  }, [isAuth, navigate]);
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
          name="email"
          type="email"
          placeholder="Enter Email"
          onChange={hanldeChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Enter Password..."
          onChange={hanldeChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
