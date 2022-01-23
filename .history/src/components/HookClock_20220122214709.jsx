import React, { useState } from "react";

const HookClock = () => {
  const [hour, setHour] = useState(new Date().toLocaleTimeString());
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <h1>Hooks Clock with useEffect</h1>
      {isVisible && <p>{hour}</p>}
    </div>
  );
};

export default HookClock;
