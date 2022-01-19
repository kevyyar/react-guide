import React, { Component } from "react";

export default class Parent extends Component {
  state = {
    counter: 0,
  };

  increaseCounterHandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <div>
        <h1>Component Communication</h1>
        <p>Counter: {this.state.counter}</p>
        <Child
          onIncreaseCounter={this.increaseCounterHandler}
          msg="a random message for the child"
        />
      </div>
    );
  }
}

function Child(props) {
  return (
    <div>
      <h3>Child Component</h3>
      <p>{props.msg}</p>
      <button onClick={props.onIncreaseCounter}>Add +1</button>
    </div>
  );
}
