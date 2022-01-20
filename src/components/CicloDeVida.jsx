import React, { Component } from "react";

class Reloj extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    console.log(3, "Component has been eliminated from the DOM");
  }

  render() {
    return (
      <div>
        <h3>Reloj</h3>
        <p>{this.props.hour}</p>
      </div>
    )
  }
}

export default class CicloDeVida extends Component {
  constructor(props) {
    super(props);
    console.log(0, "Component is initialized. Not Yet in the DOM");

    this.state = {
      hour: new Date().toLocaleTimeString(),
      visible: false
    };
    // prop to store timer
    this.timer = null;
    // bind 'this' to methods
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.tictac = this.tictac.bind(this);
  }

  // lifecycle componentDidMount() => invoked immediately after a component is mounted (inserted into the tree)
  componentDidMount() {
    console.log(1, "Component is already on the DOM");
  }

  // lifecycle componentDidUpdate() =>  is invoked immediately after updating occurs. This method is not called for the initial render.
  componentDidUpdate(prevProps, prevState) {
    console.log(2, "The STATE or PROPS, have changed");
    console.log(prevProps);
    console.log(prevState);
  }

  // lifecycle componentWillUnmount() => is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount()
  // componentWillUnmount() {
  //   console.log(3, "Component has been eliminated from the DOM");
  // }

  tictac() {
    this.timer = setInterval(() => {
      this.setState({
        hour: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  startTimer() {
    this.tictac();
    this.setState({
      visible: true
    })
  }

  stopTimer() {
    clearInterval(this.timer);
    this.setState({
      visible: false
    })
  }

  render() {
    console.log(4, "Component is render or re-rendered in a DOM change");
    return (
      <div>
        <h1>Lifecycle in Class Components</h1>
        {this.state.visible && <Reloj hour={this.state.hour} />}
        <button onClick={this.startTimer}>Start Time</button>
        <button onClick={this.stopTimer}>Stop Time</button>
      </div>
    );
  }
}
