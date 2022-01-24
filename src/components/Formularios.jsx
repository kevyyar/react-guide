import React, { useState } from "react";

const Formularios = () => {
  const [enteredName, setEnteredName] = useState("");
  const [jsFlavor, setJSFlavor] = useState("");

  return (
    <div>
      <h1>Forms in React</h1>
      <form>
        {/* --------- INPUTS ------------ */}
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={enteredName}
          onChange={(e) => setEnteredName(e.target.value)}
        />
      </form>
      <p>Select your favorite JS Teletubby Framework</p>
      {/* --------- RADIOS------------ */}
      <input
        type="radio"
        name="jsFlavor"
        id="vanillaJS"
        value="vanillaJS"
        onChange={(e) => setJSFlavor(e.target.value)}
      />
      <label htmlFor="vanillaJS">Vanilla JavaScript</label>
      <input
        type="radio"
        name="jsFlavor"
        id="reactjs"
        value="reactjs"
        onChange={(e) => setJSFlavor(e.target.value)}
      />
      <label htmlFor="reactjs">React JS</label>
      <input
        type="radio"
        name="jsFlavor"
        id="angular"
        value="angular"
        onChange={(e) => setJSFlavor(e.target.value)}
      />
      <label htmlFor="angular">Angular</label>
      <input
        type="radio"
        name="jsFlavor"
        id="vuejs"
        value="vuejs"
        onChange={(e) => setJSFlavor(e.target.value)}
      />
      <label htmlFor="vanillaJS">VueJS</label>
    </div>
  );
};

export default Formularios;
