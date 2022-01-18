import React, { Component } from "react";
import data from "../helpers/data.json";

function ListElement(props) {
  return (
    <li>
      <a href={props.item.web}>{props.item.name}</a>
    </li>
  );
}

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seasons: ["Spring", "Summer", "Fall", "Winter"],
    };
  }

  render() {
    return (
      <div>
        <h1>Renderizado de Elementos</h1>
        <ul>
          {/*  iterate on the seasons arr and render on HTML*/}
          {this.state.seasons.map((season, index) => (
            <li key={index}>{season}</li>
          ))}
        </ul>
        {/*    iterate on the data coming from JSON file*/}
        <ul>
          {data.frameworks.map((item) => (
            <ListElement key={item.id} item={item} />
          ))}
        </ul>
      </div>
    );
  }
}
