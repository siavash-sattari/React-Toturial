import React, {Component} from "react";
import Child from "./Child";

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor"); // 1
  }

  componentDidMount() {
    console.log("componentDidMount"); // 6
  }

  render() {
    console.log("Render"); // 2
    return <Child />;
  }
}
