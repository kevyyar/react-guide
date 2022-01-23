import React, { useState } from "react";

const HookClock = () => {
  const [hour, setHour] = useState(new Date().toLocaleTimeString());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timer;

    if (isVisible) {
      timer = setInterval(() => {
        setHour(new Date().toLocaleTimeString());
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => {
      console.log("unmounting phase");
      clearInterval(timer);
    };
  }, [isVisible]);

  return (
    <div>
      <h1>Hooks Clock with useEffect</h1>
      {isVisible && <p>{hour}</p>}
      <button onClick={() => setIsVisible(true)}>Start Clock</button>
      <button onClick={() => setIsVisible(false)}>Stop Clock</button>
    </div>
  );
};

export default HookClock;
