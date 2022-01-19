import React, { Component } from "react";

export default class EventosES7 extends Component {
  state = {
    counter: 0,
  };
  increase = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
    console.log(this);
  };

  decrease = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  reset = () => {
    this.setState({
      counter: 0,
    });
  };

  render() {
    return (
      <div>
        <h1>Events in Class Components ES7 version</h1>
        <p>{this.state.counter}</p>
        <div>
          <button onClick={this.increase}>+</button>
          <button onClick={this.decrease}>-</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}
