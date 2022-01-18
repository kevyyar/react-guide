import React, { Component } from "react";

// Class based component
/*
class Componente extends Component {
  render(props) {
    return <h1>{this.props.msg}</h1>;
  }
}
*/

// Function based component
// #1 function declaration
/*
function Componente(props) {
  return <h1>{props.msg}</h1>;
}
 */
//#2 Arrow Function
const Componente = (props) => <h1>{props.msg}</h1>;

export default Componente;
