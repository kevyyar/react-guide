import React, { useState } from "react";

export default function UseStateHook(props) {
  const [counter, setCounter] = useState(0);

  const increaseHandler = () => {
    setCounter(counter + 1);
  };
  const decreaseHandler = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <h1>useStateHook</h1>
      <h3>{props.title} Counter:</h3>
      <p> {counter}</p>
      <nav>
        <button onClick={increaseHandler}>Increase +</button>
        <button onClick={decreaseHandler}>Decrease -</button>
      </nav>
    </div>
  );
}

UseStateHook.defaultProps = {
  title: "Clicks",
};
