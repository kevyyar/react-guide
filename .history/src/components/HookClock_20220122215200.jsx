import React, { useState } from "react";

const HookClock = () => {
  const [hour, setHour] = useState(new Date().toLocaleTimeString());
  const [isVisible, setIsVisible] = useState(false);

  let timer = null;
  // start clock
  const startClock = (visible) => {
    timer = setTimeout(() => {
      setHour(new Date().toLocaleTimeString());
    }, 1000);
  };
  // stop clock
  const stopClock = (visible) => {
    clearInterval(timer);
  };
  return (
    <div>
      <h1>Hooks Clock with useEffect</h1>
      {isVisible && <p>{hour}</p>}
      <button onClick={() => startClock(setIsVisible(true))}>
        Start Clock
      </button>
      <button onClick={() => stopClock(setIsVisible(false))}>Stop Clock</button>
    </div>
  );
};

export default HookClock;
