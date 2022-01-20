import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import EventosES6 from "./components/EventosES6";
import EventosES7 from "./components/EventosES7";
import MoreEvents from "./components/MoreEvents";
import Parent from "./components/ComunicacionComponente";
import CicloDeVida from "./components/CicloDeVida";
import AjaxApis from './components/AjaxApis'

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
      <EventosES6 />
      <hr />
      <EventosES7 />
      <hr />
      <MoreEvents />
      <hr />
      <Parent />
      <hr />
      <CicloDeVida />
      <hr/>
      <AjaxApis />
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
    </div>
  );
}

export default App;
