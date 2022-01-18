import React from "react";

export default function Propiedades(props) {
  return (
    <div>
      <h2>Propiedades: {props.defaultProp}</h2>
      <ul>
        <li>{props.string}</li>
        <li>{props.boolean ? "true" : "false"}</li>
        <li>{props.array.join("-")}</li>
        <li>
          {props.object.name} - {props.object.age}
        </li>
        <li>{props.function(4)}</li>
        <li>{props.array.map(props.function).join("-")}</li>
        <li>{props.reactComponent}</li>
      </ul>
    </div>
  );
}

// define default prop types
Propiedades.defaultProps = {
  defaultProp: "Prop por defecto",
};
