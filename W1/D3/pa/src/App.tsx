import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./Components/Button";

function App() {
  return (
    <div className="App">
      {/* if we have to pass text inside button then we have to pass it as children */}
      <Button handleClick>Click Me!</Button>
    </div>
  );
}

export default App;
