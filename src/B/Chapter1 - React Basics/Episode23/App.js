import React, {Component} from "react";
import ClassEvent from "./ClassEvent";
import FunctionEvent from "./FunctionEvent";

export default class App extends Component {
  render() {
    return (
      <div>
        <ClassEvent />
        <FunctionEvent />
      </div>
    );
  }
}
