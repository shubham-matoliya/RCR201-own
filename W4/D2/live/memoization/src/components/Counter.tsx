import React, { useState } from "react";

const Counter = () => {
  console.log("CounterApp");
  const [count, setCount] = useState(10);

  const increment = (value: number = 1) => setCount(count + value);
  const decrement = (value: number = 1) => setCount(count - value);

  return (
    <div>
      <h3>Counter: {count}</h3>
      <div>
        <button onClick={() => decrement()}>-</button>
        <button onClick={() => increment()}>+</button>
      </div>
    </div>
  );
};

export default React.memo(Counter);
//if we write a function inside memo then it will nor rerender till its value chages
//watch documentation
