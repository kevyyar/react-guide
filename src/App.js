import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import Eventos from "./components/Eventos";

function App() {
  return (
    <div className="App">
      <Componente msg={"hello im a component from a prop"} />
      <Propiedades
        string="this is a string"
        boolean={true}
        array={[1, 2, 3, 4, 5]}
        object={{ name: "Kev", age: 29 }}
        function={(num) => num * num}
        reactComponent={<Componente msg="im a component passed as a prop" />}
      />
      <hr />
      <Estado />
      <hr />
      <RenderizadoCondicional />
      <hr />
      <RenderizadoElementos />
      <hr />
      <Eventos />
      <hr />
    </div>
  );
}

export default App;
