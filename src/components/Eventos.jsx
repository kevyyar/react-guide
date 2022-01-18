import React, { Component } from "react";

export default class Eventos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);
  }

  increase() {
    this.setState({
      counter: this.state.counter + 1,
    });
    console.log(this);
  }

  decrease() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  reset() {
    this.setState({
      counter: 0,
    });
  }

  render() {
    return (
      <div>
        <h1>Events in Class Components</h1>
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
