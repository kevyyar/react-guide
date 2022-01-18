import React, { Component } from "react";

// Child Component
function ChildComponent(props) {
  return <p>Im a Child Component & Counter is {props.onCounter}</p>;
}

export default class Estado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1,
      });
    }, 2000);
  }

  render() {
    return (
      <div>
        <h1>State</h1>
        <p>Counter: {this.state.counter}</p>
        <ChildComponent onCounter={this.state.counter} />
      </div>
    );
  }
}
