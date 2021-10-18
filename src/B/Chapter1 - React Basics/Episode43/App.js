import React, {Component} from "react";
import Child from "./Child";
import NewChild from "./NewChild";

export default class App extends Component {
  render() {
    return (
      <div>
          <Child age={24}/>
          <NewChild />
      </div>
    );
  }
}
