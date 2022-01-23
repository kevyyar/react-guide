import React, { useState } from "react";

const HookClock = () => {
  const [hour, setHour] = useState(new Date().toLocaleTimeString());
  const [isVisible, setIsVisible] = useState(false);

  // start clock
  const startClock = () => {
    setHour(new Date().toLocaleTimeString());
    setIsVisible(true);
  };
  return (
    <div>
      <h1>Hooks Clock with useEffect</h1>
      {isVisible && <p>{hour}</p>}
      <button>Start Clock</button>
      <button>Stop Clock</button>
    </div>
  );
};

export default HookClock;
