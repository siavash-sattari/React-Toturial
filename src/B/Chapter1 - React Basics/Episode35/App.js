import React, {Component} from "react";
import Child from "./Child";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hi",
    };
    console.log("Constructor"); 
  }

  componentDidMount() {
    console.log("componentDidMount"); 
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  updateHandler = () => {
    this.setState({text: "Bye"});
  };

  render() {
    console.log("Render"); 
    return (
      <div>
        <Child />
        <h1>{this.state.text}</h1>
        <button onClick={this.updateHandler}>update</button>
      </div>
    );
  }
}
