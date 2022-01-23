import React, { useState } from "react";

const HookClock = () => {
  const [hour, setHour] = useState(new Date().toLocaleTimeString());
  const [isVisible, setIsVisible] = useState(false);

  let timer = null;
  // start clock
  const startClock = () => {
    setHour(new Date().toLocaleTimeString());
    setIsVisible(true);
  };
  // stop clock
  const stopClock = () => {
    setIsVisible(false);
  };
  return (
    <div>
      <h1>Hooks Clock with useEffect</h1>
      {isVisible && <p>{hour}</p>}
      <button onClick={startClock}>Start Clock</button>
      <button onClick={stopClock}>Stop Clock</button>
    </div>
  );
};

export default HookClock;
