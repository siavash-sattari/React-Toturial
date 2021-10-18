import React, {Component} from "react";
import Child from "./Child";

export default class App extends Component {
  state = {
    text: "Hi",
  };

  reset = () => {
    this.setState({text: "Hi"});
  };

  render() {
    console.log("App is rendered");
    return (
      <div>
        <button onClick={this.reset}>reset</button>
        <h1>{this.state.text}</h1>
        <Child text={this.state.text} />
      </div>
    );
  }
}
