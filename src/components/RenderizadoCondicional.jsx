import React, { Component } from "react";

// child components
function Login() {
  return <p>Logged in</p>;
}

function Logout() {
  return <p>Logged Out</p>;
}

export default class RenderizadoCondicional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authSession: true,
    };
  }

  render() {
    return (
      <div>
        <h1>Conditional Rendering</h1>
        {/*checking if session is true */}
        {this.state.authSession ? <Login /> : <Logout />}
      </div>
    );
  }
}
