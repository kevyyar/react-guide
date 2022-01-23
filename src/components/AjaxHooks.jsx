import React, { useState, useEffect } from "react";

// pokemon component
function Pokemon({ name, avatar }) {
  return (
    <figure>
      <img alt={name} src={avatar} />
      <figcaption>{name}</figcaption>
    </figure>
  );
}

const AjaxHooks = (props) => {
  const [pokemons, setPokemons] = useState([]);

  // call on endpoint
  // useEffect(() => {
  //   const url = "https://pokeapi.co/api/v2/pokemon";
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       json.results.forEach((el) => {
  //         fetch(el.url)
  //           .then((res) => res.json())
  //           .then((json) => {
  //             const pokemon = {
  //               id: json.id,
  //               name: json.name,
  //               avatar: json.sprites.front_default,
  //             };
  //             setPokemons((pokemons) => [...pokemons, pokemon]);
  //           });
  //       });
  //     });
  // }, []);

  useEffect(() => {
    const getPokemons = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await response.json();

      data.results.forEach(async (json) => {
        const jsonRes = await fetch(json.url);
        const jsonData = await jsonRes.json();
        const pokemon = {
          id: jsonData.id,
          name: jsonData.name,
          avatar: jsonData.sprites.front_default,
        };

        setPokemons((pokemons) => [...pokemons, pokemon]);
      });
    };

    getPokemons();
    // const url = "https://pokeapi.co/api/v2/pokemon";
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((json) => {
    //     json.results.forEach((el) => {
    //       fetch(el.url)
    //         .then((res) => res.json())
    //         .then((json) => {
    //           const pokemon = {
    //             id: json.id,
    //             name: json.name,
    //             avatar: json.sprites.front_default,
    //           };
    //           setPokemons((pokemons) => [...pokemons, pokemon]);
    //         });
    //     });
    //   });
  }, []);

  return (
    <div>
      <h1>Async Requests with Hooks</h1>
      {pokemons.length === 0 ? (
        <h3>Loading...</h3>
      ) : (
        pokemons.map((el) => (
          <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
        ))
      )}
    </div>
  );
};

export default AjaxHooks;
