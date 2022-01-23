import React, { useState, useEffect } from "react";

export default function UseEffectHook() {
  const [scrollY, setScrollY] = useState(0);

  // effect changes when you want to track the changes on a prop (this case is the scroll property)
  // useEffect(() => {
  //   console.log("Updating Phase (componentDidUpdate)");
  //   console.log("Scroll is moving!");
  //   const detectScrollHandler = () => setScrollY(window.pageYOffset);
  //
  //   window.addEventListener("scroll", detectScrollHandler);
  // }, [scrollY]);

  // effect changes at initial render on the DOM. You can call on endpoints by passing an empty arr
  useEffect(() => {
    // console.log("Mounting Phase (componentDidMount)");
  }, []);

  // unmount the component and unsubscribe from events, cleanup intervals, etc... (using same scroll effect as above)
  useEffect(() => {
    // console.log("Updating Phase (componentDidUpdate)");
    // console.log("Scroll is moving!");
    const detectScrollHandler = () => setScrollY(window.pageYOffset);

    window.addEventListener("scroll", detectScrollHandler);

    return () => window.removeEventListener("scroll", detectScrollHandler);
  }, [scrollY]);

  return (
    <div>
      <h1>useEffect Hook in Functional Components</h1>
      <p>Window Scroll Y: {scrollY}px</p>
    </div>
  );
}
