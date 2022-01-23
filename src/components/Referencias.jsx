import React, { useState, useRef } from "react";

const Referencias = () => {
  let refMenuButton = useRef();
  let refMenu = useRef();

  console.log(refMenuButton);
  console.log(refMenu);

  const toggleMenuHandler = (e) => {
    if (refMenuButton.current.textContent === "Menu") {
      refMenuButton.current.textContent = "Close Menu";
      refMenu.current.style.display = "block";
    } else {
      refMenuButton.current.textContent = "Menu";
      refMenu.current.style.display = "none";
    }
  };

  return (
    <div>
      <h1>References in React</h1>
      <button ref={refMenuButton} onClick={toggleMenuHandler}>
        Menu
      </button>
      <nav ref={refMenu} style={{ display: "none" }}>
        <a href="#">Section 1</a>
        <br />
        <a href="#">Section 2</a>
        <br />
        <a href="#">Section 3</a>
        <br />
        <a href="#">Section 4</a>
        <br />
        <a href="#">Section 5</a>
      </nav>
    </div>
  );
};

export default Referencias;
