import React, {Component} from "react";
import Child from "./Child";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Child number={20}/> */}
        <Child number="20"/>
      </div>
    );
  }
}
