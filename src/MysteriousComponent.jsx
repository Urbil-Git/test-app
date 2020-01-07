import React, { useState } from "react";

const counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <label data-testid="label">{counter}</label>
      <button
        data-testid="button"
        onClick={() => {
          setCounter(counter + 1);
        }}
      ></button>
    </div>
  );
};

export default counter;
