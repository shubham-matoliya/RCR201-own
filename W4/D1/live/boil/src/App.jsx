import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Child from "./components/Child";
import { decrementValue, incrementValue } from "./utils/math.utils";

function App() {
  let random = 0;
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    console.time("t1");
    setCount(decrementValue(count));
    console.timeEnd("t1");
  };
  const handleDecrement = () => {
    console.time("t2");
    for (let i = 0; i < 500000000; i++) {
      random += 1;
    }
    setCount(decrementValue(count));
    console.timeEnd("t2");
  };
  return (
    <div className="App">
      <h1>Count - {count}</h1>
      <div>
        <button onClick={handleDecrement}> DECREMENT </button>
        <button onClick={handleIncrement}> INCREMENT </button>
      </div>
      <Child />
    </div>
  );
}

export default App;
