import React, { useEffect } from "react";

import "./App.css";
import TodoApp from "./Components/TodoApp";
import { getTodos } from "./api";

function App() {
  useEffect(() => {
    getTodos().then((res) => console.log("responce received is", res));
  }, []);
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}

export default App;
