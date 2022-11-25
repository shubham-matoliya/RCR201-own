import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./redux/theme/theme.actions";
import { increment, decrement } from "./redux/counter/counter.actions";

function App() {
  const count = useSelector((store) => store.counter.count);
  const theme = useSelector((store) => store.theme.theme);
  const dispatch = useDispatch();
  return (
    <div
      className="App"
      style={
        theme === "white"
          ? { backgroundColor: "white", color: "black" }
          : { backgroundColor: "black", color: "white" }
      }
    >
      <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
      <h1>{count}</h1>
      <div className="card">
        <button onClick={() => dispatch(decrement())}>DEC</button>
        <button onClick={() => dispatch(increment())}>INC</button>
      </div>
    </div>
  );
}

export default App;
