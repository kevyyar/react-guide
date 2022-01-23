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
    </div>
  );
};

export default HookClock;
