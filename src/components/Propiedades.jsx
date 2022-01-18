import React from "react";
import PropTypes from "prop-types";

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

// define Types for Props
Propiedades.propTypes = {
  string: PropTypes.string,
  boolean: PropTypes.bool,
  array: PropTypes.array,
  object: PropTypes.object,
  function: PropTypes.func,
  reactComponent: PropTypes.element,
};
