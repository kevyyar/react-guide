import React from "react";
import { useFetch } from "../hooks/useFetch";

const HooksPersonalizados = () => {
  // console.log(useFetch());
  let url = "https://pokeapi.co/api/v2/pokemon";
  url = "https://jsonplaceholder.typicode.com/users";
  let { data, error, isPending } = useFetch(url);

  return (
    <div>
      <h2>Hooks Personalizados</h2>
      <h3>{JSON.stringify(isPending)}</h3>
      <h3>
        <mark>{JSON.stringify(error)}</mark>
      </h3>
      <h3>
        <pre style={{ whiteSpace: "pre-wrap" }}>
          <code>{JSON.stringify(data)}</code>
        </pre>
      </h3>
    </div>
  );
};

export default HooksPersonalizados;
