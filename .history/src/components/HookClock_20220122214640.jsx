import React, { useState } from "react";

const HookClock = () => {
  const [hour, setHour] = useState(new Date().toLocaleTimeString());
  const [isVisible, setIsVisibl] = useState(new Date().toLocaleTimeString());

  return (
    <div>
      <h1>Hooks Clock with useEffect</h1>
    </div>
  );
};

export default HookClock;
