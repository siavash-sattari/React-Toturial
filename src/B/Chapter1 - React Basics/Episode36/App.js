import React, {Component} from "react";
import Child from "./Child";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: true,
    };
    console.log("Constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  removeHandler = () => {
    this.setState({isShown: false});
  };

  render() {
    console.log("Render");
    return (
      <div>
        {this.state.isShown && <Child />}
        <button onClick={this.removeHandler}>Remove</button>
      </div>
    );
  }
}
