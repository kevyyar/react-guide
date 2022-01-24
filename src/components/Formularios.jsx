import React, { useState } from "react";

const Formularios = () => {
  const [enteredName, setEnteredName] = useState("");
  const [jsFlavor, setJSFlavor] = useState("");
  const [lang, setLang] = useState("");

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
        defaultChecked
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
      {/* --------- SELECT------------ */}
      <p>Select your favorite programming language</p>
      <select
        name="language"
        onChange={(e) => setLang(e.target.value)}
        defaultValue=""
      >
        <option value="">-----</option>
        <option value="js">JavaScript</option>
        <option value="php">PHP</option>
        <option value="python">Python</option>
        <option value="rust">Rust</option>
        <option value="go">Go</option>
      </select>
    </div>
  );
};

export default Formularios;
