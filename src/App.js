import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const user = "kevyyar";
  const auth = true;
  const favSports = ["soccer", "football", "basketball", "f1"];
  return (
    <div>
      {/*  Short Circuit Operator */}
      <h1>{auth && user}</h1>
      <ol>
        {/*  loop through arrays and render content */}
        {favSports.map((sport, index) => (
          <li key={index}>{sport}</li>
        ))}
      </ol>
      {/*  self closing tags*/}
      <img
        src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        alt="react snippet"
        width="300px"
      />
    </div>
  );
}

export default App;
