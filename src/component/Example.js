import React, { useState } from "react";
import "./example.css";

const Example = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="page">
      <h1>{count}</h1>
      <button onClick={handleIncrement} className="buttonOne">
        Add 1
      </button>

      <button onClick={handleDecrement} className="buttonTwo">
        Sub 1
      </button>
    </div>
  );
};

export default Example;
