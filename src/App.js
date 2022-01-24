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
import AjaxApis from "./components/AjaxApis";
import UseStateHook from "./components/useStateHook";
import UseEffectHook from "./components/useEffectHook";
import FetchAPI from "./components/exercises/fetchAPI";
import HookClock from "./components/HookClock";
import AjaxHooks from "./components/AjaxHooks";
import HooksPersonalizados from "./components/HooksPersonalizados";
import Referencias from "./components/Referencias";
import Formularios from "./components/Formularios";

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
      <br />
      <Estado />
      <br />
      <RenderizadoCondicional />
      <br />
      <RenderizadoElementos />
      <br />
      <EventosES6 />
      <br />
      <EventosES7 />
      <br />
      <MoreEvents />
      <br />
      <Parent />
      <br />
      <CicloDeVida />
      <br />
      {/* <AjaxApis /> */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <UseStateHook title="Followers" />
      <br />
      <UseEffectHook />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <FetchAPI />
      <HookClock />
      <AjaxHooks />
      <HooksPersonalizados />
      <Referencias />
      <Formularios />
    </div>
  );
}

export default App;
