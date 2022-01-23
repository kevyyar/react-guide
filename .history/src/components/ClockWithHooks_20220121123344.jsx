import React, { useEffect, useState } from "react";

const HooksClock = () => {
  const [hour, setHour] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  let timer = null;
  // increase button logic
  const startClock = (value) => {
    timer = setInterval(() => {
      setHour(new Date().toLocaleTimeString());
    }, 1000);
  };

  const stopClock = (value) => {
    clearInterval(timer);
  };
  return (
    <div>
      <h1>Clock with Hooks (useEffect) </h1>
      {visible && <p>{hour}</p>}
      <nav>
        <button onClick={() => startClock(setVisible(true))}>
          Start timer
        </button>
        <button onClick={() => stopClock(setVisible(false))}>Stop timer</button>
      </nav>
    </div>
  );
};

export default HooksClock;
