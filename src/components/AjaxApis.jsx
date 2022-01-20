import React, { Component } from "react";

// pokemon functional component

function Pokemon(props) {
  return (
    <figure>
      <img alt={props.name} src={props.avatar} />
      <figcaption>{props.name}</figcaption>
    </figure>
  );
}

export default class AjaxApis extends Component {
  state = {
    pokemons: [],
  };

  componentDidMount() {
    const url = "https://pokeapi.co/api/v2/pokemon";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        json.results.forEach((el) => {
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
            });
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Ajax Requests from Class Components</h1>
        {this.state.pokemons.length > 0 ? (
          this.state.pokemons.map((el) => (
            <Pokemon key={el.id} avatar={el.avatar} name={el.name} />
          ))
        ) : (
          <h3>No Pokemons yet</h3>
        )}
      </div>
    );
  }
}
