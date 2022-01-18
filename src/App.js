import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Componente from "./components/Componente";

function App() {
  return (
    <div className="App">
      <Componente msg={"hello im a component from a prop"} />
    </div>
  );
}

export default App;
