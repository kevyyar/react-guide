import React, { Component } from "react";

export default class FetchAPI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
    };
  }

  render() {
    return (
      <div>
        <h1>Fetch API Exercise #1</h1>
      </div>
    );
  }
}
