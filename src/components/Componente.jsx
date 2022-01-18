import React, { Component } from "react";

// Class based component
class Componente extends Component {
  render(props) {
    return <h1>{this.props.msg}</h1>;
  }
}

export default Componente;
