import React, {Component} from "react";
import SayHi from "./SayHi";

export default class App extends Component {
  render() {
    return (
      <div>
        <SayHi sayHi={(bool) => (bool ? "Hi" : "Bye")} />
      </div>
    );
  }
}
