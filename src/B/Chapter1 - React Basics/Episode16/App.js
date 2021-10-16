import React, {Component} from "react";
import "./App.css";

export default class App extends Component {
  header = {color: "red", fontSize: "2em"};
  render() {
    return (
      <>
        {/* <h1 style={{color: "red", fontSize: "2em"}}>John Doe</h1> */}
        <h1 style={this.header}>John Doe</h1>
        <h1 className="job">React Developer</h1>
      </>
    );
  }
}
