import React, { Component } from "react";

const Pokemon = (props) => {
  return (
    <figure>
      <img src={props.avatar} alt={props.name} />
      <figcaption>{props.name}</figcaption>
    </figure>
  );
};

export default class FetchAPI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
    };
  }

  componentDidMount() {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    fetch(url)
      .then((res) => res.json())
      .then((json) =>
        json.results.map((el) =>
          fetch(el.url)
            .then((res) => res.json())
            .then((json) => {
              const pokemon = {
                id: json.id,
                name: json.name,
                avatar: json.sprites.front_default,
              };

              const pokemons = [...this.state.pokemons, pokemon];

              this.setState({
                pokemons,
              });
            })
        )
      );
  }

  render() {
    return (
      <div>
        <h1>Fetch API Exercise #1</h1>
        {this.state.pokemons.map((pokemon) => (
          <Pokemon
            key={pokemon.id}
            name={pokemon.name}
            avatar={pokemon.avatar}
          />
        ))}
      </div>
    );
  }
}
