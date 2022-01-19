import React, { Component } from "react";

// button component
function Button(props) {
  return (
    <div>
      <h1>Button Component</h1>
      <button onClick={props.onGreetHandler}>
        click me for a secret console msg!
      </button>
    </div>
  );
}

export default class MoreEvents extends Component {
  clickHandler = (e, msg) => {
    console.log("hello mate");
    // originates the target (synthetic base event)
    console.log(e);
    // access to native event (vanilla js)
    console.log(e.nativeEvent);
  };

  greetHandler = (e, msg) => {
    // passed params to the event handler
    console.log(msg);
    console.log(e);
  };
  render() {
    return (
      <div>
        <h1>More About Events</h1>
        <button onClick={this.clickHandler}>Greet!</button>
        <button onClick={(e) => this.greetHandler(e, "hi!")}>
          Greet me with a message!
        </button>
        <Button
          onGreetHandler={(e) => this.greetHandler(e, "Im a button component!")}
        />
      </div>
    );
  }
}
